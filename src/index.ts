import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send("Hellooo world")
})

app.listen(3333)