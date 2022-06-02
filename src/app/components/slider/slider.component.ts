import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Movie } from '../../models/movie';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      // if the same time of animation:
      transition('void <=> *', [animate('1s')]),
      // if different time of animation
      // transition('void => *', [animate('1s')]),
      // transition('* => void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  // Initialize every variable we declare as class member.
  currentSlideIndex: number = 0;

  readonly imagesSizes = IMAGES_SIZES;

  //  constructor() {} -> not using any service so we can remove the constructor

  // on Initialization of the component we are going to do smth
  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 5000);
  }
}
