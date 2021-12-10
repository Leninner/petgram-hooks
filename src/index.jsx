import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://petgram-server-leninner-leninner.vercel.app/graphql',
	cache: new InMemoryCache(),
});
ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
