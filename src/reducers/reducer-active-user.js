export default function (state=null, action) {
    switch (action.type) {
        case 'user_clicked':
            return action.payload
            break;
    }
    return state;

}