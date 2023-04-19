import { 
    ApolloClient,
    InMemoryCache, 
    HttpLink,
    from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(( { graphqlErrors, networkError } ) => {
    if(graphqlErrors) {
        graphqlErrors.map(( { message, path, location } ) => {
            console.log(`error: ${message}`);
        })
    }
});

const link = from([
    errorLink,
    // new HttpLink({ uri: 'https://app.sudharsands.repl.co/graphql' }),
    new HttpLink({ uri: 'http://localhost:3000/graphql' }),
]);

const authLink = setContext((_, { headers }) => {
    const auth = localStorage.getItem('auth');
    console.log(auth)
    return {
        headers: {
            ...headers,
            authorization: auth ? auth : '',
        }
    }
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
})

export default client;