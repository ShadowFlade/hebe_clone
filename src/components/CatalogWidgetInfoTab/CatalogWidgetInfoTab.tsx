import React, { useState } from 'react';
import classNames from 'classnames';
import './CatalogWidgetInfoTab.scss';
type Paragraph = {
	title?: string;
	text: string | string[];
};

type CatalogWidgetInfoTabProps = {
	data: Paragraph | Paragraph[];
	isOpen: boolean;
};

const CatalogWidgetInfoTab = ({ data, isOpen }: CatalogWidgetInfoTabProps) => {
	const infoTabClass = classNames({
		'catalog-info-tab': true,
		'catalog-info-tab--hidden': !isOpen,
	});
	const renderTabText = (text: string) => {
		return <p className="catalog-info-tab__text">{text}</p>;
	};
	return (
		<>
			<div className={infoTabClass}>
				{Array.isArray(data) ? (
					data.map((item) => (
						<div className="catalog-info-tab__paragraph">
							<h1 className="catalog-info-tab__title">{item.title}</h1>
							{Array.isArray(item.text)
								? item.text.map((item) => renderTabText(item))
								: ''}
						</div>
					))
				) : (
					<p className="catalog-info-tab__text">{data.text}</p>
				)}
			</div>
		</>
	);
};

export default CatalogWidgetInfoTab;
