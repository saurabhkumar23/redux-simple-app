import React from 'react'
import {connect} from 'react-redux'

function Balls(props) {
    return (
        <div>
            <h1>we have {props.balls} balls</h1>
            <button onClick={props.incballs}>increment</button>
            <button onClick={props.decballs}>decrement</button>
        </div>
    )
}

const mapStateToProps = (store) => {
    return store
}

const mapDispatchToProps = (dispatch) => {
    return {
        incballs: () => {
            dispatch({type:"inc_ball"})
        },
        decballs: () => {
            dispatch({type:"dec_ball"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Balls)

