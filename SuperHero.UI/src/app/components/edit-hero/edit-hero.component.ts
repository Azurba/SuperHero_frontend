import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent {
  //add input to hold the data
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  /**
   *
   */
  constructor(private superHeroService: SuperHeroService) {
    
  }

  // Here we're subscribing the observable and when the result comes back, it will be stored in "heroes" 
  // which we will send/emit to the parent component (home)
  updateHero(hero:SuperHero){
    this.superHeroService.updateHero(hero).subscribe((heroes)=>this.heroesUpdated.emit(heroes));
  }
  createHero(hero:SuperHero){
    this.superHeroService.createHero(hero).subscribe((heroes)=>this.heroesUpdated.emit(heroes));
  }
  deleteHero(hero:SuperHero){
    this.superHeroService.deleteHero(hero).subscribe((heroes)=>this.heroesUpdated.emit(heroes));
  }
}
