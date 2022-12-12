import React from 'react';
import './VideoBanner.scss';
type VideoBannerProps = {
	videoPath:string;
}

const VideoBanner = ({videoPath}:VideoBannerProps) => {
	

	return (
		<div className="video-banner">
			<div className="video-banner__inner">
				<video className='video-banner__video' autoPlay src={videoPath}/>
			</div>
		</div>
	)
}

export default VideoBanner;