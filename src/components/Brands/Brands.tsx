import React from 'react';
import './Brands.scss';
import img1 from'./1.jpg';
import img2 from'./2.jpg';
import img3 from'./3.jpg';
import img4 from'./4.jpg';
import img5 from'./5.jpg';
import img9 from'./9.jpg';
import img10 from'./10.jpg';
import img6 from './6.png';
import img7 from './7.png';
import img8 from './8.png';


const imgs = [
	img1,img2,img3,img4,img5,img6,img7,img8,img9,img10
];

type BrandsProps = {
	brandsImgs?:string[];
}

const Brands = ({brandsImgs}:BrandsProps) => {
	
	return (
		<div className="brands">
			<div className="brands__inner">
				{imgs.map(img=>{
					return (
						<div className="brands__item">
							<img src={img} alt="" className="brands__img" />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Brands;