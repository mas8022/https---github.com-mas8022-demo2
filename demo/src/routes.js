import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Profile from './Pages/Profile/Profile'
import Favorites from './Pages/Favorites/Favorites'
import Basket from './Pages/Basket/Basket'
import AboutUs from "./Pages/AboutUs/AboutUs";
import Product from "./Pages/Product/Product";
import ShowProduct from "./Pages/ShowProduct/ShowProduct";
import CmsProduct from "./Pages/Cms/CmsProduct/CmsProduct";
import CmsUsers from './Pages/Cms/CmsUsers/CmsUsers'
const routesArray = [
    {path: '/', element: <Home/>},
    {path: '/profile', element: <Profile/>},
    {path: '/contactUs', element: <ContactUs/>},
    {path: '/favorites', element: <Favorites/>},
    {path: '/basket', element: <Basket/>},
    {path: '/about', element: <AboutUs/>},
    {path: '/product', element: <Product/>},
    {path: '/showProduct/:food', element: <ShowProduct/>},
    {path: '/cmsProduct', element: <CmsProduct/>},
    {path: '/cmsUsers', element: <CmsUsers/>},
]

export default routesArray;