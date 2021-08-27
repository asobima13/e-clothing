import './CollectionsOverview.scss'
import CollectionPreview from '../collection-preview/CollectionPreview'
import { useTypedSelector } from '../../store/hooks'

const CollectionsOverview = () => {

    const { collections } = useTypedSelector(state => state.shop)

    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...collectionsProps}) => (
                    <CollectionPreview key={id} {...collectionsProps} />
                ))
            }
        </div>
    )
}

export default CollectionsOverview
