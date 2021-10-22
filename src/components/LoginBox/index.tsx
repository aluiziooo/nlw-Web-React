import styles from './styles.module.scss';
import {VscGithubInverted} from 'react-icons/vsc';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';



export function LoginBox(){
    
    const {signInUrl} = useContext(AuthContext);

    return(
        <div className={styles.LoginBoxWrapper}>
            <strong>Entre e Compartilhe sua Mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com GitHub
            </a>
        </div>
    )
}