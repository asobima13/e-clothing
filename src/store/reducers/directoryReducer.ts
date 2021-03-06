type InitialState = {
    sections: {
        title: string,
        imageUrl: string,
        id: number,
        linkUrl: string
    }[]
}

const initialState = {
    sections: [
        {
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
            },
            {
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
            },
            {
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'shop/sneakers'
            },
            {
            title: 'Men',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/men'
            },
            {
            title: 'Women',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/women'
        }
    ]
}

const reducer = (state: InitialState = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;