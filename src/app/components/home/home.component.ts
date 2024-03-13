import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  data = [
    {
      name:"Rafay",
      id:"abakke12"
    },
    {
      name:"Rafay",
      id:"abakke12"
    },
    {
      name:"Rafay",
      id:"abakke12"
    },
  ]

  form = {name:"", id:""}

  submitForm(myform:any){
    const tempform = {
      name:myform.name,
      id:myform.id
    }
    if(tempform.name!=="" && tempform.id!==""){
      this.data.push(tempform)
      this.form = {name:"", id:""}
    }
  }
}
