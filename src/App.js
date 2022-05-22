import React from "react";
import { Routes, Route } from "react-router-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/spacex_launches" exact element={<Home />}></Route>
        </Routes>
      </ApolloProvider>
    </div>
  );
}

export default App;
