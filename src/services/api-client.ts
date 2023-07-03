import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: 'a8535b31b5834eb9998504a8bd0d7f25'
    }

})