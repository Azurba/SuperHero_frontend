import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { 
    
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
    */
      public getSuperHeroes() : SuperHero[] {
        let hero = new SuperHero();
        hero.id = 1;
        hero.name = "Spider man";
        hero.firstName = "Peter";
        hero.lastName = "Parker";
        hero.place = "New York";

        //return the hero as an array
        return [hero];
      }


}
