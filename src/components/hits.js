import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import Hit from './hit';
import { fetchHits } from '../actions/hits';

class Hits extends Component {

    constructor() {
        super();
        this.sortByPrice = this.sortByPrice.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(fetchHits());
    }

    sortByPrice(hits) {
        let ordHits = hits.sortBy((hit) => hit.get('price_with_vat'));
        return this.props.hits.get('priceOrder') === 'asc' ? ordHits : ordHits.reverse();
    }

    render() {
        if (!this.props.hits.getIn(['hits', 'all']).size) {
            return null;
        }

        if (this.props.hits.get('search') && !this.props.hits.getIn(['hits', 'searched']).size) {
            return <div>No results</div>;
        }

        const hits = this.props.hits.get('search') ? this.props.hits.getIn(['hits', 'searched']) : this.props.hits.getIn(['hits', 'all']);

        const hitsBlocks = this.sortByPrice(hits).map((hit) => <Hit key={hit.get('id')} hit={hit}/>).toArray();

        return (
            <Col xs={12}>
                {hitsBlocks}
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        hits: state.hits
    };
};

export default connect(mapStateToProps)(Hits);