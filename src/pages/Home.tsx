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
                <h1 className="title">Bienvenue sur mon portfolio</h1>
                <p>Un jour, je ferai ma présentation, en attendant, mon logo n'est-il pas <span className="title">magnifique</span> ?</p>
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