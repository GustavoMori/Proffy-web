import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
// Components
import PageHeader from '../../componentes/PageHeader';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem'
import Input from '../../componentes/input';
import Select from '../../componentes/Select';
// Style
import './styles.css';

function TeacherList() {
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function searchTeachers(e: FormEvent ){
        e.preventDefault();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data)
    }

    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select 
                    name="subject" 
                    label="Matéria"
                    value={subject}
                    onChange={ (e) => { setSubject(e.target.value)}}
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
                    value={week_day}
                    onChange={ (e) => { setWeek_day(e.target.value)}}
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
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={ (e) => { setTime(e.target.value)}}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    )
}
export default TeacherList;