import React, { useRef, useState } from 'react';
import {Swiper as SwiperEl,SwiperRef,SwiperSlide} from 'swiper/react';
import {Swiper} from 'swiper/types';

import {A11y, Autoplay, Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/css/autoplay';
import './SliderBigItem.scss';
import { nanoid } from 'nanoid';
type  SliderBigItemProps = {
	img:string;
	extraImg?:string[];
	sizes:string[];
	name:string;
	section:string;
	price:string;
}

const SliderBigItem = ({img,sizes,name,section,price,extraImg} : SliderBigItemProps) => {
	const [isAnimating,setIsAnimating] = useState(false);
	extraImg ?  extraImg.unshift(img) : null;
	const swiperRef = useRef<SwiperRef | null>(null)
	const controlSwiperAutoplay = (swiper:Swiper) => {
		console.log(swiper);
		 if (!isAnimating){
			swiper.autoplay.stop();
		}
	}
	const onMouseEnter = (e:React.MouseEvent) => {
		setIsAnimating(true);
		swiperRef.current && swiperRef.current.swiper.autoplay.run();
	}
	const onMouseLeave = () => {
		setIsAnimating(false);	
		swiperRef.current && swiperRef.current.swiper.autoplay.stop();
	}
	return (
			<div className="swiper-photo"
				onMouseOver={onMouseEnter} 
				onMouseOut={onMouseLeave}
			>
				<SwiperEl
					ref={swiperRef}
					modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
					slidesPerView={1}
					autoplay={{delay:450}}
					loop
					effect='fade'
					onInit={controlSwiperAutoplay}
					onBeforeTransitionStart={controlSwiperAutoplay}
				>
					{
						extraImg?.map((item) => {
							return (
								<SwiperSlide key={nanoid()} style={{paddingInline:0}}>
									<img src={item} alt="" style={{width:'100%'}}/>
								</SwiperSlide>
							)
						})
					}
				</SwiperEl>
			</div>
				
	
	)
}

export default SliderBigItem;