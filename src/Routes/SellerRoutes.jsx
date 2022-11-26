import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { ThreeDots } from  'react-loader-spinner'
import useRole from '../pages/Hooks/useRole';
const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [dbUser, rolesLoading] = useRole(user.email) 

    const location = useLocation()
    if (loading || rolesLoading) {
        return <div className='h-[500px] w-[100%] grid place-items-center'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    }
    if (user && user.uid && dbUser.role === 'Seller') {
        return children
    }
    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
};

export default SellerRoutes;