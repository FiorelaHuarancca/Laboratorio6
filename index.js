const http = require('http')

const express = require('express')
const { Console } = require('console')
const app = express ()

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


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)