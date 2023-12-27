import axios from 'axios';

export async function fetchStatistic() {
    try {
        const response = await axios.get('http://localhost:1337/api/values');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
