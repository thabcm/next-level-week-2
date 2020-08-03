import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item" >
                <header>
                    <img src="https://image.freepik.com/fotos-gratis/positivo-feminino-sorrindo-engracado-modelo-posando-perto-de-parede-rosa-no-estudio_158538-3433.jpg" alt="Thalita Barros"/>
                    <div>
                        <strong>Thalita Barros</strong>
                        <span>Química</span>
                    </div>
                </header>

                <p>
                Quando você encontra alguém especial e se apaixona por essa pessoa,
                 você começa a construir um relacionamento com os cuidados de quem 
                 constrói uma Maravilha. 
                 <br></br>
                 Seus materiais básicos são constituídos de 
                 muito Amor, Companheirismo e Dedicação.
                </p>

                <footer>
                    <p>
                        Preço/hora 
                        <strong>R$ 60,00</strong>    
                    </p>
                    <button type="button" >
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </article>
    )
}

export default TeacherItem;