import Immutable from 'immutable';
import { FETCH_HITS, SEARCH_HITS, UPDATE_ORDER } from '../actions/action-types';

const defaultState = Immutable.Map({
	hits: Immutable.fromJS({
		all: Immutable.Map({}),
		searched: Immutable.Map({})
	}),
	search: null,
	priceOrder: 'asc'
});

const searchFn = (hit, value) => hit.get('product').get('name') && hit.get('product').get('name').toLowerCase().indexOf(value.toLowerCase()) >= 0;

export default (state = defaultState, action) => {
	switch (action.type) {
		case FETCH_HITS:
			return state.setIn(['hits', 'all'], Immutable.fromJS(action.data));

		case SEARCH_HITS:
			return state.set('search', action.data).setIn(['hits', 'searched'], state.getIn(['hits', 'all']).filter((hit) => searchFn(hit, action.data)));

		case UPDATE_ORDER:
			return state.set('priceOrder', action.data);

		default:
			return state;
	}
};
