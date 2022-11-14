import React, { useState } from 'react';
import './Header.scss';

import HeaderLogo from '../HeaderLogo/HeaderLogo'; 
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import Container from '../Container/Container';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
type Header= {
	authorized:boolean
};

const  Header:React.FC<Header> = () => {
	 const isAuthorized = false;
	return (
		<header className='header'>
				<Container>
					<div className="header__inner">
						<div className="header__logo">
							<HeaderLogo logoText='hebe.'></HeaderLogo>
						</div>
						<div className="header__menu">
							<HeaderMenu menuItems={['shop','brands','my boyfriends snack','staff edit']}/>
						</div>
						<div className="header__auth">
							<HeaderAuth isAuthorized={isAuthorized}></HeaderAuth>
						</div>
					</div>
				</Container>
			

		</header>
	)
}

export default Header;