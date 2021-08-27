import './CollectionPage.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'
import { useTypedSelector } from '../../store/hooks'

type Match = {
    match: {
        params: {
            collectionId: string
        }
    }
}

const CollectionPage = ({match}: Match) => {

    const { collections } = useTypedSelector(state => state.shop);
    const [ collection ] = collections.filter(collection => collection.routeName === match.params.collectionId);
    const { items, title } = collection;

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default CollectionPage;
