import React, { useRef } from 'react';
import { Swiper as SwiperEl, SwiperRef, SwiperSlide } from 'swiper/react';
import { AutoplayOptions, Swiper } from 'swiper/types';

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/autoplay';
import './SliderBigItem.scss';
import { nanoid } from 'nanoid';
type SliderBigItemProps = {
	img: string;
	extraImg?: string[];
	sizes: string[];
	name: string;
	section: string;
	price: string;
};

const SliderBigItem = ({ img, sizes, name, section, price, extraImg }: SliderBigItemProps) => {

	extraImg ? extraImg.unshift(img) : null;
	const swiperRef = useRef<SwiperRef | null>(null);
	const handleAutoplayDelayChange = (delay: number) => {
		const options = swiperRef.current?.swiper?.params?.autoplay as AutoplayOptions;
		options.delay = delay;
		swiperRef.current?.swiper.update(); // update the Swiper instance to apply the new autoplay delay
	  };
	const onMouseEnter = (e: React.MouseEvent) => {
		handleAutoplayDelayChange(500);
			swiperRef.current && swiperRef.current.swiper.autoplay.run();
	};
	const onMouseLeave = () => {
		swiperRef.current && swiperRef.current.swiper.autoplay.pause();
	};

	return (
		<div className="slider-big-item">
			<div className="slider-big-item__inner">
				<div
					className="slider-big-item__photo"
					onMouseOver={onMouseEnter}
					onMouseOut={onMouseLeave}
				>
					<SwiperEl
						ref={swiperRef}
						modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
						slidesPerView={1}
						loop
						effect="fade"
						autoplay={undefined}
						onInit={()=>{swiperRef.current?.swiper.autoplay.pause()}}
					>
						{extraImg?.map((item) => {
							return (
								<SwiperSlide key={nanoid()} style={{ paddingInline: 0 }}>
									<div
										style={{
											background: `center / cover no-repeat url('${item}')`,
										}}
										className="slider-big-item__img"
									></div>
								</SwiperSlide>
							);
						})}
					</SwiperEl>
				</div>
				<div className="slider-big-item__info">
					<div className="slider-big-item__name-section">
						<p className="slider-big-item__name">{name}</p>
						<p className="slider-big-item__section">{section}</p>
					</div>
					<p className="slider-big-item__price">{price}</p>
					<p className="slider-big-item__sizes">
						{sizes.map((size) => {
							return (
								<p className="slider-big-item__size">
									<span>{size}</span>
								</p>
							);
						})}
					</p>
				</div>
			</div>
		</div>
	);
};

export default SliderBigItem;
