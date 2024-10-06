import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RequiredAuthProvider, RedirectToLogin } from "@propelauth/react";
import reportWebVitals from './reportWebVitals';
// Fetch the auth URL from the .env file
const authUrl = process.env.REACT_APP_AUTH_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RequiredAuthProvider
  authUrl={authUrl}  // Propel Auth URL
  displayWhileLoading={<div>Loading...</div>}  // Show this while auth info is loading
  displayIfLoggedOut={<RedirectToLogin />}  // Redirect to login if user is logged out
>
  <App />  {/* The main application */}
</RequiredAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
