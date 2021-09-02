import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  contactenosForm = this.fb.group({
    Motivo: ['',Validators.required],
    Nombre: ['',Validators.required],
    Numero: ['',Validators.required],
    Correo: ['',[Validators.required,Validators.email]],
    Mensaje: ['',Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

