import { nanoid } from 'nanoid';
import React, { useRef } from 'react';
import HeaderMenuColumn from '../HeaderMenuColumn/HeaderMenuColumn';
import HeaderMenuDropdown from '../HeaderMenuDropdown/HeaderMenuDropdown';
import './HeaderNav.scss'; 

export type HeaderNavProps = {
	menuItems:menuItem[];
}

type menuItem = {
	link?:string;
	text:string;
	dropdownMenu?:HeaderMenuDropdown;
}



export default function HeaderNav({menuItems}:HeaderNavProps){
	const menuDropdown = useRef<HTMLDivElement | null>(null);
	return (
		<ul className="header-nav">
				{menuItems.map(item=>{
					return(
						<li className="header-nav__item">
							<a href={item.link || '/'} className="header-nav__link">
								{item.text}
							</a>
							<div ref={menuDropdown} className="header-nav__dropdown">
									 {<HeaderMenuDropdown key={nanoid()} columns={item.dropdownMenu?.columns as HeaderMenuColumn[]}/> }
							</div>
							
						</li>
					)
				})}
		</ul>
	)

}