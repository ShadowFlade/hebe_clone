import React, { useEffect, useRef, useState } from 'react';
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
	const sideSlider = useRef<SwiperRef | null>(null);
	const mainSlider = useRef<SwiperRef | null>(null);

	const [thumbsSwiper, setThumbsSwiper] = useState<null | SwiperType | undefined>(
		sideSlider.current?.swiper
	);
	const sidePhotosRef = useRef<typeof slides>([]);
	const activeIndex = useRef(0);
	const sideSlidesList = slides.map((slide) => {
		sidePhotosRef.current.push(slide);
		return (
			<SwiperSlide key={nanoid()}>
				<img src={slide.img} />
			</SwiperSlide>
		);
	});
	const slidesList = slides.map((slide) => {
		sidePhotosRef.current.push(slide);
		return (
			<SwiperSlide key={nanoid()}>
				<img src={slide.img} />
			</SwiperSlide>
		);
	});
	const style: { [el: string]: string } = {
		'--swiper-navigation-color': '#fff',
		'--swiper-pagination-color': '#fff',
	};

	useEffect(() => {
		console.log(sideSlider.current, ' thumb');
		console.log(mainSlider.current, ' main slider');
	});

	return (
		<div key={nanoid()} className="catalog-widget">
			<div className="catalog-widget__inner">
				<div className="catalog-widget__side-slider">
					<Swiper
						style={style}
						slideActiveClass={'catalog-widget__side-slide--active'}
						spaceBetween={10}
						slidesPerView={4}
						watchSlidesProgress={true}
						navigation={true}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper2"
						ref={sideSlider}
						direction="vertical"
					>
						{sideSlidesList}
					</Swiper>
				</div>
				<div className="catalog-widget__slider">
					<Swiper
						spaceBetween={10}
						slidesPerView={1}
						className="mySwiper"
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs, Scrollbar, Mousewheel]}
						onChange={() => {
							console.log(mainSlider.current);
							sideSlider.current?.swiper.update();
						}}
						onSwiper={() => {
							mainSlider.current?.swiper.update();
						}}
						thumbs={{
							swiper: sideSlider.current?.swiper,
							// also tried `swiper:sideSlider.current`
							thumbsContainerClass: 'catalog_widget__side',
							slideThumbActiveClass: 'catalog-widget__side--active',
						}}
						direction="vertical"
						ref={mainSlider}
					>
						{slidesList}
					</Swiper>
				</div>
			</div>
		</div>
	);
};
export default CatalogSliderWidget;
