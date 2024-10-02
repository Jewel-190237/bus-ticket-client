import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AuthButton = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Check if user is authenticated by verifying token in local storage
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // Set to true if token exists, false otherwise
    }, []);

    const handleSignOut = () => {
        // Remove token from local storage to sign out
        localStorage.removeItem('token');
        
        Swal.fire({
            icon: 'success',
            title: 'Signed out successfully',
            showConfirmButton: false,
            timer: 2000
        });

        // Redirect to login page
        navigate('/login');

        // Update the state to reflect sign out
        setIsAuthenticated(false);
    };

    const handleLoginRedirect = () => {
        // Redirect to the login page
        navigate('/login');
    };

    return (
        <>
            {isAuthenticated ? (
                <button onClick={handleSignOut} className="button px-10">
                    Sign Out
                </button>
            ) : (
                <button onClick={handleLoginRedirect} className="button px-10">
                    Login
                </button>
            )}
        </>
    );
};

export default AuthButton;
