type AddItemType = {
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
    payload: AddItemType
}

export type CartAction =
    ToggleHidden |
    AddItem