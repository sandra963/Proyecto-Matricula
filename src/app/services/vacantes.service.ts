import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacantesService {

  constructor(private readonly HttpClient:HttpClient) { }
  _getVacantes(){
  return this.HttpClient.get('https://localhost:44309/api/Vacantes/GetListVacantes');
  }

}
