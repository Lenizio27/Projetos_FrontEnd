import Logo from "./Logo";
const Header = () => {
    return ( 
        <>
        <header className="bg-c1">
            <div className="flex flex-col items-center w-[1280px] m-auto">
                <div className="flex items-center justify-around">
                    <Logo/>
                    <input type="text" />
                    <div className="pi pi-shopping-cart"></div>
                </div>
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
     );
}
 
export default Header;