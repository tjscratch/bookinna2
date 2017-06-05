import axios from 'axios'
import ApiUrls from '../constants/ApiUrls.jsx'
import { getHostName } from '../constants/LocationHost.jsx'

let getBanner = function() {
    let BannerUrl;
    let hostName = getHostName();
    hostName === 'http://test.inna.ru' ? BannerUrl = `${hostName}${ApiUrls.SectionGet}4`: BannerUrl = `https://inna.ru${ApiUrls.SectionGet}4`;
    return axios.get(BannerUrl);
};

export { getBanner }
