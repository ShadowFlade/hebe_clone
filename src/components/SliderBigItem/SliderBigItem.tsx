import React, { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperEl, SwiperRef, SwiperSlide } from 'swiper/react';
import { AutoplayOptions, Swiper } from 'swiper/types';

import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/autoplay';
import './SliderBigItem.scss';
import { nanoid, urlAlphabet } from 'nanoid';
import { setIn } from 'formik';
type SliderBigItemProps = {
	img: string;
	extraImg?: string[];
	sizes: string[];
	name: string;
	section: string;
	price: string;
};

const SliderBigItem = ({ img, sizes, name, section, price, extraImg }: SliderBigItemProps) => {
	const [autoplayDelay, setAutoplayDelay] = useState(500); // initial value of 500ms

	const SECONDS_TO_WAINT_UNTILL_SLIDER_ACTIVE = 1.5;
	const MILISECONDS_TO_CHECK_THE_STATE = 1000;
	const [isAnimating, setIsAnimating] = useState(false);
	const [isHoverTimeExceeded, setIsHoverTimeExceeded] = useState(false);
	extraImg ? extraImg.unshift(img) : null;
	const swiperRef = useRef<SwiperRef | null>(null);
	const handleAutoplayDelayChange = (delay: number) => {
		setAutoplayDelay(delay);
		const options = swiperRef.current?.swiper?.params?.autoplay as AutoplayOptions;
		options.delay = delay;
		swiperRef.current?.swiper.update(); // update the Swiper instance to apply the new autoplay delay
	  };
	async function delay(ms: number) {
		// return await for better async stack trace support in case of errors.
		return await new Promise((resolve) => setTimeout(resolve, ms));
	}
	const isTimeLimitExceeded = (seconds: number) => {
		debugger;
		const enterTimeSeconds = Date.now() / 1000;
		const intervals = [];

		const isTimeLimitExceededFunc = () => {
			const newTimeSeconds = Date.now() / 1000;
			if (newTimeSeconds - enterTimeSeconds >= seconds) {
				setIsHoverTimeExceeded(true);
				return true;
			} else {
				setIsHoverTimeExceeded(false);
				return false;
			}
		};

		while (!isHoverTimeExceeded) {
			intervals.push(setInterval(isTimeLimitExceededFunc, MILISECONDS_TO_CHECK_THE_STATE));
			delay(MILISECONDS_TO_CHECK_THE_STATE);
		}
		intervals.forEach((item) => clearInterval(item));
		return isHoverTimeExceeded;
	};
	const controlSwiperAutoplay = (swiper: Swiper) => {
		if (!isAnimating) {
			swiper.autoplay.stop();
		}
	};
	const onMouseEnter = (e: React.MouseEvent) => {
		handleAutoplayDelayChange(500);
		// if (isTimeLimitExceeded(SECONDS_TO_WAINT_UNTILL_SLIDER_ACTIVE)) {
			setIsAnimating(true);
			swiperRef.current && swiperRef.current.swiper.autoplay.run();
		// }
	};
	const onMouseLeave = () => {
		// setIsAnimating(false);
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
									{/* <img src={item} alt=""/> */}
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
