import { Component } from '@angular/core';
import { SuperHero } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  //variable heros of type SuperHero [] and initilized to empty
  heroes: SuperHero[] = []

  //Dependency injection: inject the SuperHeroService to the constructor
  constructor(private superHeroService : SuperHeroService) {

  }

  /*ngOnInit is an Angular Hook.
    Angular has life cycles. A component instance has a lifecycle that starts when Angular instantiates the 
    component class and renders the component view along with its child views

    Hooks are methods that are called at specific points in the lifecycle of angular component. They give us a 
    chance to act on a componen instant at the appropriate moment

    --constructor vs ngOnInit--
    The constructor is a TypeScript class method that is called when an instance of the class is created. 
    It is used to initialize the properties of the class, and to perform any setup that needs to be done before t
    he component is fully initialized.
    On the other hand, ngOnInit is an Angular lifecycle hook that is called after the constructor when the 
    component is initialized. It is used to perform any additional initialization required by the component, 
    such as fetching data or subscribing to events

    With the subscribe method, we get a result.
    */
    ngOnInit(): void {
      this.superHeroService.getSuperHeroes().subscribe(result =>{
        this.heroes = result;
      });
      
    }
    
}


