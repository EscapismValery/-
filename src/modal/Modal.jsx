import React from 'react';
import './modal.scss';

const Modal = ({ active, setActive, className, children }) => {
	return (
		<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
			<div className={active ? `${className} modal__content active` : ` ${className} modal__content`} onClick={(e) => e.stopPropagation()}>
				{children}
				<button className="modal__close" onClick={() => setActive(false)}>&#x2716;</button>
			</div>
		</div>
	)
}

export default Modal;