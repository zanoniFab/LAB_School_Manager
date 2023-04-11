
function PrivateRoute(props) {
    let {component: Component, children, render, ...rest} = props;
    let isAuthenticated = useAuthenticationContext();
    
    return (
        <Route {...rest} render={()=>isAuthenticated ? <Component /> : <Redirect to="/403" replace={true}/>} />
    )
}

export default PrivateRoute;
