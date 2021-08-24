import './CollectionItem.scss'
import CustomButton from '../custom-button/CustomButton'
import { useActions } from '../../store/hooks'

interface CollectionPreviewProps {
    item: {
        name: string;
        imageUrl: string;
        price: number;
    }
}

const CollectionItem = ({ item }: CollectionPreviewProps) => {

    const { addItem } = useActions();

    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${item.imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <CustomButton
                inverted
                type="button"
                onClick={() => addItem(item)}
            >
                Add to cart
            </CustomButton>
        </div>
    );
}

export default CollectionItem;
