import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderBigItem from '../SliderBigItem/SliderBigItem';
import woman from './woman.jpg';
import woman1 from './woman1.jpg';
import woman2 from './woman2.jpg';
import woman3 from './woman3.jpg';

import './BigSlider.scss';
import { getItem } from 'localforage';
import { size } from 'cypress/types/lodash';
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
	}
]

type SliderOptions = {
	spaceBetween:number;
	slidesPerView:number;

}
const BigSlider = ({spaceBetween,slidesPerView}:SliderOptions) => {
	return (
		<div className="big-slider">
			<div className="big-slider__inner">
				<Swiper spaceBetween={spaceBetween} slidesPerView={slidesPerView}>
					{slides.map(({img,sizes,name,section,price})=>{
						return (
							<SwiperSlide>
								<SliderBigItem img={img} sizes={sizes} name={name} section={section} price={price}/>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</div>

	)
}

export default BigSlider;