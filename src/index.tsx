import React from 'react';
import { createRoot } from 'react-dom/client';
import ContextProvider from './context/context';
import { createBrowserRouter, BrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';

import './styles/index.scss';
import './styles/nullstyle.css';
import './utils/utils.scss';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Falied to find the root element');

const root = createRoot(rootElement);
root.render(
	<ContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ContextProvider>
);
