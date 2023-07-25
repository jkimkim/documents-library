import React from 'react';
import './App.css';
import LoggedOut from './screens/LoggedOut';
import LoggedIn from './screens/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthContext'; // Import AuthProvider
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrap the entire app with AuthProvider */}
        <Routes>
          <Route exact path="/" element={<LoggedOut />} />
          {/* Use RequireAuth for protected route */}
          <Route path="/Home" element={
            <RequireAuth redirectTo="/">
              <LoggedIn />
            </RequireAuth>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
