import * as React from 'react';
import './CatalogSliderWIdgetInfo.scss';
import CatalogWidgetInfoTab from '../CatalogWidgetInfoTab/CatalogWidgetInfoTab';
import { useState } from 'react';
import data from '../CatalogSliderWidget/widget';

type ICataloSliderWidgetInfoProps = {
	title: string;

	brand: string;
	price: string;
	labels: string[];
	color: string;
	availability: boolean;
	descriptionText: { text: string[] };
	shippingText: ShippingItem[];
	returnsText: string[];
	productName: string;
};
type ShippingItem = {
	text: string[];
	title: string;
};

type TabsState = {
	isDescriptionOpen: boolean;
	isShippingOpen: boolean;
	isReturnsOpen: boolean;
};

const CataloSliderWidgetInfo = ({
	brand,
	price,
	labels,
	color,
	availability: isAvailable,
	descriptionText,
	shippingText,
	returnsText,
	productName,
}: ICataloSliderWidgetInfoProps) => {
	const [isDescriptionTabVisible, setIsDescriptionTabVisible] = useState(true);
	const [isShippingTabVisible, setIsShippingTabVisible] = useState(false);
	const [isReturnsTabVisible, setIsReturnsTabVisible] = useState(false);
	const [tabsState, setTabsState] = useState({
		isDescriptionOpen: true,
		isShippingOpen: false,
		isReturnsOpen: false,
	});
	const handleTabsState = (stateToSetTrue: string) => {
		const newObject = { ...tabsState };
		for (const key in newObject) {
			const newKey = key as unknown as keyof typeof tabsState;
			if (key.toLocaleLowerCase().includes(stateToSetTrue)) {
				newObject[newKey] = true;
			} else {
				newObject[newKey] = false;
			}
		}
		console.log(newObject);
		setTabsState(newObject);
	};
	const visibilityHandler = (event: React.MouseEvent<HTMLElement>) => {
		const target = event.target as HTMLElement;
		if (target.textContent) {
			handleTabsState(target.textContent?.toLocaleLowerCase());
		}
	};

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
						<span className="catalog-widget-info__tab" onClick={visibilityHandler}>
							Description
						</span>
						<span className="catalog-widget-info__tab" onClick={visibilityHandler}>
							Shipping
						</span>
						<span className="catalog-widget-info__tab" onClick={visibilityHandler}>
							Returns
						</span>
					</div>
					<div className="catalog-widget-info__text-wrapper">
						<CatalogWidgetInfoTab
							isOpen={tabsState.isDescriptionOpen}
							data={data.description}
						/>
						<CatalogWidgetInfoTab
							isOpen={tabsState.isShippingOpen}
							data={data.shipping}
						/>
						<CatalogWidgetInfoTab
							isOpen={tabsState.isReturnsOpen}
							data={data.returns}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CataloSliderWidgetInfo;
