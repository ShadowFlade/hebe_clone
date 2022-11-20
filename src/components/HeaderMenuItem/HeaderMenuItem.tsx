import React from 'react';
import './HeaderMenuItem.scss';
type HeaderMenuItem = {
	text:string;
	link:string;
}

const HeaderMenuItem = ({link,text}:HeaderMenuItem) => {
	return (
		<li className="header-menu-dropdown__item">
			<a href={link} className="header-menu-dropdown__text">
				{text}
			</a>
		</li>
	)
}

export default HeaderMenuItem;