import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
console.log("process: ", process.env.REACT_APP_CLERK_PUBLISHABLE_KEY)

root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkPubKey}>
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
reportWebVitals();
