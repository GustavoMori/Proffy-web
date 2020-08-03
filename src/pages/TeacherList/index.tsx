import React from 'react';
import { Link } from 'react-router-dom';

// Icons and images
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
// Components
import PageHeader from '../../componentes/PageHeader';

import './styles.css';


function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis."/>
        </div>
    )
}
export default TeacherList;