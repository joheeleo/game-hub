import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7f90877fb39d4cfe865b581db58b4074'
    }
})
