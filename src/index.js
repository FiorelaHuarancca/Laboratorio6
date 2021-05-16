/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import express from 'express'
import apiAgenda from './routes/agenda'

// const express = require('express')

const app = express()
app.use(express.json())
app.use('/agenda/notes',apiAgenda)

app.use((req, res, next) => {
  res.status(404).send('<h1 style="color:red;">Error 404')
})


const PORT = process.env.PORT || 3000

app.listen(PORT)
console.log(`Server running on port ${PORT}`)