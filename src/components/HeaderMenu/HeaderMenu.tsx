import React from 'react';
import './HeaderMenu.scss'; 
type HeaderItem = {
	text:string;
	link?:string;
}
type HeaderMenu = {
	menuItems:HeaderItem[];

}

export default function HeaderMenu({menuItems}:HeaderMenu){
	return (
		<div className="header-menu">
				{menuItems.map(item=>{
					return(
						<span className="header-menu__item">
							<a href={item.link || '/'} className="header-menu__link">
								{item.text}
							</a>
						</span>
					)
				})}
		</div>
	)

}