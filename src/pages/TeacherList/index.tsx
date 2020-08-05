import React from 'react';

// Components
import PageHeader from '../../componentes/PageHeader';
import TeacherItem from '../../componentes/TeacherItem'
import Input from '../../componentes/input';
import Select from '../../componentes/Select';
// Style
import './styles.css';


function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
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
                <Select
                    name="week_day" 
                    label="Dia da semana"
                    options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Segunda-Feira'},
                        { value: '2', label: 'Terça-Feira'},
                        { value: '3', label: 'Quarta-Feira'},
                        { value: '4', label: 'Quinta-Feira'},
                        { value: '5', label: 'Sexta-Feira'},
                        { value: '6', label: 'Sábado'},
                    ]}
                />
                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                
            </main>
        </div>
    )
}
export default TeacherList;