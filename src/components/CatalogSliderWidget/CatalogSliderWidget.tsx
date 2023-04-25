import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Virtual, Pagination, Scrollbar, Mousewheel } from 'swiper';
import { Swiper as SwiperType, VirtualData } from 'swiper/types';
import { slides } from '../BigSlider/BigSlider';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './CatalogSliderWidget.scss';
import { nanoid } from 'nanoid';
import infoData from './widget';
import CataloSliderWidgetInfo from '../CatalogSliderWidgetInfo/CatalogSliderWidgetInfo';

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
		<SwiperSlide style={{ height: 'auto', width: '40%' }} key={slide.img}>
			<div className="swiper-zoom-container">
				<img src={slide.img} />
			</div>
		</SwiperSlide>
	));

	const handleMainSlideChange = (swiper: SwiperType) => {
		activeIndex.current = swiper.activeIndex;
	};

	const handleThumbClick = (index: number) => {
		activeIndex.current = index - 1;
		const slider = mainSwiperRef?.current as unknown as SwiperType;
		slider?.slideTo(activeIndex.current);
	};
	console.log(infoData);
	return (
		<div className="catalog-slider-widget">
			<div className="catalog-slider-widget__inner">
				<div className="catalog-slider-widget__main">
					<Swiper
						modules={[FreeMode, Navigation, Thumbs, Scrollbar, Mousewheel]}
						thumbs={{ swiper: thumbsSwiper }}
						slidesPerView={2}
						onSlideChange={handleMainSlideChange}
						onSwiper={setThumbsSwiper}
						ref={mainSwiperRef}
						className={'catalog-widget'}
						direction="vertical"
						style={{ height: '100vh' }}
						freeMode={true}
						mousewheel={{ sensitivity: 1, invert: false }}
					>
						{mainSlides}
					</Swiper>
					<div className="catalog-slider-widget__info">
						<CataloSliderWidgetInfo
							productName="Bean Crossbody // Black"
							color="black"
							price="$449.00"
							availability={true}
							brand="saben"
							descriptionText={infoData.description}
							shippingText={[{ text: [''], title: '' }]}
							returnsText={['']}
							title={''}
							labels={[]}
						/>
					</div>
				</div>
				<div className="catalog-slider-widget__thumbs">
					<Swiper
						onSwiper={setThumbsSwiper}
						slidesPerView={Infinity}
						spaceBetween={10}
						watchSlidesProgress={true}
						slideToClickedSlide={true}
						className="catalog-slider-widget__thumbs-swiper"
						direction="vertical"
					>
						{sideSlides.map((slide, index, arr) => {
							console.log(index);
							return (
								<SwiperSlide
									key={index}
									onClick={() => handleThumbClick(index)}
									className={index === activeIndex.current ? 'active' : ''}
								>
									{slide.props.children}
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default CatalogSliderWidget;
