import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Pagination, Scrollbar, Mousewheel } from 'swiper';
import { Swiper as SwiperType } from 'swiper/types';
import { slides } from '../BigSlider/BigSlider';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './CatalogSliderWidget.scss';

type Slide = {
	img: string;
	caption: string;
};

const CatalogSliderWidget: React.FC = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
	const mainSwiperRef = useRef(null);
	const activeIndex = useRef<number>(0);

	const sideSlides = slides.map((slide) => (
		<SwiperSlide key={slide.img}>
			<img src={slide.img} />
		</SwiperSlide>
	));

	const mainSlides = slides.map((slide) => (
		<SwiperSlide key={slide.img}>
			<div className="swiper-zoom-container">
				<img src={slide.img} />
			</div>
		</SwiperSlide>
	));

	const handleMainSlideChange = (swiper: SwiperType) => {
		activeIndex.current = swiper.activeIndex;
		// thumbsSwiper?.slideTo(activeIndex.current);
	};

	const handleThumbClick = (index: number) => {
		activeIndex.current = index;
		const slider = mainSwiperRef?.current as unknown as SwiperType;
		slider?.slideTo(activeIndex.current);
	};

	return (
		<div className="catalog-slider-widget">
			<div className="catalog-slider-widget__main">
				<Swiper
					modules={[Navigation, Thumbs]}
					navigation
					thumbs={{ swiper: thumbsSwiper }}
					onSlideChange={handleMainSlideChange}
					onSwiper={setThumbsSwiper}
					ref={mainSwiperRef}
				>
					{mainSlides}
				</Swiper>
			</div>
			<div className="catalog-slider-widget__thumbs">
				<Swiper
					onSwiper={setThumbsSwiper}
					slidesPerView={4}
					spaceBetween={10}
					watchSlidesProgress={true}
					slideToClickedSlide={true}
					className="catalog-slider-widget__thumbs-swiper"
				>
					{sideSlides.map((slide, index) => (
						<SwiperSlide
							key={index}
							onClick={() => handleThumbClick(index)}
							className={index === activeIndex.current ? 'active' : ''}
						>
							{slide.props.children}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default CatalogSliderWidget;
