import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    // ApolloLink,
    // concat,
    // HttpLink
} from '@apollo/client';
import './index.css'

// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000/graphql',
// });
// const authMiddleware = new ApolloLink((operation, forward) => {
//   const token = window.localStorage.getItem('token');
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   });
//   return forward(operation);
// });

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </ApolloProvider>,
)
