// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  SignIn,
  SignUp,
  UserButton,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from '@clerk/clerk-react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in/*" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up/*" element={<SignUp routing="path" path="/sign-up" />} />
        {/* Internal page, that is where the seller dashboard comes in */}
        <Route path="/internal" element={<InternalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// HomePage Component
const HomePage = () => (
  <div>
    <h1>Welcome to the App</h1>
    <SignedIn>
      {/* If the user is signed in, show a link to the internal page */}
      <p>
        You are signed in. Go to the <a href="/internal">Internal Page</a>.
      </p>
    </SignedIn>
    <SignedOut>
      {/* If the user is signed out, prompt to sign in or sign up */}
      <p>
        Please <a href="/sign-in">Sign In</a> or <a href="/sign-up">Sign Up</a> to continue.
      </p>
    </SignedOut>
  </div>
);

// InternalPage Component
const InternalPage = () => (
  <div>
    <SignedIn>
      {/* Content visible only to signed-in users */}
      <h1>Internal Page</h1>
      <UserButton />
      <p>This is a protected page accessible only after signing in.</p>
      {/* Add your internal content here */}
    </SignedIn>
    <SignedOut>
      {/* Redirect unauthenticated users to the sign-in page */}
      <RedirectToSignIn />
    </SignedOut>
  </div>
);