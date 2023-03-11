import './App.css';
import reportWebVitals from './reportWebVitals';
import { Link } from 'react-router-dom';
import LoggedOut from './screens/LoggedOut';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<LoggedOut />} />
        </Routes>
    </Router>
  );
}

export default App;
