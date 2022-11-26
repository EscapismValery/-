import React from 'react';

const Contacts = () => {
	return (
		<div className="contacts">
			<a className="phone" href="tel:+79126164068">+7(912)616-40-68</a>
			<a
				className="contacts__button button"
				href="https://wa.me/79126164068?text=Здравствуйте%2C+Хочу+заказать+у+Вас+мастер-класс."
				target="_blank"
				rel="noreferrer">
				Хочу мастер-класс!
			</a>
		</div>
	)
}

export default Contacts;