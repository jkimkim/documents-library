import React, { useState, useEffect } from 'react';
import './App.css';
import LoggedOut from './screens/LoggedOut';
import LoggedIn from './screens/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase'; // Assuming you have initialized your firebase app in firebase.js
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Listen for changes in authentication state
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in
        setIsLoggedIn(true);
      } else {
        // User is not logged in
        setIsLoggedIn(false);
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoggedOut />} />
        {/* Use PrivateRoute for protected route */}
        <Route path="/Home" element={<PrivateRoute element={<LoggedIn />} />} />
      </Routes>
    </Router>
  );
}

export default App;
