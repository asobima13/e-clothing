import { Dispatch } from "redux";

export const toggleHidden = () => {
    return (dispatch: Dispatch) => {

        dispatch({
            type: 'TOGGLE_HIDDEN'
        })

    }
}