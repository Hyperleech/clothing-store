import React from 'react';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsPageContainer from '../collection/collection.container';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();

        /*const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        /*  PROMISE - FETCH REST API 
        fetch('https://firestore.googleapis.com/v1/projects/clothing-store-db-79d3e/databases/(default)/documents/collections')
        .then(response => response.json())
        .then(collections => console.log(collections)); */

        /*  PROMISE */
        /*collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        }); */
        
        /*   OBSERVABLE PATTERN
       this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        }); */
    }
    
    render(){
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);