import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'


function Presentation () {
    return (
        <div className={styles.Presentation} id="Presentation">
            <h4><strong>Bem vindo ao meu Portifólio</strong></h4>
            <h1>Olá, eu sou Lucas Stuker</h1>
            <p>Olá, meu nome é Lucas e sou apaixonado por tecnologia e códigos.<br></br> Acredito no poder da inovação e da transformação digital para melhorar a vida das pessoas.<br></br> Ao longo dos anos, tenho me dedicado ao estudo e aprimoramento de minhas habilidades na área de desenvolvimento web.<br></br>
               Meu conhecimento é mais aprofundado em HTML, CSS e JavaScript, <br></br>as linguagens fundamentais da web. Com elas, sou capaz de criar interfaces atraentes e funcionais, utilizando as melhores práticas e padrões da indústria.<br></br> Além disso, tenho experiência com a biblioteca React, que me permite desenvolver aplicações web dinâmicas e interativas.<br></br>
               Além das linguagens front-end, também tenho noções de Python e C,<br></br> ampliando meu leque de possibilidades e permitindo-me trabalhar tanto no desenvolvimento web como em outras áreas da programação.<br></br> Essas linguagens versáteis me permitem criar soluções eficientes e escaláveis para os desafios que encontro.
            </p>
            <ButtonA link='https://github.com/LucasStuker' target='_blank' text='Conecte-se comigo!'/>
            
            

        </div>
    )
}
export default Presentation