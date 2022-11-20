import { Mousewheel, Parallax, FreeMode, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import React, { useState } from 'react';
import './App.scss';
import './MediaApp.scss';

import { masterClasses } from './js/mk.js'

import kishLoren from './images/mk/kish-loren.JPG';
import craftCookie from './images/mk/craft-cookie.JPG';
import lolipops from './images/mk/lolipops.JPG';
import gingerbread from './images/mk/gingerbread.JPG';
import muffin from './images/mk/muffin.JPG';
import house from './images/mk/house.JPG';
import iceCream from './images/mk/ice-cream.JPG';
import choco from './images/mk/choco2.jpg';
import cakePops from './images/mk/cake-pops.JPG';
import cottonCandy from './images/mk/cotton-candy.JPG';
import limonade from './images/mk/limonade.JPG';
import butter from './images/mk/butter.JPG';
import Modal from './modal/Modal';

function App() {
	const [modalActive, setModalActive] = useState(false);
	const [moreActive, setMoreActive] = useState(false);

	const [masterClass, setMasterClass] = useState({
		title: "",
		minDescription: "",
		bigDescription: "",
		time: "",
		people: "",
		age: "",
		process: [],
		materials: [],
		required: [],
		nuances: [],
	})

	const popup = (desc) => {
		setModalActive(true)
		setMasterClass({
			title: desc.title,
			minDescription: desc.minDescription,
			bigDescription: desc.bigDescription,
			time: desc.time,
			people: desc.people,
			age: desc.age,
			process: desc.process,
			materials: desc.materials,
			required: desc.required,
			nuances: desc.nuances,
		})
	}

	const onModalMore = () => {
		setMoreActive(true)
	}

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
						<div
							className="slider__img"
							onClick={() => popup(masterClasses[0])}
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${kishLoren})` }}>
							<p>{masterClasses[0].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={() => popup(masterClasses[1])}
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${craftCookie})` }}>
							<p>{masterClasses[1].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={() => popup(masterClasses[2])}
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${lolipops})` }}>
							<p>{masterClasses[2].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={() => popup(masterClasses[3])}
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${gingerbread})` }}>
							<p>{masterClasses[3].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={(e) => popup(masterClasses[4])}
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${house})` }}>
							<p>{masterClasses[4].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={(e) => popup(masterClasses[5])}
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${muffin})` }}>
							<p>{masterClasses[5].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={(e) => popup(masterClasses[6])}
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${iceCream})` }}>
							<p>{masterClasses[6].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={(e) => popup(masterClasses[7])}
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${choco})` }}>
							<p>{masterClasses[7].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={(e) => popup(masterClasses[8])}
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${cakePops})` }}>
							<p>{masterClasses[8].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={(e) => popup(masterClasses[9])}
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${cottonCandy})` }}>
							<p>{masterClasses[9].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={(e) => popup(masterClasses[10])}
							data-swiper-parallax="20%"
							style={{ backgroundImage: `url(${limonade})` }}>
							<p>{masterClasses[10].title}</p>
						</div>
					</SwiperSlide>
					<SwiperSlide className='slider__item'>
						<div
							className="slider__img"
							onClick={(e) => popup(masterClasses[11])}
							data-swiper-parallax="30%"
							style={{ backgroundImage: `url(${butter})` }}>
							<p>{masterClasses[11].title}</p>
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
				<SwiperSlide className='slider__item'>
					<div className="slider__img" data-swiper-parallax="20%" style={{ backgroundImage: `url(${butter})` }}></div>
				</SwiperSlide>
			</Swiper>

			<div className="contacts">
				<a className="phone" href="tel:+79126164068">+7(912)616-40-68</a>
				<a
					className="button"
					href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+заказать+у+Вас+мастер-класс."
					target="_blank"
					rel="noreferrer">
					Заказать
				</a>
			</div>

			<Modal active={modalActive} setActive={setModalActive}>
				<h3 className="modal__title">{masterClass.title}</h3>
				<p className='modal__desc'>{masterClass.minDescription}</p>
				<button className='modal__more' onClick={() => { onModalMore() }}>Подробнее..</button>
				<div className="modal__buttons">
					<a
						className='modal__button'
						href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+заказать+доставку+мастер-класса."
						target="_blank"
						rel="noreferrer">
						Заказать доставку
					</a>
					<a
						className='modal__button'
						href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+получить+пригласительное+на+мастер-класс."
						target="_blank"
						rel="noreferrer">
						Получить пригласительное
					</a>
				</div>
			</Modal>
			<Modal active={moreActive} setActive={setMoreActive} className={"modal-more"}>
				<h3 className="modal-more__title">{masterClass.title}</h3>
				<p className="modal-more__description">{masterClass.bigDescription}</p>
				<p className="modal-more__time"><span>Время на изготовление:</span> {masterClass.time}</p>
				<p className="modal-more__people"><span>Средняя проходимость:</span> {masterClass.people}</p>
				<p className="modal-more__age"><span>Возраст участников:</span> {masterClass.age}</p>
				<ol className="modal-more__process">
					<h4 className="modal-more__subtitle">Как проходит мастер-класс:</h4>
					{masterClass.process.map((item, index) =>
						<li key={index} className="modal-more__item">{item}</li>
					)}
				</ol>
				<ol className="modal-more__materials">
					<h4 className="modal-more__subtitle">Какие материалы предоставим мы:</h4>
					{masterClass.materials.map((item, index) =>
						<li key={index} className="modal-more__item">{item}</li>
					)}
				</ol>
				<ol className="modal-more__requirements">
					<h4 className="modal-more__subtitle">Что потребуется от заказчика:</h4>
					{masterClass.required.map((item, index) =>
						<li key={index} className="modal-more__item">{item}</li>
					)}
				</ol>
				<ol className="modal-more__nuances">
					<h4 className="modal-more__subtitle">Нюансы:</h4>
					{masterClass.nuances.map((item, index) =>
						<li key={index} className="modal-more__item">{item}</li>
					)}
				</ol>
			</Modal>
		</div >
	);
}

export default App;
