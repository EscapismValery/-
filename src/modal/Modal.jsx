import React from 'react';
import './modal.scss';

const Modal = ({ active, setActive, children }) => {
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
				{children}
				<button className='modal__more'>Подробнее..</button>
				<div className="modal__buttons">
					<a className='modal__button' href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+заказать+доставку+мастер-класса." target="_blank" rel="noreferrer">Заказать доставку</a>
					<a className='modal__button' href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+получить+пригласительное+на+мастер-класс." target="_blank" rel="noreferrer">Получить пригласительное</a>
				</div>
				<button className="modal__close" onClick={() => setActive(false)}>&#x2716;</button>
			</div>
		</div>
	)
}

export default Modal;