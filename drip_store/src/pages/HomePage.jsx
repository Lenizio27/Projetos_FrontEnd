import { SectionHero, Sections } from "../components/Section";
import { CardDestaque, CardDestaqueTipo } from "../components/ProductCard";
import ImgBlusa from "../assets/images/blusa_destaque.png";
import ImgTenis from "../assets/images/tenis_3.png";
import ImgFone from "../assets/images/fone_destaque.png";

import IconBlusa from "../assets/images/icon_blusa.png"
import IconCalca from "../assets/images/icon_calca.png"
import IconFone from "../assets/images/icon_fone.png"
import IconTenis from "../assets/images/icon_tenis.png"

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

    const arrayCardsTipo = [
        {
            image: IconBlusa,
        },
        {
            image: IconBlusa,
        },
        {
            image: IconCalca,
        },
        {
            image: IconFone,
        },
        {
            image: IconTenis,
        },
    ]
    return ( 
        <>
            <div className="w-full">
                    <SectionHero/>
                    {/* Coleções em destaque */}
                    <Sections
                    titleAlign={"left"}
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
                    <Sections
                    titleAlign={"center"}
                    title={"Coleções em destaque"}
                    link={""}
                    >
                        <div className="flex gap-3 justify-center flex-wrap">
                            {arrayCardsTipo.map((item) => (
                                    <CardDestaqueTipo
                                        image={item.image}
                                    />
                                ))}
                        </div>
                    </Sections>
            </div>
        </> 
    );
}
 
export default HomePage;