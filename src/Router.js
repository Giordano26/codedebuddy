import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    index: true
                }
            ]
        }
    ]
);



export default Router;