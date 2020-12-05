import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBluPAkyq75LmfeLJpidTMQV8c2BmoiOEAJWHtx6jENg-owrgHYArN0JXr9GN_Jx1yzK2uAgDtjGH7z8OI'
    })

     return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
        

   }
}
