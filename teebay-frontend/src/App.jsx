import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProducts from './pages/AllProducts';
import UserProducts from './pages/UserProducts';
import { Login } from './components/Login';
import MainNav from './components/MainNav';
import SignUp from './components/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/products",
        Component: AllProducts,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Layout,
    children: [
      {
        path: "/dashboard",
        Component: UserProducts,
      }
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component:SignUp,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

export function Layout() {
  return (
    <div>
      <MainNav/>
 
      <div className='min-h-screen mx-auto container'>
        <Outlet />
      </div>
    </div>
  );
}


