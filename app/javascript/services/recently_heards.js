import api from './api';

const RecentlyHeardsService = {
    create: (id) => api.post(`/albums/${id}/recently_heards`)
}

export default RecentlyHeardsService;