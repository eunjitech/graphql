import graphqlYoga from "graphql-yoga";

const server = new graphqlYoga({});

server.start(() => console.log("graph server running"));
