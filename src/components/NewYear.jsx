import React, { useState } from 'react';

const NewYear = () => {
	const [santaText, setSantaText] = useState(false);
	return (
		<div className="newyear">
			<div className="newyear__santa"></div>
			{!santaText && <button className="newyear__button" onClick={() => { setSantaText(true) }}>Получи подарок!</button>}
			{santaText && <p className="newyear__text">При заказе мастер-класса в детский сад или школу поздравление от Деда Мороза в подарок!</p>}
		</div>
	)
}

export default NewYear;