import axiosInstance from './axios';

const fetchItems = async () => {
    try {
        const response = await axiosInstance.get('/items');
        return response.data;
    }catch (error){
        throw error;
    }
};

export default fetchItems;