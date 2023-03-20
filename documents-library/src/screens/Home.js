import AuthProvider from '../Context/AuthContext';
import LogedInNav from '../components/LogedInNav';
import MostPopularReads from '../components/MostPopularReads';
import {
    Container,
} from 'react-bootstrap'

function LoggedIn() {
    return (
        <AuthProvider>
            <div className="d-flex flex-row " style={{ minHeight: "100vh" }}>
                <LogedInNav />
                {/* body */}
                <Container className="d-flex flex-column">
                    <MostPopularReads />
                </Container>
            </div>
        </AuthProvider>
    );
}

export default LoggedIn;