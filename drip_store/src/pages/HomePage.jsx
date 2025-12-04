import { SectionHero, Sections } from "../components/Section";
import { CardDestaque } from "../components/ProductCard";
import ImgBlusa from "../assets/images/blusa_destaque.png";
import ImgTenis from "../assets/images/tenis_3.png";
import ImgFone from "../assets/images/fone_destaque.png";

const HomePage = () => {
    const arrayCards = [
        {
            discount: "30% OFF",
            title: "Novo drop Supreme",
            image: ImgBlusa
        },
        {
            discount: "30% OFF",
            title: "Coleção Adidas",
            image: ImgTenis
        },
        {
            discount: "30% OFF",
            title: "Novo Beats Bass",
            image: ImgFone
        },
    ]
    return ( 
        <>
            <div className="w-full">
                    <SectionHero/>
                    {/* Coleções em destaque */}
                    <Sections
                    titleAlign={"center"}
                    title={"Coleções em destaque"}
                    link={{href:"", text: "Ver todos ->"}}
                    estilo={"flex flex-wrap gap-3"}
                    >
                        {arrayCards.map((item)=>(
                            <CardDestaque
                                discount={item.discount}
                                title={item.title}
                                image={item.image}
                            />
                        ))}
                    </Sections>
                    {/* Coleções em Destaque Tipo */}
            </div>
        </> 
    );
}
 
export default HomePage;