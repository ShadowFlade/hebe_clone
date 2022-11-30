import React from 'react';

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
					<p className="slider-big-item_name">{name}</p>
					<p className="slider-big-item__section">{section}</p>
					<p className="slider-big-item__price">{price}</p>
					<p className="slider-big-item__sizes">
						{sizes.map(size=>{
							return (
								<span className='slider-big-item__size'>{size}</span>
							)
						})}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SliderBigItem;