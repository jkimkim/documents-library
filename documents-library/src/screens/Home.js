import { useState } from 'react';
import AuthProvider from '../Context/AuthContext';
import LogedInNav from '../components/LogedInNav';
import MostPopularReads from '../components/MostPopularReads';
import Home from '../components/pages/Home';
import Profile from '../components/pages/Profile';
import Settings from '../components/pages/Settings';
import Users from '../components/pages/Users';
import Documents from '../components/pages/Documents';

import {
    Container,
} from 'react-bootstrap'

function LoggedIn() {
    const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "documents":
        return <Documents />;
      case "users":
        return <Users />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
};
    return (
        <AuthProvider>
      <div className="d-flex flex-row " style={{ minHeight: "100vh" }}>
        <LogedInNav setActivePage={setActivePage} />
        {/* body */}
        <Container className="d-flex flex-column">{renderPage()}</Container>
      </div>
    </AuthProvider>
    );
}

export default LoggedIn;