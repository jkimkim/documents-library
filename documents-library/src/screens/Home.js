import AuthProvider from '../Context/AuthContext';
import LogedInNav from '../components/LogedInNav';
import MostPopularReads from '../components/MostPopularReads';

function LoggedIn() {
    return (
        <AuthProvider>
            <LogedInNav />
            <MostPopularReads />
        </AuthProvider>
    );
}

export default LoggedIn;