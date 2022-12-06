import React from 'react';
import './SliderBigItem.scss';
type  SliderBigItemProps = {
	img:string;
	sizes:string[];
	name:string;
	section:string;
	price:string;
}

const SliderBigItem = ({img,sizes,name,section,price} : SliderBigItemProps) => {
	return (
		<div className="slider-big-item">
			<div className="slider-big-item__inner">
				<div className="slider-big-item__photo">
					<img src={img} className="slider-big-item__img"/>
				</div>
				<div className="slider-big-item__info">
					<div className="slider-big-item__name-section">
						<p className="slider-big-item__name">{name}</p>
						<p className="slider-big-item__section">{section}</p>
					</div>
					<p className="slider-big-item__price">{price}</p>
					<p className="slider-big-item__sizes">
						{sizes.map(size=>{
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