export const Logo = ({open}) => {
    return ( 
        <>
        <div className="flex justify-center items-center text-center ">
            <img 
            src={`../src/assets/images/${open ? "vector.png" : "vector_white.png"}`}
            alt="Logo"
            />
            <p className={`text-[36.6px] font-semibold px-2 text-c2 flex-nowrap ${open ? "text-c2" : "text-s7"}`}>Digital Store</p>
        </div>
        </>
     );
}

export const LogoMobile = ({open}) => {
    return ( 
        <>
        <div className="flex justify-center items-center text-center">
            <img 
            src="../src/assets/images/vector.png" 
            alt="Logo" 
            className={`w-[28px]`}
            /><p className={`text-[30px] font-semibold px-2 text-c2 flex-nowrap ${open ? "text-c2" : "text-s7"}`}>Digital Store</p>
        </div>
        </>
     );
}