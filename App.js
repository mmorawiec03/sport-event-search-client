import React from 'react';
import AuthNavigator from './routes/AuthNavigator';
import AuthContextProvider from './contexts/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <AuthNavigator />
    </AuthContextProvider>
  );
}
