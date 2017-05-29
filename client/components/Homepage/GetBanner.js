import axios from 'axios'
import ApiUrls from '../constants/ApiUrls'
import { getHostName } from '../constants/LocationHost'

let getBanner = function() {
    let BannerUrl;
    let hostName = getHostName();
    hostName === 'http://test.inna.ru' ? BannerUrl = `${hostName}${ApiUrls.SectionGet}4`: BannerUrl = `https://inna.ru${ApiUrls.SectionGet}4`;
    return axios.get(BannerUrl);
};

export { getBanner }
