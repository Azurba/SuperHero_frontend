import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  //we get this in swagger, by running the SuperHero_backend on Visual Studio
  url = "https://localhost:7132/api/SuperHero'";

  //inject the HttpClient class
  constructor(private http : HttpClient) { 
    
  }

  // : SuperHero[] specifies the return type of the method
    /*
      The difference between public SuperHero[] getSuperHeroes() and public getSuperHeroes(): SuperHero[] is in the 
      way the method is declared.

      public SuperHero[] getSuperHeroes() is a method that explicitly declares its return type as an array of SuperHero 
      objects. This means that when the method is called, it will always return an array of SuperHero objects, 
      and the compiler will enforce this return type.

      On the other hand, public getSuperHeroes(): SuperHero[] is a method that declares its return type as an array of 
      SuperHero objects, but it does not explicitly declare its return type as SuperHero[]. 
      Instead, it relies on TypeScript's type inference to determine the return type based on the body of the method. 
      This means that the method could potentially return a different type of object, but the compiler will assume that 
      the return type is SuperHero[].

      An Observable is an object that can have many observers and when it changes, it can let
      the observers know by using the subscribe method

      The subscribe method is on the app.component.ts

    */
      public getSuperHeroes() : Observable<SuperHero[]> {
        return this.http.get<SuperHero[]>('https://localhost:7132/api/SuperHero')
        /*
        let hero = new SuperHero();
        hero.id = 1;
        hero.name = "Spider man";
        hero.firstName = "Peter";
        hero.lastName = "Parker";
        hero.place = "New York";
        */
        //return the hero as an array
        //return [hero];
      }


}
