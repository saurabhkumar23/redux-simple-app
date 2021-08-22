import {createStore} from 'redux'

let intialState = {
    balls : 5
}

function ballReducer(state = intialState,action){
    switch(action.type){
        case "inc_ball" : return{
            balls : state.balls+1
        }
        case "dec_ball" : return{
            balls : state.balls-1
        }
        default: return state
    }
}

const store = createStore(ballReducer)

export default store