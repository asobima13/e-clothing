import './CollectionItem.scss'
import CustomButton from '../custom-button/CustomButton'
import { useActions } from '../../store/hooks'
import { priceWithCommas } from '../../global.utils';

interface CollectionPreviewProps {
    item: {
        id: number;
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
                <span className="price">IDR {priceWithCommas(item.price)}K</span>
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
