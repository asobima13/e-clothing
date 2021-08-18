import './CollectionItem.scss'

interface CollectionPreviewProps {
    name: string;
    imageUrl: string;
    price: number;
}

const CollectionItem = ({ name, imageUrl, price}: CollectionPreviewProps) => {
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    );
}

export default CollectionItem;
