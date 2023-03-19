import Content  from './../pages/Content';
import React from 'react';

import FormForUsesCart from '../UI/FormForUsesCart/FormForUsesCart';

export interface IRoute{
	path: string;
	element: React.ComponentType;
}

// словарь маршрутов приложения
export enum RoutesNames{
	CONTENT = "/",
	CART = "cart/"
}

export const contentRoute: IRoute = {
	path: RoutesNames.CONTENT,
	element: Content
}

export const cartRoute: IRoute = {
	path: RoutesNames.CART,
	element: FormForUsesCart,
}