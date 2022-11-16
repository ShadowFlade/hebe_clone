import BigPictureMainPage from '@/components/BigPictureMainPage/BigPictureMainPage';
import { nanoid } from 'nanoid';
import React from 'react';

type MainPage = {

};

const MainPage = ({}:MainPage) => {
	return (
		<BigPictureMainPage title='Kowtow' key={nanoid()}/>

	)
}

export default MainPage;
