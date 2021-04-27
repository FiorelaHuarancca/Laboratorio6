const http = require('http')

const express = require('express')
const { Console } = require('console')
const app = express ()
app.use(express.json())

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    },
    {
        id: 5,
        name: "Fiorela Huarancca",
        number: "27-21-84235490"
    }

]


app.get('/info', (request, response) => {
    let fechaHora = new Date()
    let mensaje = `<p>Phonebook has info for ${persons.length} people</p>
                 <p>${fechaHora}</p>\``
    response.send(mensaje)
})


app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id == id)

    console.log(person)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }

})


app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})



app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons', (request, response) => {
    response.json(notes)
})

app.post('/api/persons', (request, response) => {

    const body = request.body
    let error ;
    console.log(body)

    if (!body.name) {
        error = "Falta el nombre"
    }

    if (!body.number) {
        error = "Falta el número"
    }

    if (!body.name && !body.number) {
        error = "No se encontro el nombre ni la agenda"
    }

    if (error) {
        return response.status(400).json({
            error: error
        })
    }

 
    const person = {
        id:getRandomInt(100,10000),
        name:request.body.name,
        number:request.body.number,
    }

    response.json(person)
})

function getRandomInt(minimo, maximo) {
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo) + minimo); 
}



const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)