import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import store from "./store/store";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const stripePromise = loadStripe(
  "pk_test_51LDh0aGXmJXrbdiSVFeSSuJU4YvaHo86pfe3CX5LgvotoLr7WpL54NdaO5Rp3ArcvS11KD6TSB6MdP4RhzvBbn3D00tvf0aKLM"
);
const client = new ApolloClient({
  uri: "http://localhost:8181",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
