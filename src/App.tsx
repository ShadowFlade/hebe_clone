import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import MainPage from './pages/MainPage/MainPage';

export default function App() {

	return (
		<div className="app">
			<Routes>
				<Route path={'/'} element={<Layout/>}>
					<Route 
							index
							element={<MainPage/>}/>
				</Route>
			</Routes>
		</div>
	);
}
