import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import {Welc, About, Exp, Edu, Skills, Proj, Contact} from '../components/Index'
import Welc from '../components/Welc';
import About from '../components/About';
import Edu from '../components/Edu';
import Exp from '../components/Exp';
import Skills from '../components/Skills';
import Proj from '../components/Proj';
import Contact from '../components/Contact';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Welc />} />
                <Route path='welc' element={<Welc /> } />
                <Route path='/about' element={<About />} />
                <Route path='edu' element={<Edu />} />
                <Route path='exp' element={<Exp />} />
                <Route path='skills' element={<Skills />} />
                <Route path='projects' element={<Proj />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default AppRoutes;