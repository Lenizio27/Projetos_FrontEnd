import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <>
            <Header />
                <main className="max-md:pt-[80px]">
                    <Outlet />
                </main>
            <Footer/>
        </>
     );
}
 
export default Layout;