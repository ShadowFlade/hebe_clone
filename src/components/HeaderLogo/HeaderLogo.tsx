import React from 'react';
import {nanoid} from 'nanoid';
import "./HeaderLogo.scss";
type HeaderLogo = {
	logoText:string;
	animated:boolean;
};

export default function HeaderLogo({logoText,animated}:HeaderLogo){
	const text = Array.from(logoText);
	return (
		<span className="header-logo">
			{text.map((item,i)=>{
				return <span key={nanoid()} 
				style={{"--index":i,"--negativeIndex":text.length - i} as React.CSSProperties} 
							className={`header-logo__letter ${animated ? 'header-logo__letter--animated' : ''}`}>
							{item}
						</span>
			})}
	</span>
	)

}
