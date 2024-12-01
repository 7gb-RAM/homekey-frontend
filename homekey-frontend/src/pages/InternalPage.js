import React from 'react';
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  UserButton,
} from '@clerk/clerk-react';

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

export default InternalPage;