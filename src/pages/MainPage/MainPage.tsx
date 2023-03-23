import React, { Fragment } from 'react';
import BigBanner from '@/components/BigBanner/BigBanner';
import BigPictureMainPage from '@/components/BigPictureMainPage/BigPictureMainPage';
import BigSlider from '@/components/BigSlider/BigSlider';
import { nanoid } from 'nanoid';
import Brands from '@/components/Brands/Brands';

type MainPage = {

};
const text = 'Curators of ethical fashion and New Zealand designed. Hebe is a destination concept store and online haven for style-seekers. A fashion selection lovingly handpicked for you, sealed with personal touch. Open six days.';
const MainPage = ({}:MainPage) => {

	return (
		<Fragment>		
			<div className="main-page__big-picture">
				<BigPictureMainPage title='Kowtow' key={nanoid()}/>
			</div>
			<div className="main-page__big-banner">
				<BigBanner text={text} backgroundColor="white"/>		
			</div>
			<div className="main-page__slider">
				<BigSlider spaceBetween={60} slidesPerView={3} />
			</div>
			<div className="main-page__brands">
				<Brands/>
			</div>
		</Fragment>
	)
}

export default MainPage;
