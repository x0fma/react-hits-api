import { FETCH_HITS, SEARCH_HITS, UPDATE_ORDER } from './action-types';
import offerJson from '../../public/offers.json'

export const fetchHits = () => {
	return {
		type: FETCH_HITS,
		data: offerJson['results'][0].hits
	};
};

export const searchHits = (value) => {
	return {
		type: SEARCH_HITS,
		data: value
	};
};

export const updateOrder = (order) => {
	return {
		type: UPDATE_ORDER,
		data: order
	};
};