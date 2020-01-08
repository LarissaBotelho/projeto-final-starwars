
import { Component, OnInit } from '@angular/core';

import { Jogo } from '../jogo';
import { JogoService } from '../jogo.service';

@Component({
  selector: 'app-jogo-list',
  templateUrl: 'jogo-list.component.html'
})

export class JogoListComponent implements OnInit {
  planets: Jogo[];
  nextPage: String;
  search: String;
  order: String;
  filter: String;
  backPage: String;

  constructor(private service: JogoService) {}

  ngOnInit() {
    this.getPlanets();
  }

  private getPlanets(): void {
    this.service.getPlanets().subscribe(
      (planets) => {
        this.planets = planets['results'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getPlanetsByPage(page): void {
    console.log(page);
    this.service.getPlanetsByPage(page).subscribe(
      (planets) => {
        this.planets = planets['results'];
        this.backPage = planets['previous'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private getPlanetBySearch(name): void {
    this.service.getPlanetsByName(name).subscribe(
      (planets) => {
        this.planets = planets['results'];
        this.backPage = planets['previous'];
        this.nextPage = planets['next'];
      },
      (error: any) => {
        console.log('Falha no acesso ao service');
      }
    );
  }

  private removeUrlPlanets(url: String) {
    const value = url.replace('https://swapi.co/api/planets/', '').replace('/', '');
    return value;
  }
}
