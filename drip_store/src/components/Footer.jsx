import { Logo } from "./Logo";

const Footer = () => {
    return ( 
        <>
            <footer className="bg-s3">
                <div className="flex">
                    <article className="flex-3">
                        <Logo
                            open={false}
                        />
                    </article>
                    <section className="flex-9">
                    
                    </section>
                </div>
            </footer>
        </>
     );
}
 
export default Footer;