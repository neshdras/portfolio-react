import Footer from "../composants/Footer";
import Navbar from "../composants/Header";
import ListSkill from "../composants/Skill";


const Home = () =>{
    return (
        <>
        
        <Navbar/>

        <main>
            <section id="info-section">
                <h1 className="title">Bievenue sur mon portfolio</h1>
            </section>
            <section id="skill-section">
                <h2 className="title">Compétences</h2>
                <div id="skill-list"><ListSkill/></div>           
            </section>
        </main>

        <Footer/>
        </>
)};

export default Home;