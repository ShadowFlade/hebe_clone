import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Pagination, Scrollbar, Mousewheel } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { slides } from '../BigSlider/BigSlider';
import './CatalogSliderWidget.scss';
import { nanoid } from 'nanoid';

const CatalogSliderWidget = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const mainSlider = useRef(null);
	const sideSlider = useRef(null);
	const slidesList = React.useMemo(() => {
		return slides.map((slide) => {
			return (
				<SwiperSlide key={nanoid()}>
					<img src={slide.img} />
				</SwiperSlide>
			);
		});
	}, []);

	const style: { [el: string]: string } = {
		'--swiper-navigation-color': '#fff',
		'--swiper-pagination-color': '#fff',
	};
	const swipeSideSlider = (mainSlider: SwiperType) => {
		const sideSwiper = sideSlider.current as unknown as SwiperRef;
		sideSwiper.swiper.slideTo(mainSlider.activeIndex);
	};
	return (
		<div className="catalog-widget">
			<div className="catalog-widget__inner">
				<div className="catalog-widget__side-slider">{slidesList}</div>
				<div className="catalog-widget__slider">
					<Swiper
						onSlideChange={swipeSideSlider}
						spaceBetween={10}
						slidesPerView={'auto'}
						// freeMode={true}
						watchSlidesProgress={true}
						modules={[Mousewheel, FreeMode, Navigation, Scrollbar]}
						ref={mainSlider}
						className="mySwiper"
						direction={'vertical'}
						mousewheel={true}
						scrollbar={{
							dragSize: 0,
							draggable: false,
						}}
					>
						{slidesList}
					</Swiper>
				</div>
			</div>
		</div>
	);
};
export default CatalogSliderWidget;
