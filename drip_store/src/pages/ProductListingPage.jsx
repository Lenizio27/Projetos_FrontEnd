const ProductListingPage = () => {
    const arrayFiltroProdutos = [
        {
            title: "Marcas",
            radios: ["Adidas", "Calenciaga", "K-Swiss", "Nike", "Puma"],
        },
        {
            title: "Categoria",
            radios: ["Esporte e lazer", "Casual", "Utilitário", "Corrida"],
        },
        {
            title: "Gênero",
            radios: ["Masculino", "Feminino", "Unisex"],
        },
        {
            title: "Estado",
            radios: ["Novo", "Usado"],
        },
    ]
    return ( 
        <>
        <section className="bg-s6">
            <div className="flex flex-col max-w-[1440px] m-auto px-4">
                <div>
                    <h2></h2>
                    <div>
                        ordenar por:
                        <select name="" id="">
                            <option value="">mais relevanes</option>
                            <option value="">sasdfasdf</option>
                        </select>
                    </div>
                </div>
                <div className="flex p-4">
                    <aside className="flex-4 bg-s7 p-4 w-[308px]">
                        <h3>Filtrar por</h3>
                        <hr />
                        {arrayFiltroProdutos.map((item) => (
                            <div>
                                <h2 className="font-bold my-1">{item.title}</h2>
                                {item.radios.map(a => 
                                <p>
                                    <input type="radio" id="radioCheck"/>{a}
                                </p>
                                )}
                            </div>
                        ))}
                    </aside>
                    <div className="flex-8">

                    </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ProductListingPage;