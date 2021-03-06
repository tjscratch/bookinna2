import axios from 'axios'
import ApiUrls from '../constants/ApiUrls.jsx'
import { getHostName } from '../constants/LocationHost.jsx'


let getPeriods = function() {
    let offerUrl;
    let hostName = getHostName();
    hostName === 'http://test.inna.ru' ? offerUrl = `${hostName}${ApiUrls.GetOffers}`: offerUrl = `https://inna.ru${ApiUrls.GetOffers}`;
    return axios.get(offerUrl);
};

export { getPeriods }
