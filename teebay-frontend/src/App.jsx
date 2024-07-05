import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllProducts from './pages/AllProducts';
import UserProducts from './pages/UserProducts';
import { Login } from './components/Login';
import MainNav from './components/MainNav';
import SignUp from './components/SignUp';
import Buy from './pages/Buy';
import RentModal from './pages/RentModal';
import Dashboard from './pages/Dashboard';
import ConfirmBuy from './pages/ConfirmBuy';




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
        Component: Dashboard,
      },
      {
        path: "/dashboard/products",
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
  {
    path: "/buy",
    Component: Buy,
  },
  {
    path: "/rentmodal",
    Component: RentModal,
  },
  {
    path: "/confirmbuy",
    Component: ConfirmBuy,
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


