import * as React from 'react';
import './CatalogSliderWIdgetInfo.scss';
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
	return (
		<div className="catalog-widget-info">
			<div className="catalog-widget-info__inner">
				<p className="catalog-widget__brand">{brand}</p>

				<h2 className="catalog-widget-info__name">{productName}</h2>
				<p className="catalog-widget-info__price">{price}</p>

				<div className="catalog-widget-info__labels">
					{labels.map((item) => {
						return <span className="catalog-widget-info__label">{item}</span>;
					})}
				</div>
				<div className="catalog-widget-info__color">
					Color-{color}
					<span
						style={{ backgroundColor: color }}
						className="catalog-widget__color-circle"
					></span>
				</div>

				<button className="catalog-widget-info__availability">
					{isAvailable ? 'Buy' : 'Sold Out'}
				</button>
				<div className="catalog-widget-info__information"></div>
			</div>
		</div>
	);
};
export default CataloSliderWidgetInfo;
