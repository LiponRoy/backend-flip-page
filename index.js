import express from 'express';
import dotEnv from 'dotenv';
const app = express()
dotEnv.config();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})