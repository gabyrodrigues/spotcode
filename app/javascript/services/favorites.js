import api from './api';

const FavoritesService = {
	index: () => api.get('/favorites'),
	create: (kind, id) => api.post(`/${kind}/${id}/favorite`),
	delete: (kind, id) => api.delete(`/${kind}/${id}/favorite`)
}

export default FavoritesService;