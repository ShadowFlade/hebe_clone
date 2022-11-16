import React, { useRef } from 'react';
import HeaderMenuColumn from '../HeaderMenuColumn/HeaderMenuColumn';
import HeaderMenuDropdown from '../HeaderMenuDropdown/HeaderMenuDropdown';
import './HeaderNav.scss'; 

type HeaderNav = {
	menuItems:menuItem[];
}

type menuItem = {
	link?:string;
	text:string;
	dropdownMenu?:HeaderMenuDropdown;
}

const column1 = {items:[{text:'smth',link:'slkdjf'},{text:'smth',link:'slkdjf'},
{text:'smth',link:'slkdjf'},{text:'smth',link:'slkdjf'},
{text:'smth',link:'slkdjf'},{text:'smth',link:'slkdjf'}
],title:'haj'};
const columns = [column1]

export default function HeaderNav({menuItems}:HeaderNav){
	const menuDropdown = useRef<HTMLDivElement | null>(null);
	return (
		<ul className="header-menu">
				{menuItems.map(item=>{
					return(
						<li className="header-menu__item">
							<a href={item.link || '/'} className="header-menu__link">
								{item.text}
							</a>
							<div ref={menuDropdown} className="header-menu__dropdown">
								<HeaderMenuDropdown columns={columns as HeaderMenuColumn[]}/> 
								{/* TODO костыль, убрать affirmation */}
							</div>
							
							
						</li>
					)
				})}
		</ul>
	)

}