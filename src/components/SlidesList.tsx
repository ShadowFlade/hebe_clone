import React from 'react';
import { slides } from '@/components/BigSlider/BigSlider';
import { SwiperSlide } from 'swiper/react';
import SliderBigItem from './SliderBigItem/SliderBigItem';
import { nanoid } from 'nanoid';
const SlidesList = () => {
	return (
		<>
			{slides.map(({ img, sizes, name, section, price, extraImg }) => {
				return (
					<SwiperSlide key={nanoid()}>
						<SliderBigItem
							img={img}
							sizes={sizes}
							name={name}
							section={section}
							price={price}
							extraImg={extraImg}
						/>
					</SwiperSlide>
				);
			})}
			;
		</>
	);
};
// const memoizedSlidesList = React.memo(SlidesList);
const memoizedSlidesList = SlidesList;

export default memoizedSlidesList;
