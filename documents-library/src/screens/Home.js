import AuthProvider from '../Context/AuthContext';
import LogedInNav from '../components/LogedInNav';

function LoggedIn() {
    return (
        <AuthProvider>
            <LogedInNav />
        </AuthProvider>
    );
}

export default LoggedIn;