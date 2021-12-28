import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Context from './Context';

const client = new ApolloClient({
  uri: 'https://petgram-server-leninner-leninner.vercel.app/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('root')
);
