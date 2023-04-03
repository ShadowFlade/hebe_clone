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
	const [thumbsSwiper, setThumbsSwiper] = useState<null | SwiperType | undefined>(null);
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
		const sliderRef = sideSlider.current as unknown as SwiperRef;
		const sideSliderReal = sliderRef.swiper as unknown as SwiperType;
		sideSliderReal.slideNext(mainSlider.activeIndex);
		console.log(sideSliderReal.activeIndex);
	};
	useEffect(() => {
		console.log(sideSlider, ' thumb');
	});

	return (
		<div key={nanoid()} className="catalog-widget">
			<div className="catalog-widget__inner">
				<div className="catalog-widget__side-slider">
					<Swiper
						// slidesPerView={slides.length}
						style={style}
						slideActiveClass={'catalog-widget__side-slide--active'}
						spaceBetween={10}
						navigation={true}
						thumbs={{
							swiper: thumbsSwiper,
							autoScrollOffset: 1,
						}}
						modules={[FreeMode, Navigation, Thumbs]}
						className="mySwiper2"
						ref={sideSlider}
						direction="vertical"
					>
						{slidesList}
					</Swiper>
				</div>
				<div className="catalog-widget__slider">
					<Swiper
						onSlideChange={swipeSideSlider}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs, Scrollbar, Mousewheel]}
						thumbs={{ swiper: sideSlider.current }}
						className="mySwiper"
						ref={mainSlider}
						direction="vertical"
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
