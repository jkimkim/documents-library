import './App.css';
import AuthProvider from './Context/AuthContext';
import './index.css';
import TopNav from './components/top-nav';
import LogedInNav from './components/LogedInNav';
import Login from './components/login';
import SignUp from './components/SignUp';
import IntroSection from './components/IntroSection.tsx';
import FeaturesCard from './components/FeaturesCards.tsx';
import CategoriesCard from './components/CategoriesCards.tsx';
import Bootcamps from './components/Bootcamps.tsx';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';
import { Link } from 'react-router-dom';
function App() {
  return (
    <AuthProvider>
      <TopNav />
      <Login />
      <SignUp />
      <IntroSection />
      <FeaturesCard />
      <CategoriesCard />
      <Bootcamps />
      <Footer />
    </AuthProvider>
  );
}

export default App;
