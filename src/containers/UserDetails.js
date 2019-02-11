import React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {selectUser} from "../actions";




class UserDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            PopUpStyle: {display: 'block'}
        }
        this.onHandleChange = this.onHandleChange.bind(this)
    }


    showDetails() {
        return(
            <div style={this.state.PopUpStyle} className="modal">
                <div className="modal-content animate">

                    <div className="container">
                        <h1>{this.props.user.name}' Details Information</h1>
                        <label>Name: {this.props.user.name}</label><br/>
                        <label>Email: {this.props.user.email}</label><br/>
                        <label>Address: {this.props.user.address}</label><br/>
                    </div>

                    <div className="container">
                        <button type="button" onClick={this.onHandleChange} className="cancelbtn">Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }


    onHandleChange(){
        this.props.selectUser(null)
    }

    render() {
        if(!this.props.user){
            return(null)
        }else {
            return(
                <div>{this.showDetails()}</div>
            )
        }
    }

}


function mapStateToProps(state){
    return({
        user: state.activeUser
    })
}

function matchDispatchToProps(dispatch) {
    return(
        bindActionCreators({selectUser: selectUser}, dispatch)
    )
}

export default connect(mapStateToProps, matchDispatchToProps) (UserDetails);