import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import SwiperCore, {
  Swiper,
  SwiperOptions,
  // Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  // Scrollbar,
  // A11y,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay, Keyboard]);

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.scss'],
})
export class HomeLandingComponent implements OnInit {
  config: SwiperOptions = {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    keyboard: true,
    // spaceBetween: 50,
    autoplay: {
      delay: 35000,
      disableOnInteraction: false,
    },
    followFinger: true,
    // autoHeight: true,
    pagination: { clickable: true },
    // navigation: true,
    scrollbar: { draggable: true },
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSwiper(swiper: Swiper) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
