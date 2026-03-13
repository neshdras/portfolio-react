import Footer from "../composants/Footer";
import Navbar from "../composants/Header";
import ListSkill from "../composants/Skill";
import TrainList from "../composants/Training";
import '../styles/global.scss'


const Home = () =>{
    return (
        <>
        
        <Navbar/>

        <main>
            <section id="info-section">
                <h1 className="title">Bievenue sur mon portfolio</h1>
                <p>Un jour de ferais ma présentation, en attandant, mon logo n'est-il pas <span className="">magnifique</span> ?</p>
            </section>
            <section id="skill-section">
                <h2 className="title">Compétences</h2>
                <div id="skill-list"><ListSkill/></div>           
            </section>
            <section id="train-section">
                <h2 className="title">Formation</h2>
                <div id="train-list"><TrainList/></div>
            </section>
        </main>

        <Footer/>
        </>
)};

export default Home;