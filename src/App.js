import { Mousewheel, Parallax, FreeMode, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import React, { useState } from 'react';
import './App.css';

import mainMK from './images/main.jpg';
import houses from './images/houses.jpg';
import icecream from './images/icecream.jpg';
import process1 from './images/process1.jpg';
import drink from './images/drink.jpg';


function App() {

	const [controlledSwiper, setControlledSwiper] = useState(null);
	const desc = document.querySelector(".description");

	return (
		<div className="App">
			<div className="description">
				<h1 className="logo">ВкусныйМастер</h1>
				<p><span>Мастер-классы</span> с выездом и в нашей мастерской, в которых дети и взрослые, благодаря широкому выбору
					творческих,
					кулинарных и других
					мастер-классов, могут обрести множество умений и навыков, узнать что-то новое и интересное,
					расширить свой кругозор, провести
					время весело и проявить свои скрытые таланты.</p>
				<div className="newyear">
					<div className="santa"></div>
					<p className="dad">При заказе мастер-класса в детский сад или школу поздравление от Деда Мороза в подарок!</p>
				</div>
			</div>
			<Swiper className="slider"
				modules={[Mousewheel, Parallax, FreeMode, Controller]}
				controller={{ control: controlledSwiper }}
				onSlideChange={(e) => e.activeIndex > 0 ? desc.classList.add("hidden") : desc.classList.remove("hidden")}
				allowTouchMove={true}
				freeMode={true} // листать слайдер без привязки к конкретной позиции
				centeredSlides={true} // первый слайд будет находиться в центре
				mousewheel={true} // переключение между слайдами по скроллу
				parallax={true} // параллакс
				breakpoints={{ // брейкпоинты
					0: { // от 0 до 679
						slidesPerView: 1.5, // количество слайдов на 1 странице
						spaceBetween: 20 // расстояние между слайдами
					},
					680: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 60 // расстояние между слайдами
					}
				}}
			>
				<div className='slider__wrapper swiper-wrapper'>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${mainMK})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${houses})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${icecream})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${process1})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${drink})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${mainMK})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${mainMK})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${mainMK})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${mainMK})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${mainMK})` }}></div>
					</SwiperSlide>
				</div>
			</Swiper>

			<Swiper className="slider slider-bg"
				modules={[Parallax, Controller]}
				onSwiper={setControlledSwiper}
				centeredSlides={true} // первый слайд будет находиться в центре
				parallax={true} // параллакс
				breakpoints={{ // брейкпоинты
					0: { // от 0 до 679
						slidesPerView: 1.5, // количество слайдов на 1 странице
						spaceBetween: 20 // расстояние между слайдами
					},
					680: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 60 // расстояние между слайдами
					}
				}}
			>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundColor: '#006400' }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundColor: '#8B0000' }}></div>2
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundColor: '#D2B48C' }}></div>3
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundColor: '#006400' }}></div>4
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundColor: '#8B0000' }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundColor: '#D2B48C' }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundColor: '#006400' }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundColor: '#8B0000' }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundColor: '#D2B48C' }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundColor: '#006400' }}></div>
				</SwiperSlide>
			</Swiper>

			<button className="button">Заказать</button>
		</div >
	);
}

export default App;
