/*eslint-disable*/
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: "http://localhost:3001/graphql",
});

/*
const authLink = setContext((_, { header }) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem(token) || "",
        },
    };
}); */

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export default client;