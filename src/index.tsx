import React from 'react';
import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	BrowserRouter,
	RouterProvider,
	Route,
  } from "react-router-dom";
import App from './App';

import './styles/index.scss';
import './styles/nullstyle.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Falied to find the root element');

const root = createRoot(rootElement);
root.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
);
