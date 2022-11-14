import React, { ReactNode } from 'react';
import './Container.scss';
type Container = {
	children:ReactNode[] | ReactNode;
}

export default function Container ({children}:Container){
	return <div className="container">{children}</div>
}