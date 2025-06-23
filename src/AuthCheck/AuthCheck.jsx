import { Navigate, useLocation } from "react-router";


const AuthCheck = ({children}) => {

    const isAuthenticate = true;
    
    const location = useLocation();

    if(!isAuthenticate) {
        return <Navigate to='/auth/login' state={
            {
                from: location
            }
        } />
    }

    return children;

};

export default AuthCheck;
