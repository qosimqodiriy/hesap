export default {
    async Request_API(axios, phone) {
        try {
            axios.defaults.baseURL = 'https://api.hesap.uz/api/v1/';
            const response = await axios.post('web/delete/request', {
                phone,
            })

            axios.defaults.baseURL = 'https://2clicks.pythonanywhere.com/api';

            return response
        } catch (error) {
            return error.response
        }
    },

    async Prepare_API(axios, formdata) {
        try {
            axios.defaults.baseURL = 'https://api.hesap.uz/api/v1/';
            axios.defaults.headers.common = {'Authorization': `Bearer ${formdata.token}`}

            const response = await axios.post('web/delete/prepare', {
                // id: formdata.id,
                // phone: formdata.phone,
                confirm: formdata.confirm,
            })

            axios.defaults.baseURL = 'https://2clicks.pythonanywhere.com/api';

            return response
        } catch (error) {
            return error.response
        }
    },

    async Confirm_API(axios, formData) {
        try {
            axios.defaults.baseURL = 'https://api.hesap.uz/api/v1/';
            axios.defaults.headers.common = {'Authorization': `Bearer ${formData.token}`}

            const response = await axios.post('web/delete/confirm', {
                commit: formData.commit
            })
            axios.defaults.baseURL = 'https://2clicks.pythonanywhere.com/api';

            return response
        } catch (error) {
            return error.response
        }
    },

    async Reject_API(axios, token) {
        try {
            axios.defaults.baseURL = 'https://api.hesap.uz/api/v1/';
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

            const response = await axios.post('web/delete/reject')
            axios.defaults.baseURL = 'https://2clicks.pythonanywhere.com/api';

            return response
        } catch (error) {
            return error.response
        }
    },
}
