import express from 'express'
import { notes } from '../utils/mockup/'
import MongoLib from '../lib/mongo'

const mongo = new MongoLib()

const router = express.Router()

router.get('/', async(_, response, next) => {
  await mongo.create('notas', {
    nota: 'Hola'
  })
    response.send('<h1>Hello World!</h1>')
  })
  
router.get('/info', (_, response) => {
    const fechaHora = new Date()
    const mensaje = `<p>Phonebook has info for ${persons.length} people</p>
                   <p>${fechaHora}</p>\``
    response.send(mensaje)
  })
  
router.get('/api/persons/:id', (_, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id == id)
  
    console.log(person)
  
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  
router.delete('/api/persons/:id', (_, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })
  
router.get('/api/persons', (_, response) => {
    response.json(persons)
  })
  
router.get('/api/notes', (_, response) => {
    response.json(notes)
  })
  
router.post('/api/persons', (_, response) => {
    const body = request.body
    let error
    console.log(body)
  
    if (!body.name) {
      error = 'Falta el nombre'
    }
  
    if (!body.number) {
      error = 'Falta el número'
    }
  
    if (!body.name && !body.number) {
      error = 'No se encontro el nombre ni la agenda'
    }
  
    if (error) {
      return response.status(400).json({
        error: error
      })
    }
  
    const person = {
      id: getRandomInt(100, 10000),
      name: request.body.name,
      number: request.body.number
    }
  
    response.json(person)
  })

router.post('/api/notes', (_, response) => {
      console.log(request.body);
      const { descripcion: content } = request.body;
      const ids = notes.map(e => e.id);
      const nuevaNota = {
          id: Math.max(...ids) + 1,
          content: content,
          important: false,
          date: new Date().toISOString()
      };
      notes, push(nuevaNota);
      response.status(201).json(nuevaNota);
  })

  export default router

  