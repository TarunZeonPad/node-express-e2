import express from 'express'

const app = express()

app.listen(5001, () => console.log('listening to port 5001'))

app.get('/', (req, res) => res.json('test api'))