import '../App.css';
import AuthProvider from '../Context/AuthContext';
import '../index.css';
import TopNav from '../components/top-nav';
import Login from '../components/login';
import SignUp from '../components/SignUp';
import IntroSection from '../components/IntroSection.tsx';
import FeaturesCard from '../components/FeaturesCards.tsx';
import CategoriesCard from '../components/CategoriesCards.tsx';
import Bootcamps from '../components/Bootcamps.tsx';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LoggedOut() {
    const [showLogin, setShowLogin] = useState(true);

    const handleShowLogin = () => {
        setShowLogin(true);
    };

    const handleShowSignUp = () => {
        setShowLogin(false);
    };
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
            {/* Login and Signup Modals */}
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Log In</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {showLogin && <Login handleShowSignUp={handleShowSignUp} />}
                            {!showLogin && <SignUp handleShowLogin={handleShowLogin} />}
                        </div>
                    </div>
                </div>
            </div>
        </AuthProvider>
    );
}

export default LoggedOut;
