import api from './api';
 
const AlbumsService = {
  index: () => api.get('/dashboard')
}
 
export default AlbumsService;