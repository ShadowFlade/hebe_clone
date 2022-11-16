import React from 'react';
import Container from '../Container/Container';
import bigPic from './3024w.jpg';
import './BigPictureMainPage.scss';

type BigPictureMainPage = {
	title:string;
}

const BigPictureMainPage = ({title}:BigPictureMainPage) => {
	return (
		<div className="big-picture">
			
			<img
			className='big-picture__img' 
			src={bigPic}
			// srcSet='3024w 3024w,
			// 9C2E854B-A72E-416A-9257-910D5EAFB3F3_180x.avif 180w'
			// sizes="(max-width: 3204px) 2048px,
			// (max-width: 2048px) 2048px,
			// 800px"
			alt="" />
			<div className="big-picture__container">
				<Container>
					<div className="big-picture__content">
						<h2 className="big-picture__title">{title}</h2>
						<div className="big-picture__button">
							<div className="button button--shop">
								<span className="button__text">
									Shop Now
								</span>
							</div>
						</div>
					</div>
				</Container>
			</div>
			
		</div>
	)
}

export default BigPictureMainPage;