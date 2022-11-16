import React, { useEffect, useState } from 'react';
import './Header.scss';

import HeaderLogo from '../HeaderLogo/HeaderLogo'; 
import Container from '../Container/Container';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import HeaderNav, { HeaderNavProps } from '../HeaderNav/HeaderNav';
type Header= {
	authorized:boolean
};

const menuItems  = [
	{text:'shop',},{text:'brands'},
	{text:'my boyfriends snack'},{text:'staff edit'}
] 

const  Header:React.FC<Header> = () => {
	 const isAuthorized = false;
	 const [animated,setAnimated] = useState(true);
	 const logoText = 'hebe.';
	 useEffect(()=>{
		const animationInterval = setInterval(()=>{
			setAnimated(!animated);
		 },6000);
	return () => {
		clearInterval(animationInterval);
	}
	 },)

	 
	return (
		<header className='header'>
				<Container>
					<div className="header__inner">
						<div className="header__logo">
							<HeaderLogo animated={animated} logoText={logoText}></HeaderLogo>
						</div>
						<div className="header__menu">
							<HeaderNav menuItems={menuItems}/>
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