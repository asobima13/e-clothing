import { Dispatch } from "redux";

type AddItemType = {
    name: string;
    imageUrl: string;
    price: number;
    quantity?: number;
}

export const toggleHidden = () => {
    return (dispatch: Dispatch) => {

        dispatch({
            type: 'TOGGLE_HIDDEN'
        })

    }
}

export const addItem = (item: AddItemType) => {
    return (dispatch: Dispatch) => {

        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })

    }
}