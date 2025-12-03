import { SectionHero, Sections } from "../components/Section";

const HomePage = () => {
    return ( 
        <>
            <div className="w-full">
                    <SectionHero/>
                    <Sections
                    titleAlign={"center"}
                    title={"Coleções em destaque"}
                    link={{href:"", text: "Ver todos ->"}}
                    >
                    </Sections>
            </div>
        </> 
    );
}
 
export default HomePage;