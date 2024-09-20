// import { useContext } from "react"
// import { AuthProvider } from "./Context/auth"
// // import { Route, Navigate } from 'react-router-dom'

// export const PrivateRoute = ({ component: Component, ...rest}) => {
//     const { Authenticated } = useContext(AuthProvider)

//     return (
//         <Route
//         {...rest}
//         render={(props) =>
//             Authenticated ? (<Component {...props} />
//             ) : (
//                 <Navigate to="/login" />
//             )
//         }
//         />
//     );
// };

// export default PrivateRoute;