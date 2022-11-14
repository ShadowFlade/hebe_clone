import React from 'react';
import {nanoid} from 'nanoid';
import "./HeaderLogo.scss";
type HeaderLogo = {
	logoText:string;
};

export default function HeaderLogo({logoText}:HeaderLogo){
	const text = Array.from(logoText);
	return (
		<span className="header-logo">
			{text.map((item,i)=>{
				return <span key={nanoid()} style={{"--index":i} as React.CSSProperties} 
							className={'header-logo__letter'}>
							{item}
						</span>
			})}
	</span>
	)

}
