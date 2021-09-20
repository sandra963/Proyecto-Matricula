import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaDNIService {

  constructor(private readonly http: HttpClient) { }

  __getDNI(){
    return this.http.get('/api/dni/GetDNI');
  }
}
