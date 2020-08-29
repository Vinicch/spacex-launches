const { ApolloServer } = require('apollo-server-express')
const express = require('express')
// const path = require('path')
const schema = require('./schema')

const app = express()
const server = new ApolloServer({ schema })
server.applyMiddleware({ app })

// Production build configuration
// app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')))
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
// })

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server started on port ${port}`))
