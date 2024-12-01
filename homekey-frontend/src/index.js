import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const clerkPubKey = "pk_test_ZnVubnktZ2liYm9uLTQ1LmNsZXJrLmFjY291bnRzLmRldiQ";
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
console.log("process: ", process.env.REACT_APP_CLERK_PUBLISHABLE_KEY)

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
