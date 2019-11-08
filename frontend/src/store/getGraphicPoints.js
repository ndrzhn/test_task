import axios from 'axios';
import { fetchData } from '../store/actions/backEndMockActions.js';

export const getGraphicPoints = () => (dispatch, getState) => {
	const scale = getState().backEndMock.scale;
	axios.get(`http://localhost:8888/graphics?scale=${scale}`)
		.then(({ data }) => {
			const points = data.points;
			dispatch(fetchData(points));
		});
}