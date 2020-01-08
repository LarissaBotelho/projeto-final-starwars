
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Jogo } from '../jogo';
import { JogoService } from '../jogo.service';
import { PeopleService } from '../../people/people.service';
import { People } from '../../people/people';

@Component({
  selector: 'app-jogo-detail',
  templateUrl: 'jogo-detail.component.html'
})

export class JogoDetailComponent implements OnInit, OnDestroy {

  private subs: Subscription;
  jogo: Jogo;
  peoples: People[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: PeopleService,
    private servicePlanet: JogoService) {}

  ngOnInit() {
    this.getPeopleRoute();
  }

  private getPeopleRoute(): void {
    this.subs = this.route.data.subscribe(
      (data) => {
        this.jogo = data[0];
        this.getPeoplesByPlanet(this.jogo['residents']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  private getPeoplesByPlanet(peoples) {
    // hack -> clear array
    this.peoples = [];

    if (peoples !== undefined) {
      peoples.forEach(
        urlPeople => {
          this.service.getPeoplesById(this.removeUrlPeople(urlPeople)).subscribe(
            (people) => {
              this.peoples.push(people);
            }
          );
        }
      );
    }
  }

  private removeUrlPlanet(url: String) {
    const value = url.replace('https://swapi.co/api/planets/', '').replace('/', '');
    return value;
  }

  private removeUrlPeople(url: String) {
    const value = url.replace('https://swapi.co/api/people/', '').replace('/', '');
    return value;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
