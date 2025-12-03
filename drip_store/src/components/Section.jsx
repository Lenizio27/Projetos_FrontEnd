export const SectionHero = () => {
    return ( 
        <>
            <section className=" bg-s6">
                <div className="max-md:h-[calc(100vh-80px)] h-[calc(100vh-124px)] flex w-full max-md:flex-col max-w-[1440px] m-auto">
                    <div className="flex-1 flex justify-center items-start p-2 flex-col gap-4 max-md:order-1 max-md:items-center max-md:text-center">
                        <h2 className="font-bold text-c6 max-md:text-c2">
                            Melhores ofertas personalizadas
                        </h2>
                        <h3 className=" font-extrabold text-[64px] leading-[66px]">
                            Queima de stoque Nike🔥
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse officia temporibus accusamus soluta
                        </p>
                         <button
                            className="flex items-center justify-center text-s7 h-[22px] bg-c2 px-14 py-5 rounded-md my-5 max-md:w-full">
                                Ver Ofertas
                        </button>
                    </div>
                    <div className="flex-1 bg-c2 flex justify-center items-center p-2 ">
                        <img src="../src/assets/images/tenis_1.png" alt="" className="max-md:w-[300px]"/>
                        <div className="w-4 h-2 bg-s5"></div>
                    </div>
                </div>
                
            </section>
        </>
     );
}

export const Sections = ({}) => {
    return (
        <>

        </>
    )
}