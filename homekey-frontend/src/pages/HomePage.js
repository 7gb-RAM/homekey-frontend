import React from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

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

export default HomePage;