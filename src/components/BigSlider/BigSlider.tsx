import React, { Fragment, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Scrollbar, SwiperOptions, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SliderBigItem from '../SliderBigItem/SliderBigItem';
import woman from './woman.jpg';
import woman_1 from './woman.jpg';
import woman_2 from './woman.jpg';
import woman1 from './woman1.jpg';
import woman2 from './woman2.jpg';
import woman2_1 from './woman2_1.jpg';
import woman2_3 from './woman2_3.jpg';
import woman2_4 from './woman2_4.jpg';
import woman2_5 from './woman2_5.jpg';
import woman2_6 from './woman2_6.jpg';
import woman3 from './woman3.jpg';
import woman3_1 from './woman3_1.jpg';
import woman4 from './woman4.jpg';
import woman4_1 from './woman4_1.jpg';
import woman5 from './woman5.jpg';
import woman5_1 from './woman5_1.jpg';
import woman5_2 from './woman5_2.jpg';
import woman5_3 from './woman5_3.jpg';
import woman5_4 from './woman5_4.jpg';
import woman5_6 from './woman5_6.jpg';
import woman6 from './woman6.jpg';
import woman6_1 from './woman6_1.jpg';
import woman6_2 from './woman6_2.jpg';
import woman6_3 from './woman6_3.jpg';
import woman7 from './woman7.jpg';
import woman7_1 from './woman7_1.jpg';
import woman7_2 from './woman7_2.jpg';
import woman7_3 from './woman7_3.jpg';

import './BigSlider.scss';

export type slide = {
	img: string;
	extraImg: string[];
	sizes: string[];
	name: string;
	section: string;
	price: string;
};
const slides = [
	{
		img: woman,
		extraImg: [woman_1, woman_2],
		sizes: ['S'],
		name: 'Cali Midi Dress',
		section: 'Cartel & Willow ',
		price: '$169.00',
	},
	{
		img: woman1,
		extraImg: [],
		sizes: ['S', 'M'],
		name: 'Cali Midi Dress',
		section: 'Cartel & Willow ',
		price: '$389.00',
	},
	{
		img: woman2,
		extraImg: [woman2_1, woman2_3, woman2_4, woman2_5, woman2_6],
		sizes: ['M', 'L'],
		name: 'Cali Midi Dress',
		section: 'Cartel & Willow ',
		price: '$182.00',
	},
	{
		img: woman3,
		extraImg: [woman3_1],
		sizes: ['XL'],
		name: 'Cali Midi Dress',
		section: 'Cartel & Willow ',
		price: '$149.00',
	},
	{
		img: woman4,
		extraImg: [woman4_1],
		sizes: ['S', 'M'],
		name: 'Cali Midi Dress',
		section: 'Cartel & Willow ',
		price: '$389.00',
	},
	{
		img: woman5,
		extraImg: [woman5_1, woman5_2, woman5_3, woman5_4, woman5_6],
		sizes: ['M', 'L'],
		name: 'Cali Midi Dress',
		section: 'Cartel & Willow ',
		price: '$182.00',
	},
	{
		img: woman6,
		extraImg: [woman6_1, woman6_2, woman6_3],
		sizes: ['XL'],
		name: 'Cali Midi Dress',
		section: 'Cartel & Willow ',
		price: '$149.00',
	},
];

const BigSlider = ({ spaceBetween, slidesPerView }: SwiperOptions) => {
	const [isInFocus, setIsInFocus] = useState(false);
	const swiperRef = useRef(null);
	const preloadImages = React.useCallback(() => {
		slides.forEach(({ img }) => {
			const image = new Image();
			image.src = img;
		});
	}, []);
	const SLIDE_DELAY = 1000;

	preloadImages();

	const onMouseEnter = React.useCallback((e: React.MouseEvent) => {
		const swiperEl = swiperRef.current as unknown as SwiperRef;
		setIsInFocus(true);
		swiperEl.swiper.autoplay.pause();
	}, []);

	const onMouseLeave = React.useCallback((e: React.MouseEvent) => {
		setIsInFocus(false);
		const swiperEl = swiperRef.current as unknown as SwiperRef;
		swiperEl.swiper.autoplay.run();
	}, []);

	const slidesList = React.useMemo(() => {
		return slides.map(({ img, sizes, name, section, price, extraImg }) => {
			return (
				<>
					<SwiperSlide key={nanoid()}>
						<SliderBigItem
							img={img}
							sizes={sizes}
							name={name}
							section={section}
							price={price}
							extraImg={extraImg}
							key={nanoid()}
						/>
					</SwiperSlide>
				</>
			);
		});
	}, []);

	return (
		<div
			className={`big-slider ${
				isInFocus ? 'big-slider--in-focus' : 'big-slider--out-of-focus'
			}`}
			onMouseLeave={onMouseLeave}
			onMouseEnter={onMouseEnter}
		>
			<div className="big-slider__titles">
				<h2 className="big-slider__title">Must Haves</h2>
				<h3 className="big-slider__subtitle">Some of our favourite picks this week.</h3>
			</div>

			<div className="big-slider__inner">
				<Swiper
					ref={swiperRef}
					spaceBetween={spaceBetween}
					slidesPerView={slidesPerView}
					modules={[Navigation, A11y, Scrollbar, Autoplay]}
					navigation
					scrollbar={{ draggable: true }}
					watchSlidesProgress
					speed={SLIDE_DELAY / 2}
					effect="cards"
					autoplay={{
						delay: SLIDE_DELAY,
					}}
				>
					{slidesList}
				</Swiper>
			</div>
		</div>
	);
};
export { slides };
export default BigSlider;
