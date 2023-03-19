import React from 'react';
import Container from '../Container/Container';
import bigPic from './3024w.jpg';
import './BigPictureMainPage.scss';

type BigPictureMainPage = {
	title: string;
};

const BigPictureMainPage = ({ title }: BigPictureMainPage) => {
	return (
		<div className="big-picture">
			<img
				className="big-picture__img"
				src={bigPic}
				alt=""
			/>
			<div className="big-picture__container">
				<Container>
					<div className="big-picture__content">
						<h2 className="big-picture__title">{title}</h2>
						<div className="big-picture__button">
							<a href="/" className="button button--shop">
								<span className="button__text">Shop Now</span>
							</a>
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default BigPictureMainPage;
