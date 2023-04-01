import React, { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Pagination, Scrollbar, Mousewheel } from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { slides } from '../BigSlider/BigSlider';
import { nanoid } from 'nanoid';
import SidePhotos from '../SidePhotos/SidePhotos';
import './CatalogSliderWidget.scss';

const CatalogSliderWidget = () => {
	const renderCount = useRef(0);
	renderCount.current += 1;
	console.log(renderCount.current, ' renderCount');
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const sidePhotosRef = useRef<typeof slides>([]);
	const mainSlider = useRef(null);
	const sideSlider = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const slidesList = React.useMemo(() => {
		return slides.map((slide) => {
			sidePhotosRef.current.push(slide);
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
		console.log(activeIndex, sidePhotosRef);
		setActiveIndex(mainSlider.activeIndex);
	};
	return (
		<div key={nanoid()} className="catalog-widget">
			<div className="catalog-widget__inner">
				<div className="catalog-widget__side-slider">
					<SidePhotos slides={sidePhotosRef.current} activeIndex={activeIndex} />
				</div>
				<div className="catalog-widget__slider">
					<Swiper
						onSlideChange={swipeSideSlider}
						spaceBetween={0}
						slidesPerView={2}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[Mousewheel, FreeMode, Navigation]}
						ref={mainSlider}
						className="mySwiper"
						direction={'vertical'}
						mousewheel={{
							invert: false,
							sensitivity: 1,
							// eventsTarget: '.mySwiper-wrapper',
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
