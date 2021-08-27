import './CollectionPreview.scss'
import CollectionItem from '../collection-item/CollectionItem'

interface CollectionsProps {
    title: string;
    routeName: string;
    items: {
        id: number;
        name: string;
        imageUrl: string;
        price: number;
    }[]
}

const CollectionPreview = ({ title, items }: CollectionsProps) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 4)
                        .map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
}

export default CollectionPreview;
