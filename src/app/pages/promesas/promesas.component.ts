import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  //   console.log('Inicio del Init');

  //   const promesa = new Promise((resolve, reject) => {

  //     if (true)
  //     {
  //       resolve('Hola World');
  //     }
  //     else
  //     {
  //       reject('algo salió mal');
  //     }
  //   });


  //   promesa.then( res => {
  //     console.log(`Se imprimió el ${res}`)
  //   })
  //   .catch(error => console.log('Error en la promesa: ', error));

  //   console.log('Fin del init');

     this.getUsuarios().then(usuarios => {
       console.log(usuarios);
     })
  
}

  getUsuarios() {

    return new Promise (resolve => {
      
      fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json() )
        .then(body => resolve(body.data))

    });
  }


  

}
