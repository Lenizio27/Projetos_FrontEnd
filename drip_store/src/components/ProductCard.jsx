export const CardDestaque = ({discount, title, image}) => {
    return ( 
        <>
            <div className="relative overflow-hidden h-[251px] flex-1 bg-c7 basis-[405px] shrink-[405px] rounded-xl flex">
                <div className="flex flex-col p-3 w-[50%] h-[100%] justify-around ">
                    <p className="bg-[#E7FF86] p-3 f-bold h-[32px] w-[92px] text-[14px] flex items-center rounded-xl">
                        {discount}
                    </p>
                    <h3 className="font-bold text-[32px]">
                        {title}
                    </h3>
                    <button 
                    className="flex items-center justify-center text-c2 h-[22px] bg-s7 px-7 py-5 rounded-md w-[153px]">
                            Comprar
                    </button>
                </div>
                <img src={image} alt="" className="w-[240px] absolute bottom-0 -right-5 -rotate-[deg30]"/>
            </div>
        </>
     );
}