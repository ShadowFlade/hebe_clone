import React from 'react';
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem';

type HeaderMenuColumn = {
	items:[Link,Link,Link,Link,Link,Link];
	title:string;
}

const HeaderMenuColumn  = ({items,title}:HeaderMenuColumn) => {
	return (
		<div className="header-menu-dropdown__column">
			<h3 className="header-menu-dropdown__title">
				{title}
			</h3>
			<ul className="header-menu-dropdown__items">
				{items.map(item=>{
					return <HeaderMenuItem link={item.link || '/'} text={item.text}/>
				})}
			</ul>
		</div>
	)}


export default HeaderMenuColumn;