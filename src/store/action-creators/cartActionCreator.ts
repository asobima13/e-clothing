import { Dispatch } from "redux";

type ItemType = {
    id: number;
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

export const addItem = (item: ItemType) => {
    return (dispatch: Dispatch) => {

        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })

    }
}

export const removeItem = (item: ItemType) => {
    return (dispatch: Dispatch) => {

        dispatch({
            type: 'REMOVE_ITEM',
            payload: item
        })

    }
}

export const clearItemFromCart = (item: ItemType) => {
    return (dispatch: Dispatch) => {

        dispatch({
            type: 'CLEAR_ITEM_FROM_CART',
            payload: item
        })

    }
}