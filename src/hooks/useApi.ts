import axios from "axios";


const urlWithoutToken = axios.create({
    baseURL: 'https://api-gateway.bagaggio.com.br',
});


const access_token = localStorage.getItem("access-token-api-bagaggio");

const urlWithToken = axios.create({
    baseURL: 'https://api-gateway.bagaggio.com.br',
    headers: {
        Authorization: `Bearer ${access_token && JSON.parse(`${access_token}`)}`
    }
});

const useApi = () => ({
    signin: async (login: string, password: string) => {
        try {
            const { data } = await urlWithoutToken.post('/auth/store/sign-in', {
                login, password
            })
            return data;
        } catch (error: any) {
            return alert(error.response.data.message)
        }
    },
    findAllUsers: async () => {
        try {
            const { data } = await urlWithToken.get('/store-user')
            return data;
        } catch (error: any) {
            return alert(error.response.data.message)
        }
    },

});

export default useApi;