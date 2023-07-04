import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import styles from './projects.module.css'
import Lp from '../../images/Projects/LP.png'
import ccxp from '../../images/Projects/CCXP.png'
import farm from '../../images/Projects/farmacia.png'
function Projects () {
    return (
        <div className = {styles.Projects} id="Projects">
            <h1> Projetos</h1>
            <Card
                img={Lp} 
                title='Landing Page'
                tech='HTML, CSS E JAVASCRIPT' 
                description='Desenvolvimento de uma lading page' 
                repo='https://github.com/LucasStuker/LandingPageArqio'
                site='https://calm-boba-279aa7.netlify.app/'
            />
            <Card
                 img={ccxp} 
                title='Landing Page da ccpx'
                tech='HTML, CSS E JAVASCRIPT' 
                description='Desenvolvimento de uma lading page do evento da ccxp' 
                repo='https://github.com/LucasStuker/DesafioCCXP'
                site='https://clinquant-daifuku-9e3994.netlify.app/'
            />
            <Card
                img={farm} 
                title='Landing Page de uma farmacia '
                tech='HTML, CSS E JAVASCRIPT' 
                description='Desenvolvimento de uma farmacia sendo possivel adcionar e remover medicamentos' 
                repo='https://github.com/LucasStuker/farm-cia/blob/main/README.md'
                site=' '
            />

            
        </div>
    )
}
export default Projects