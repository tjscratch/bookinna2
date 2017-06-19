import axios from 'axios'
import ApiUrls from '../constants/ApiUrls.jsx'
import { getHostName } from '../constants/LocationHost.jsx'


let getSpo = function() {
    let offerUrl;
    let hostName = getHostName();
    hostName === 'http://test.inna.ru' ? offerUrl = `${hostName}${ApiUrls.GetOffers}`: offerUrl = `https://inna.ru${ApiUrls.GetOffers}`;
    return axios.get(offerUrl);
};
let getBestOffers = function (CategoryId) {
  return axios.get(`https://inna.ru/api/v1/BestOffer/GetOffers?Category=${CategoryId}&Location=6733&Month=-1&Period=1`);
}
export { getSpo , getBestOffers}
