import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;
  

  constructor(private router: Router) {

    this.getArgumentosRuta();

  }

  getArgumentosRuta() {
    this.router.events.pipe(

      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null), // Este fitro se hará al resultado del foltro anterior definido
      map((event: ActivationEnd) => event.snapshot.data),

    ).subscribe(({ titulo }) => {// destructuramos data.titulo entre llaves sólo pedimos titulo
      this.titulo = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
  }

  ngOnInit(): void {
  }

}
