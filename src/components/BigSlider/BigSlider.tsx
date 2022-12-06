import React, { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation,SwiperOptions  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import SliderBigItem from '../SliderBigItem/SliderBigItem';
import woman from './woman.jpg';
import woman1 from './woman1.jpg';
import woman2 from './woman2.jpg';
import woman3 from './woman3.jpg';

import woman4 from './woman4.jpg';
import woman5 from './woman5.jpg';
import woman6 from './woman6.jpg';
import woman7 from './woman7.jpg';

import './BigSlider.scss';

const slides = [
	{
		img:woman,
		sizes:['S'],
		name:'Cali Midi Dress',
		section:'Cartel & Willow ',
		price:'$169.00'
	},
	{
		img:woman1,
		sizes:['S','M'],
		name:'Cali Midi Dress',
		section:'Cartel & Willow ',
		price:'$389.00'
	},
	{
		img:woman2,
		sizes:['M','L'],
		name:'Cali Midi Dress',
		section:'Cartel & Willow ',
		price:'$182.00'
	},
	{
		img:woman3,
		sizes:['XL'],
		name:'Cali Midi Dress',
		section:'Cartel & Willow ',
		price:'$149.00'
	},
	{
		img:woman4,
		sizes:['S','M'],
		name:'Cali Midi Dress',
		section:'Cartel & Willow ',
		price:'$389.00'
	},
	{
		img:woman5,
		sizes:['M','L'],
		name:'Cali Midi Dress',
		section:'Cartel & Willow ',
		price:'$182.00'
	},
	{
		img:woman6,
		sizes:['XL'],
		name:'Cali Midi Dress',
		section:'Cartel & Willow ',
		price:'$149.00'
	}
]


const BigSlider = ({spaceBetween,slidesPerView}:SwiperOptions) => {
	const [isFirstSlideVisible, setIsFristSlideVisible] = useState(false);
	return (
		<div className="big-slider">
			<div className="big-slider__inner">
				{/* <div className={`big-slider__container ${!isFirstSlideVisible ? 'big-slider__container--moved' : ''}`}> */}

					<Swiper 
						spaceBetween={spaceBetween} 
						slidesPerView={slidesPerView}
						modules={[Navigation, A11y]}
						navigation
						createElements
						slidesPerGroup={4}
						slidesPerGroupSkip={4}
						watchSlidesProgress
					>	
							{slides.map(({img,sizes,name,section,price},index) => {
								return (
									<SwiperSlide key={nanoid()}>
											<SliderBigItem img={img} sizes={sizes} name={name} section={section} price={price}/>
									</SwiperSlide>
								)
							})}

					</Swiper>
				{/* </div> */}

			</div>
		</div>

	)
}

export default BigSlider;