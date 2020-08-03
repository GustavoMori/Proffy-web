import React from 'react';
// Icons and images
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/54715328?s=460&u=53f433753f6cb57a35a14d25e86ac4a1f0e4b932&v=4" alt="Gustavo Mori"/>
                        <div>
                            <strong>Gustavo Mori</strong>
                            <span>HTML+CSS</span>
                        </div>
                    </header>

                    <p>
                        Entusiasta de técnologia e um eterno aluno.
                        <br/><br/>
                        Focado atualmente em React, React Native, e NodeJS.
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 60,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;