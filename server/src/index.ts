import { ApolloServer } from 'apollo-server-express'
import express, { Application } from 'express'
// import path from 'path'
import schema from './schema'

const app: Application = express()
const server: ApolloServer = new ApolloServer({ schema })
server.applyMiddleware({ app })

// Production build configuration
// app.use(express.static(path.resolve(__dirname, '..', '..', 'client', 'build')))
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html'))
// })

const port: string | number = process.env.PORT || 4000
app.listen(port, () => console.log(`Server started on port ${port}`))
