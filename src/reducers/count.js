import { INCRE, DECRE } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action) => {
    switch (action.type) {
        case INCRE:
            return { value: state.value +1 }
        case DECRE:
            return { value: state.value -1 }
        default state
    }

}