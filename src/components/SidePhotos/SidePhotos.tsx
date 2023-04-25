import React, { useRef, useState } from 'react';
import { slides } from '../BigSlider/BigSlider';
import { nanoid } from 'nanoid';
export interface ISidePhotosProps {
	activeIndex: number;
	slides: typeof slides;
}

export default function SidePhotos(props: ISidePhotosProps) {
	const sidePhotos = React.useMemo(() => {
		return props.slides.map((slide, index) => {
			return (
				<div
					key={nanoid()}
					className={`catalog-widget__side-slide ${
						props.activeIndex == index ? 'catalog-widget__side-slide--active' : ''
					}`}
				>
					<img src={slide.img} alt="" />
				</div>
			);
		});
	}, [props.activeIndex]);

	return <>{sidePhotos}</>;
}
