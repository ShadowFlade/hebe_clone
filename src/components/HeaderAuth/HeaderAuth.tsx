import React from 'react';
import './HeaderAuth.scss';
import ProfileIcon from './ProfileIcon.svg';
import SearchIcon from './searchicon.svg';
import ShoppingBag from './buy.svg';

type HeaderAuth = {
	isAuthorized:boolean;
}

const HeaderAuth = ({isAuthorized}:HeaderAuth) => {
	
	return (
		<div className="header-auth">
			<div className="header-auth__items">
				<div className="header-auth__item">
					<ProfileIcon className='header-auth__icon'/>
				</div>
				<div className="header-auth__item">
					<SearchIcon className='header-auth__icon'/>
				</div>
				<div className="header-auth__item">
					<ShoppingBag className='header-auth__icon'/>
				</div>
			</div>
		</div>
	)
}

export default HeaderAuth;