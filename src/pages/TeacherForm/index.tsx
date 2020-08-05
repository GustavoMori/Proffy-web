import React from 'react';
// Components
import PageHeader from '../../componentes/PageHeader';
import Input from '../../componentes/input';
import Textarea from '../../componentes/Textarea';
import Select from '../../componentes/Select';
// Style
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg'



function TeacherForm() {
    return(
    <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
        />

        <main>
            <fieldset>
                <legend>Seu dados</legend>
                <Input name="name" label="Nome completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>
                <Textarea name="bio" label="Biografia"/>
            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>
                <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        { value: 'Artes', label: 'Artes'},
                        { value: 'Matemática', label: 'Matemática'},
                        { value: 'Biologia', label: 'Biologia'},
                        { value: 'Química', label: 'Química'},
                        { value: 'Física', label: 'Física'},
                        { value: 'Geografia', label: 'Geografia'},
                        { value: 'História', label: 'História'},
                        { value: 'Inglês', label: 'Inglês'},
                        { value: 'Português', label: 'Português'},
                        { value: 'Educação Física', label: 'Educação Física'},
                    ]}
                />
                <Input name="cost" label="Custo da sua hora por aula"/>
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante <br />
                    Preencha todos os dados
                </p>
                <button type="button">
                    Salvar cadastro
                </button>    
            </footer>
        </main>
    </div>
    )
}
export default TeacherForm;
