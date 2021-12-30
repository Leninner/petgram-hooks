import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './routes/App';
import Context from './Context';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: 'https://petgram-server-leninner-leninner.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    sessionStorage.removeItem('token');
    window.location.href = '/';
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink).concat(errorLink),
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
