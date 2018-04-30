import {ADD_USER} from '../actions/add';
import {REM_USER} from  '../actions/remove';
import {VIEW_USER} from '../actions/viewdetails';

const initialAppData = [
    {username: 'Sarathy', location:'Boston', products_purchased:23},
            {username: 'Ramesh', location:'Ohio', products_purchased:10},
            {username: 'Jones', location:'California', products_purchased:3},
            {username: 'Martin', location:'LA', products_purchased:22},
            {username: 'Madhu', location:'Boston', products_purchased:11},
            {username: 'Sarah', location:'Burlington', products_purchased:7},
            {username: 'Samantha', location:'Georgia', products_purchased:20},
            {username: 'Santhosh', location:'Bangalore', products_purchased:6},
            {username: 'Taral', location:'Hyderabad', products_purchased:2},
            {username: 'Marshall', location:'Bolivia', products_purchased:25},
            {username: 'Mary', location:'Kansas', products_purchased:1},
            {username: 'Butler', location:'Tennesse', products_purchased:3},
            {username: 'Manoj', location:'Mangalore', products_purchased:10},
            {username: 'Gabriel', location:'Virginia', products_purchased:12},
            {username: 'Sunny', location:'Atlanta', products_purchased:29}
];

function userReducer(state=initialAppData, action){
    
    switch(action.type){

    case ADD_USER: 
        return [...state, action.user_obj];
        

    case REM_USER:
        for(var user in state){
            if(state[user].username === action.user.username){
                state.splice(user,1);
                //console.log("True");
                break;
            }else{
                console.log("Error finding the user!");
            }
        }
        return [...state];
        

    case VIEW_USER: 
    var cur;
    console.log(state[action.user_id]);
    state.filter(()=>{
    return state[action.user_id];
    });
    break;
    

    default: return state;
    }
}

export default userReducer;