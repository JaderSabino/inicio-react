import React from 'react';
import './App.css';

import Primeiro from './componentes/basicos/Primeiro';
import ComParametro from './componentes/basicos/ComParametro';
import ComFilhos from './componentes/basicos/ComFilhos';
import Repeticao from './componentes/basicos/Repeticao';
import Condicional from './componentes/basicos/Condicional';
import CondicionalComIf from './componentes/basicos/CondicionalComIf';
import Card from './componentes/layout/Card.jsx';

export default props => 
    <div className="App">
        <Card titulo="Sexto Exercício">
            <CondicionalComIf numero={10}/>
        </Card>

        <Card titulo="Quinto Exercício">
            <Condicional numero={11}/>
        </Card>

        <Card titulo="Quarto Exercício">
            <Repeticao/>
        </Card>

        <Card titulo="Terceiro Exercício">
            <ComFilhos>
                <ul>
                    <li>Jader</li>
                    <li>Judson</li>
                    <li>Mirlenne</li>
                    <li>Kamila</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="Segundo Exercício">
            <ComParametro titulo="Esse é o título" subtitulo="Este é o subtítulo"/>
        </Card>

        <Card titulo="Primeiro Exercício">
            <Primeiro/>
        </Card>
    </div>