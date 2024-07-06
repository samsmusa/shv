import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import UserProducts from './pages/UserProducts';
import { Login } from './components/Login';
import MainNav from './components/MainNav';
import SignUp from './components/SignUp';
import Buy from './pages/Buy';
import RentModal from './pages/RentModal';
import {Dashboard as pageDashboard} from './pages/Dashboard';
import ConfirmBuy from './pages/ConfirmBuy';
import Dashboard from './components/Dashboard';
import {HiChartPie, HiViewBoards} from "react-icons/hi"
import { Sidebar } from "flowbite-react";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: AllProducts,
      },
      {
        path: "/products",
        Component: AllProducts,
      },
      {
        path: "/product/:productId",
        Component: Buy
      }
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        Component: pageDashboard,
      },
      {
        path: "/dashboard/products",
        Component: UserProducts,
      },

  {
    path: "/dashboard/myproducts",
    Component: Dashboard,
  },
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
  }
 
]);

export default function App() {
  return <RouterProvider router={router} />;
}

export function DashboardLayout() {
  const navigate = useNavigate()
  return (
    <div>
      <MainNav/>
 
      <div className='min-h-screen mx-auto container text-sm'>
        <div className="grid grid-cols-4 gap-x-8">
        <div className='col-span-1 shadow'>
          <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
      <Sidebar.ItemGroup>
          <Sidebar.Item  icon={HiChartPie}>
            Jone Doe
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item onClick={()=>navigate("/dashboard/products")} icon={HiChartPie}>
            My Products
          </Sidebar.Item>
          <Sidebar.Item onClick={()=>navigate("/dashboard")} icon={HiViewBoards} label="all" labelColor="dark">
            History
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
          </div>
          
          <div className='col-span-3'>
        <Outlet />
        </div>
        </div>
      </div>
    </div>
  );
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


