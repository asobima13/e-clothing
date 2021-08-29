type ItemType = {
    name: string;
    imageUrl: string;
    price: number;
    quantity: number
}

interface ToggleHidden {
    type: 'TOGGLE_HIDDEN'
}

interface AddItem {
    type: 'ADD_ITEM',
    payload: ItemType
}

interface RemoveItem {
    type: 'REMOVE_ITEM',
    payload: ItemType
}

interface ClearItemFromCart {
    type: 'CLEAR_ITEM_FROM_CART',
    payload: any
}

interface EmptyCart {
    type: 'EMPTY_CART',
    payload: any
}

export type CartAction =
    ToggleHidden |
    AddItem |
    RemoveItem |
    ClearItemFromCart |
    EmptyCart