import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { BrowserRouter, Route } from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'
import logo from './logo.png'

const client = new ApolloClient({
  uri: 'http://localhost:4000/query',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="container">
          <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
