import React, { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation,Scrollbar, SwiperOptions  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
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
	const [isInFocus,setIsInFocus] = useState(false);
	const onMouseEnter  = React.useCallback((e:React.MouseEvent) => {
		setIsInFocus(true);
	},[])
	const onMouseLeave  = React.useCallback((e:React.MouseEvent) => {
		setIsInFocus(false);
	},[])
	
	return (
		<div className={`big-slider ${isInFocus ? 'big-slider--in-focus' : 'big-slider--out-of-focus'}`} 
		onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
			<div className="big-slider__titles">
				<h2 className="big-slider__title">Must Haves</h2>
				<h3 className="big-slider__subtitle">Some of our favourite picks this week.</h3>
			</div>

			<div className="big-slider__inner">

					<Swiper 
						spaceBetween={spaceBetween} 
						slidesPerView={slidesPerView}
						modules={[Navigation, A11y,Scrollbar]}
						navigation
						scrollbar={{draggable:true}}
						createElements
						watchSlidesProgress
						speed={200}
					>	
							{slides.map(({img,sizes,name,section,price}) => {
								return (
									<SwiperSlide key={nanoid()}>
											<SliderBigItem img={img} sizes={sizes} name={name} 
											section={section} price={price}/>
									</SwiperSlide>
								)
							})}

					</Swiper>

			</div>
		</div>

	)
}

export default BigSlider;