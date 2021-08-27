import { Route, withRouter, RouteComponentProps } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import CollectionPage from '../collection-page/CollectionPage'

const ShopPage = ({match}: RouteComponentProps) => {

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default withRouter(ShopPage);
