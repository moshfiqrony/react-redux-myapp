import {combineReducers} from 'redux'
import Users from './reducer-users'
import activeUser from '../reducers/reducer-active-user'

const allReducers = combineReducers({
    users: Users,
    activeUser: activeUser
})

export default allReducers