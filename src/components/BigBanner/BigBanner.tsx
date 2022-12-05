import React, { useRef, useState } from 'react';
import './BigBanner.scss';
type BigBannerProps = {
	text:string;
	backgroundColor:string;
}

const BigBanner = ({text,backgroundColor} : BigBannerProps) => {
	const [isIntersecting,setIsIntersecting] = useState(false);
	const textRef = useRef<null | HTMLParagraphElement>(null);
	let options = {
		root: null,
		rootMargin: '0px',
		threshold: 0
	  }
	  const toggleTextClasses = () => {
		setIsIntersecting(!isIntersecting);
	  }
	  let observer = new IntersectionObserver(toggleTextClasses, options);
	  textRef.current ?  observer.observe(textRef.current) : null;
	  
	return (
		<section className="big-banner" style={{backgroundColor}}>
			<div className="big-banner__inner">
				<p ref={textRef} className={`big-banner__text ${isIntersecting ? 'big-banner__text--revealing' : null}`}>
					{text}
				</p>
			</div>
		</section>
	)
}

export default BigBanner;