import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent {

  
  constructor() { 
    //  $ queremos almacenar
    // observer es quien emite los valores, cuando termina, cuando da error, qué información está fluyendo a través de el
    // el observable no se ejecuta hasta que haya una persona suscrita
    
    let i:number = -1;

    const obs$ = new Observable( observer => {
      const interval = setInterval( () => {
        
        i++;
        observer.next(i);

        if(i === 4 ) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000)
    } );

    obs$.pipe(
      retry(2)
    ).subscribe(
      valor => console.log('Subs: ', valor),
      error => console.warn('Error: ', error),
      () => console.info('Obs Terminado')
    );
    
  }


}
