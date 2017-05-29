import axios from 'axios'

let getLocation = function() {
    let Url = 'http://ip-api.com/json?lang=ru';
        return axios.get(Url)
};

export {getLocation}