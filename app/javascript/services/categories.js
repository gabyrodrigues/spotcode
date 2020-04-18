import api from './api';

const CategoriesService = {
	show: (id) => api.get(`/categories/${id}`),
	index: () => api.get('/categories')
}

export default CategoriesService;