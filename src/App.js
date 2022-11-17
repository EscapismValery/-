import { Mousewheel, Parallax, FreeMode, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import React, { useState } from 'react';
import './App.scss';
import './MediaApp.scss';

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
				<p><span>Мастер-классы</span> с выездом и в нашей мастерской, на которых дети и взрослые, благодаря широкому выбору
					творческих,
					кулинарных и других
					мастер-классов, могут обрести множество умений и навыков, узнать что-то новое и интересное,
					расширить свой кругозор, провести
					время весело и проявить свои скрытые таланты!</p>
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
						centeredSlides: false,
						slidesPerView: 1.2, // количество слайдов на 1 странице
						spaceBetween: 20 // расстояние между слайдами
					},
					760: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 20 // расстояние между слайдами
					},
					1020: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 60 // расстояние между слайдами
					}
				}}
			>
				<div className='slider__wrapper swiper-wrapper'>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${kishLoren})` }}>
							<p>КИШ Лорен</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${craftCookie})` }}>
							<p>Крафт печенье</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${lolipops})` }}>
							<p>Леденцы и карамельки</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${gingerbread})` }}>
							<p>Пряни козули жамки</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${house})` }}>
							<p>Пряничный дом</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${muffin})` }}>
							<p>Маффин кекс Штоллен</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${iceCream})` }}>
							<p>Мягкое мороженое</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${choco})` }}>
							<p>Шоколадная фабрика</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${cakePops})` }}>
							<p>Кейк-попс</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${cottonCandy})` }}>
							<p>Сахарная вата</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${limonade})` }}>
							<p>Лимонады и шейки</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${butter})` }}>
							<p>Крафтовое масло</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>

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
					760: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 20 // расстояние между слайдами
					},
					1020: { // от 680
						slidesPerView: 3.5, // количество слайдов на 1 странице
						spaceBetween: 60 // расстояние между слайдами
					}
				}}
			>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${kishLoren})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${craftCookie})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${lolipops})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${gingerbread})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${house})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${muffin})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${iceCream})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${choco})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${cakePops})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${cottonCandy})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${limonade})` }}></div>
				</SwiperSlide>
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="30%" style={{ backgroundImage: `url(${butter})` }}></div>
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
