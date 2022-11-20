import React from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header/Header';
export default function Layout() {
	
	return <div className="layout">
		<Header authorized={false}></Header>
		<Outlet/>
		
	</div>
}
