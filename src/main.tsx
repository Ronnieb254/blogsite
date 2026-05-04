// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import React from 'react';
// import ReactDOM from "react-dom/client";
// import './index.css';
// import { ApolloProvider } from "@apollo/client";
// import { client } from "./lib/apollo";
// import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ApolloProvider client={client}>
//       <App />
//     </ApolloProvider>
//   </React.StrictMode>
// );

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloProvider } from "@apollo/client/react"
import './index.css'
import App from './App.tsx'
import { client } from './lib/apollo.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)