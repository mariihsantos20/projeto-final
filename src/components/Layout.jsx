import Footer from "./Footer";
import Header from "./Header";
import 'primeflex/primeflex.css';

const Layout = ({children}) => {
    return ( 
   
    <div className="flex flex-column min-h-screen">
    <Header/>
    <main className="md:w-full bg-[#F9F8FE]" >

        {children}
    </main>
    <Footer />
    </div>
   
     );
}
 
export default Layout;