import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsReponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsServices {

  private _historial : string[] = [];
  private apiKey : string = 'YWyVLUBb2ONZjDPinHQtdgKUylToCm4T';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
  public resultados : Gif[] = [];

  get historial() : string[]{
    return [...this._historial];
  }
  constructor(private http : HttpClient){
  
   if(localStorage.getItem('historial')){
      this._historial =  JSON.parse(localStorage.getItem('historial')!) || [];
      this.resultados =  JSON.parse(localStorage.getItem('resultados')!) || [];

   }
  }

  buscarGifs( query : string){

    query = query.trim().toLocaleLowerCase();

    if(!this._historial.includes( query )){
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params : HttpParams = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limite','10')
    .set('q', query);

    this.http.get<SearchGifsReponse>(`${this.servicioUrl}/search`, {params })
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados',JSON.stringify( this.resultados))
      }
    )

  }


}
