import api from './api';
 
const AlbumsService = {
  index: () => api.get('/dashboard'),
  show: (id) => api.get(`/albums/${id}`)
}
 
export default AlbumsService;