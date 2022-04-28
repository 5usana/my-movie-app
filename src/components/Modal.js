import React from 'react';
import { useEffect } from 'react';
import ReactModal from 'react-modal';
import MyButton from '../style/StyledComponents';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faXmark } from '@fortawesome/free-solid-svg-icons';

const modalStyles = {
	overlay: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		position: 'relative',
		width: 800,
		height: 600,
		inset: 0,
		padding: 0,
		color: 'white',
		backgroundColor: 'black',
	},
};

const Modal = ({ isModalOpen, setIsModalOpen, movieId }) => {
	console.log(movieId);
	useEffect(() => {
		ReactModal.setAppElement('body');
	}, []);

	return (
		<div className='Container'>
			<ReactModal isOpen={isModalOpen} style={modalStyles}>
				<div className='Modal-TitleBar'>
					<div className='Modal-Title'>Movie Modal is open</div>
					<MyButton primary onClick={() => setIsModalOpen(false)}>
						{' '}
						CLOSE X{/* <FontAwesomeIcon icon={faXmark} size='lg' /> */}
					</MyButton>
				</div>
			</ReactModal>
		</div>
	);
};

export default Modal;
