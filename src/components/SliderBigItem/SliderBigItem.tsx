import React, { useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css/autoplay';
import './SliderBigItem.scss';
type  SliderBigItemProps = {
	img:string;
	extraImg?:string[];
	sizes:string[];
	name:string;
	section:string;
	price:string;
}

const SliderBigItem = ({img,sizes,name,section,price,extraImg} : SliderBigItemProps) => {
	const [currImg,setCurrImg] = useState(img);
	const [currImgIndex,setCurrImgIndex] = useState(0);
	extraImg ?  extraImg.unshift(img) : null;
	const handleAutoplay = (currImg:string) => {
		const currentIndexOfActiveImage = extraImg?.findIndex((el)=>{
			return el === currImg;
		})
		console.log((typeof currentIndexOfActiveImage === 'number' && !!extraImg) && 
			currentIndexOfActiveImage < extraImg.length -1);

		if((typeof currentIndexOfActiveImage === 'number' && !!extraImg) 
			&& currentIndexOfActiveImage < extraImg.length -1 ){
			let imgIndex = 0;
			console.log(currentIndexOfActiveImage);
			for(let i=currentIndexOfActiveImage; i++; i<999){
				console.log(i);
				if(extraImg && i >= extraImg.length-1){
					imgIndex = imgIndex % extraImg.length-1;
				}
				imgIndex = i;
				console.log(i);
				!!extraImg ? setTimeout(()=>{setCurrImg(extraImg[imgIndex])},3000) : false;
				  
			}
		} else {
			return;
		}
	}
	const startAutoplay = () => {
		handleAutoplay(currImg);
	}

	return (
		<div className="slider-big-item">
			<div className="slider-big-item__inner">
				<div className="slider-big-item__photo" onMouseEnter={startAutoplay}>
						<img src={currImg} className="slider-big-item__img"/>
				</div>
				<div className="slider-big-item__info">
					<div className="slider-big-item__name-section">
						<p className="slider-big-item__name">{name}</p>
						<p className="slider-big-item__section">{section}</p>
					</div>
					<p className="slider-big-item__price">{price}</p>
					<p className="slider-big-item__sizes">
						{sizes.map(size => {
							return (
								<p className='slider-big-item__size'>
									<span>
										{size}
									</span>
								</p>
							)
						})}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SliderBigItem;