import { useState } from 'react'
import SHOP_DATA from '../../shop.data'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

type Collections = {
    id: number,
    title: string,
    routeName: string,
    items: {
        id: number,
        name: string,
        imageUrl: string,
        price: number
    }[]
}[]

const Shop = () => {
    const [collections, setCollections] = useState<Collections>(SHOP_DATA);

    return (
        <div className="shop-page">
            {
                collections.map(({id, ...collectionsProps}) => (
                    <CollectionPreview key={id} {...collectionsProps} />
                ))
            }
        </div>
    );
}

export default Shop;
