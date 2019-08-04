import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()
app.disable('x-powered-by')

// middleware: order is very important
// able to communicate server to server
app.use(cors())
// transform data in json
app.use(json())
//  we can use ? !
app.use(urlencoded({ extended: true }))
// does the logs.
app.use(morgan('dev'))

// route definition matters. Top to bottom.

app.get('/data', (req, res) => {
  res.send({ message: 'Hello' })
})

app.post('/data', (req, res) => {
  // req.body get the json format using the use(json())
  res.send(req.body)
})

// example in how to use route to simplify code.
// router
//   .route('/cat')
//   .get()
//   .post()

// router
//   .route('/cat/:id')
//   .get()
//   .put()
//   .put()

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
