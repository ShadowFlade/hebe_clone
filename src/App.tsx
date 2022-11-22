import React, { useContext, useRef } from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import MainPage from './pages/MainPage/MainPage';
import { Context } from './context/context';

export default function App() {
	const context = useContext(Context);
	const appRef = context.refs.appRef;
	return (
		<div ref={appRef} className="app">
			<Routes>
				<Route path={'/'} element={<Layout />}>
					<Route index element={<MainPage />} />
				</Route>
			</Routes>
		</div>
	);
}
