import React from 'react';
// import './HeaderAuth.scss';


type HeaderAuth = {
	isAuthorized:boolean;
}

const HeaderAuth = ({isAuthorized}:HeaderAuth) =>{

	return (
		<div className="header-auth">
			<div className="header-auth__items">
				<div className="header-auth__item"></div>
			</div>
		</div>
	)
}

export default HeaderAuth;