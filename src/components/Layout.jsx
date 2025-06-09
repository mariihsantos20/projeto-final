import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from 'react-router-dom';
import 'primeflex/primeflex.css';

const Layout = ({children}) => {
    return ( 
   
    <div className="flex flex-column min-h-screen">
    <Header/>
    

    <main className="md:w-full bg-[#F9F8FE]">
        {children || <Outlet />}
    </main>

    <Footer />
    </div>
   
     );
}
 
export default Layout;