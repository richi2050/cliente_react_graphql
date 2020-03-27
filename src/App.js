import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost'

const cliente = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql",
  onError: ({networkError, graphQLErrors}) =>{
    console.log('graphQLErrors', graphQLErrors);
    console.log('networkError', networkError);
  }
});

function App() {
  return (
    <ApolloProvider client={cliente}>
      <h1>Holas</h1>
    </ApolloProvider>
  );
}

export default App;
