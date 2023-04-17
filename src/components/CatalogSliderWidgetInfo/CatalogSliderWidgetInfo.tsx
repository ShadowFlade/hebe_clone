import * as React from 'react';
import './CatalogSliderWIdgetInfo.scss';
import { useState } from 'react';

type ICataloSliderWidgetInfoProps = {
	title: string;

	brand: string;
	price: string;
	labels: string[];
	color: string;
	availability: boolean;
	description: string[];
	shipping: ShippingItem[];
	returns: string[];
	productName: string;
};
type ShippingItem = {
	text: string[];
	title: string;
};

const CataloSliderWidgetInfo = ({
	brand,
	price,
	labels,
	color,
	availability: isAvailable,
	description,
	shipping,
	returns,
	productName,
}: ICataloSliderWidgetInfoProps) => {
	const [descriptionTabVisible,setDescriptionTabVisible] = useState(true);
	const [shippingTabVisible,setShippingTabVisible] = useState(false);
	const [returnsTabVisible,setReturnsTabVisible] = useState(false);

	return (
		<div className="catalog-widget-info">
			<div className="catalog-widget-info__inner">
				<p className="catalog-widget-info__brand">{brand}</p>

				<h2 className="catalog-widget-info__name">{productName}</h2>
				<p className="catalog-widget-info__price">
					{price}
					<div className="catalog-widget-info__labels">
						{labels.map((item) => {
							return <span className="catalog-widget-info__label">{item}</span>;
						})}
					</div>	
				</p>


				<div className="catalog-widget-info__color">
					Color-{color}
					<span
						style={{ backgroundColor: color }}
						className="catalog-widget-info__color-circle"
					></span>
				</div>

				<button className="catalog-widget-info__availability">
					{isAvailable ? 'Buy' : 'Sold Out'}
				</button>
				<div className="catalog-widget-info__information">
					<div className="catalog-widget-info__tabs">
						<span className="catalog-widget-info__tab">Description</span>
						<span className="catalog-widget-info__tab">Shipping</span>
						<span className="catalog-widget-info__tab">Returns</span>
					</div>
					<p className="catalog-widget-info__text"></p>	
				</div>
			</div>
		</div>
	);
};
export default CataloSliderWidgetInfo;
