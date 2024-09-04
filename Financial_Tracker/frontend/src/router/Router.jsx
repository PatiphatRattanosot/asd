
import { createBrowserRouter } from 'react-router-dom'
import Financial_Page from '../pages/Financial_Page';
import AllUser_page from '../pages/AllUser_page';
import Layout from '../components/Layout';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Financial_Page />,
      },{
        path: '/user/financial',
        element: <AllUser_page />,
      }
    ],
  }
]);

export default router;