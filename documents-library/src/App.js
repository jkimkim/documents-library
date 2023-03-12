import './App.css';
import LoggedOut from './screens/LoggedOut';
import LoggedIn from './screens/Home';
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
