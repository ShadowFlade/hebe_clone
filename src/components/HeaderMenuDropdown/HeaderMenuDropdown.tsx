import { Context } from '@/context/context';
import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import Container from '../Container/Container';
import HeaderMenuColumn from '../HeaderMenuColumn/HeaderMenuColumn';
import './HeaderMenuDropdown.scss';

type HeaderMenuDropdown = {
	columns: HeaderMenuColumn[] | null;
};

const HeaderMenuDropdown = ({ columns }: HeaderMenuDropdown) => {
	const context = useContext(Context);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const appRef = context.refs.appRef;
	if (appRef && appRef.current) {
		appRef!.current!.onmouseenter = () => {
			setIsOpen(true);
		};
	}

	return (
		<div className="header-menu-dropdown">
			<Container>
				<div className="header-menu-dropdown__inner">
					{columns
						? columns.map((column) => {
								return (
									<HeaderMenuColumn
										key={nanoid()}
										title={column.title}
										items={column.items}
									/>
								);
						  })
						: null}
				</div>
			</Container>
		</div>
	);
};

export default HeaderMenuDropdown;
