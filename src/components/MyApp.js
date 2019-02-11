import React from 'react';
import UsersList from '../containers/UsersList'
import UserDetails from '../containers/UserDetails'

class MyApp extends React.Component{
    render() {
        return (
            <div>
               <hr/> <UsersList/><hr/>
               <hr/> <UserDetails/> <hr/>
            </div>
        );
    }
};

export default MyApp;