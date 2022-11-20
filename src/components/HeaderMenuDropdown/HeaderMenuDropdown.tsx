import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import Container from '../Container/Container';
import HeaderMenuColumn from '../HeaderMenuColumn/HeaderMenuColumn';
import './HeaderMenuDropdown.scss';

type HeaderMenuDropdown = {
	columns:HeaderMenuColumn[] | null;
}

const HeaderMenuDropdown = ({columns}:HeaderMenuDropdown) => {
	return (
		<div className="header-menu-dropdown">
			<Container>
				<div className="header-menu-dropdown__inner">
					{columns?.map(column=>{
						return (
							<HeaderMenuColumn key={nanoid()} title={column.title} items={column.items}
						/>)
					})}
				</div>
			</Container>
		</div>
	)
}

export default HeaderMenuDropdown;