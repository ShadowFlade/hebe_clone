import React from 'react';
import './BigBanner.scss';
type BigBannerProps = {
	text:string;
	backgroundColor:string;
}

const BigBanner = ({text,backgroundColor} : BigBannerProps) => {
	return (
		<section className="big-banner" style={{backgroundColor}}>
			<div className="big-banner__inner">
				<p className="big-banner__text">
					{text}
				</p>
			</div>
		</section>
	)
}

export default BigBanner;