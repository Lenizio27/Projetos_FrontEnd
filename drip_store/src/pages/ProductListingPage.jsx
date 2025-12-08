import { useState } from "react";

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
                <div className="flex justify-between items-center">
                    <h2 className="">resultados para ""</h2>
                    <div className="w-[300px] h-[50px] flex items-center justify-center border">
                        ordenar por:
                        <select name="" id="" className="bg-s6">
                            <option value="" className="bg-c2">mais relevanes</option>
                        </select>
                    </div>
                </div>
                <div className="flex">
                    <aside className="flex-4 bg-s7 p-4 w-[308px]">
                        <h3>Filtrar por</h3>
                        <hr />
                        {arrayFiltroProdutos.map((item) => (
                            <div>
                                <h2 className="font-bold my-1">{item.title}</h2>
                                {item.radios.map(a => 
                                <p className="flex items-center">
                                    <input 
                                    className="appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-c2 checked:border-purple-600 checked:before:content-['✓'] flex items-center text-white mr-1"
                                    type="checkbox" 
                                    id="radioCheck"/>
                                    {a}
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