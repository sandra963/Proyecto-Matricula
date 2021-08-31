import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  contactenosForm = this.fb.group({
    Motivo: [''],
    Nombre: [''],
    Numero: [''],
    Correo: [''],
    Mensaje: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
