import './App.css';
import LoggedOut from './screens/LoggedOut';
import LoggedIn from './screens/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<LoggedOut />} />
        <Route path="/Home" element={<LoggedIn />} />
        </Routes>
    </Router>
  );
}

export default App;
