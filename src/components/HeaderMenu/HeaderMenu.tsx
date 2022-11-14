import React from 'react';
import './HeaderMenu.scss'; 

type HeaderMenu = {
	menuItems:string[];
}

export default function HeaderMenu({menuItems}:HeaderMenu){
	return (
		<div className="header-menu">
				{menuItems.map(item=>{
					return(
						<span className="header-menu__item">
							{item}
						</span>
					)
				})}
		</div>
	)

}