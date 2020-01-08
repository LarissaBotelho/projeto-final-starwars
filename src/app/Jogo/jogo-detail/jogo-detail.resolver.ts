import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { JogoService } from '../jogo.service';
import { Jogo } from '../jogo';


@Injectable()
export class JogoDetailResolver implements Resolve<Jogo> {

    constructor(private service: JogoService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            const id = route.params['id'];
            return this.service.getPlanetsById(id);
        }
}
