import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Profile from './Pages/Profile/Profile'
import Favorites from './Pages/Favorites/Favorites'
import Basket from './Pages/Basket/Basket'
import AboutUs from "./Pages/AboutUs/AboutUs";

const routesArray = [
    {path: '/', element: <Home/>},
    {path: '/profile', element: <Profile/>},
    {path: '/contactUs', element: <ContactUs/>},
    {path: '/favorites', element: <Favorites/>},
    {path: '/basket', element: <Basket/>},
    {path: '/about', element: <AboutUs/>},
]

export default routesArray;