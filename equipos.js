const express = require('express');

const app = express();
const port = 3001;

const DUMMY_EQUIPOS = [
    {
        id: 'e1',
        equipo: 'Emelec',
        arquero: 'Pedro Ortíz',
        defensa: 'Gustavo Cortez, Aníbal Leguizamón, Fernando León, Romario Caicedo',
        medio_campo: 'Cristhian Erbes, Roberto Garces, Marcelo Meli, Juan Ruiz, Jhon Sánchez',
        delantero: 'Facundo Castelli'
    },
    {
        id: 'e2',
        equipo: 'Independiente del Valle',
        arquero: 'Moisés Ramírez',
        defensa: 'Matías Fernández, Richard Schunke, Mateo Carbajal, Beder Caicedo',
        medio_campo: 'Cristian Zabala, Joao Ortiz, Junior Sornoza',
        delanteros: 'Kendry Páez, Michael Hoyos, Romario Ibarra'
    },
    {
        id: 'e3',
        equipo: 'Real Madrid',
        arquero: 'Andriy Lunin',
        defensa: 'Dani Carvajal, Antonio Rüdiger, Nacho, Ferland Mendy',
        medio_campo: 'Federico Valverde, Eduardo Camavinga, Toni Kroos, Jude Bellingham',
        delanteros: 'Vinícius, Rodrygo'
    }
];

app.get('/api/equipos', (req, res, next) => {
    const equipos = DUMMY_EQUIPOS;

    res.send(equipos);
});

app.listen(port);