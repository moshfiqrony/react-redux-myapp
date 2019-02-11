import React from 'react'
import {bindActionCreators} from "redux";
import {connect} from 'react-redux'
import {selectUser} from "../actions";

class UsersList extends React.Component{

    UserDetailsList() {
        return (
            <div>
                <table className='table'>
                    <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map((user) => {
                        return(
                            <tr>
                                <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => this.props.selectUser(user)} className='btn btn-primary'>Details</button></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        return(
            <div className='container'>
                {this.UserDetailsList()}
            </div>
        )
    }

}


function mapStateToProps(state) {
    return{
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return(
        bindActionCreators({selectUser: selectUser}, dispatch)
    )
}

export default connect(mapStateToProps, matchDispatchToProps) (UsersList)