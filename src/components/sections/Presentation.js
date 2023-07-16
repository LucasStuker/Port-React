import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation () {
    const [text, setText] = useState('');
    const toRotate = ['Lucas Stuker' , 'Desenvolvedor FrontEnd', 'Product Manager'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting]= useState(false);
    const period = 100;
    const[delta, setDelta] = useState(100)


    useEffect (() =>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])
    
    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1) 

        setText(updatedText);

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }
    }


    return (
        <div className={styles.Presentation} id="Presentation">
            <h4><strong>Bem vindo ao meu Portifólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>Olá, meu nome é Lucas e sou apaixonado por tecnologia e códigos.<br></br> Acredito no poder da inovação e da transformação digital para melhorar a vida das pessoas.<br></br> Ao longo dos anos, tenho me dedicado ao estudo e aprimoramento de minhas habilidades na área de desenvolvimento web.<br></br>
               Meu conhecimento é mais aprofundado em HTML, CSS e JavaScript, <br></br>as linguagens fundamentais da web. Com elas, sou capaz de criar interfaces atraentes e funcionais, utilizando as melhores práticas e padrões da indústria.<br></br> Além disso, tenho experiência com a biblioteca React, que me permite desenvolver aplicações web dinâmicas e interativas.<br></br>
               Além das linguagens front-end, também tenho noções de Python e C,<br></br> ampliando meu leque de possibilidades e permitindo-me trabalhar tanto no desenvolvimento web como em outras áreas da programação.<br></br> Essas linguagens versáteis me permitem criar soluções eficientes e escaláveis para os desafios que encontro.
            </p>
            <ButtonA link='https://github.com/LucasStuker' target='_blank' text='Conecte-se comigo!'/>
            
            

        </div>
    )
}
export default Presentation