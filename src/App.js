import { Mousewheel, Parallax, FreeMode, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import React, { useState } from 'react';
import './App.scss';

import kishLoren from './images/mk/kish-loren.JPG';
import craftCookie from './images/mk/craft-cookie.JPG';
import lolipops from './images/mk/lolipops.JPG';
import gingerbread from './images/mk/gingerbread.JPG';
import muffin from './images/mk/muffin.JPG';
import house from './images/mk/house.JPG';
import iceCream from './images/mk/ice-cream.JPG';
import choco from './images/mk/choco.JPG';
import cakePops from './images/mk/cake-pops.JPG';
import cottonCandy from './images/mk/cotton-candy.JPG';
import limonade from './images/mk/limonade.JPG';
import butter from './images/mk/butter.JPG';

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
						slidesPerView: 2.5, // количество слайдов на 1 странице
						spaceBetween: 30 // расстояние между слайдами
					},
					1020: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 60 // расстояние между слайдами
					}
				}}
			>
				<div className='slider__wrapper swiper-wrapper'>
					<SwiperSlide className='slider__item'>КИШ Лорен
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${kishLoren})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Крафт печенье
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${craftCookie})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Леденцы и карамельки
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${lolipops})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Пряни козули жамки
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${gingerbread})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Маффин кекс Штоллен
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${muffin})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Пряничный дом
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${house})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Мягкое мороженое
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${iceCream})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Шоколадная фабрика
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${choco})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Кейк-попс
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${cakePops})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Сахарная вата
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${cottonCandy})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Лимонады и шейки
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${limonade})` }}></div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>Крафтовое масло
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${butter})` }}></div>
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
						slidesPerView: 2.5, // количество слайдов на 1 странице
						spaceBetween: 30 // расстояние между слайдами
					},
					1020: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 60 // расстояние между слайдами
					}
				}}
			>
				<SwiperSlide className='slider__item'>КИШ Лорен
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${kishLoren})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Крафт печенье
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${craftCookie})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Леденцы и карамельки
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${lolipops})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Пряни козули жамки
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${gingerbread})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Маффин кекс Штоллен
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${muffin})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Пряничный дом
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${house})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Мягкое мороженое
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${iceCream})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Шоколадная фабрика
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${choco})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Кейк-попс
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${cakePops})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Сахарная вата
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${cottonCandy})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Лимонады и шейки
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${limonade})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>Крафтовое масло
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${butter})` }}></div>
				</SwiperSlide>
			</Swiper>

			<div className="contacts">
				<a className="phone" href="tel:+79126164068">+7(912)616-40-68</a>
				<button className="button">Заказать</button>
			</div>
		</div >
	);
}

export default App;
