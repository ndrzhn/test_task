const CHANGE_SCALE = 'CHANGE_SCALE';
const FETCH_DATA = 'FETCH_DATA';

export const changeScale = (scale) => ({
	 type: CHANGE_SCALE,
	 scale
});

export const fetchData = (payload) => ({
	type: FETCH_DATA,
	payload
});