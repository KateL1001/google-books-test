import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';

import './style/reset.css';
import './style/index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';


const Main = lazy(() => import('./pages/Main/Main.tsx'));
const Detail = lazy(() => import('./pages/Detail/Detail.tsx'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <Suspense fallback="Loading..."><Main/></Suspense>
	},
	{
		path: '/book/:id',
		element: <Suspense fallback="Loading..."><Detail/></Suspense>
	}
]);



createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
	</StrictMode>
);
