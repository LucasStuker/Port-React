
import styles from './Footer.module.css'
import { FaInstagram,  FaLinkedin, FaGithub} from 'react-icons/fa';
function Footer () {
    return (
        <div className={styles.Footer}>
            <ul>
                <li><a href='https://www.instagram.com/lucasstuker/' target='_blank'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/LucasStuker' target='_blank'><FaGithub size={30}/></a></li>
                <li> <a href='https://www.linkedin.com/in/lucas-stuker-06bb0a148/' target='_blank'><FaLinkedin size={30}/></a></li>
           </ul>
           <p>lucasstuker@gmail.com</p>
           <p>Lucas Stuker@2023</p>
        </div>
    )
}
export default Footer