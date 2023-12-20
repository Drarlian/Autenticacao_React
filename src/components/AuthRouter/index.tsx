import { useContext } from "react";
import Signin from "../../pages/Signin";
import { AuthContext } from "../../contexts/Auth";

const AuthRouter = ( { children } : { children: JSX.Element }) => {

    const { user } = useContext(AuthContext);
    
    if (!user) {
        return <Signin/>
    }

  return children;
}

export default AuthRouter;