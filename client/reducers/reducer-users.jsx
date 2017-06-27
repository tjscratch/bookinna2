import axios from 'axios'
import ApiUrls from '../components/constants/ApiUrls.jsx'
import { getHostName } from '../components/constants/LocationHost.jsx'

export default function () {
    let BannerUrl;
    let hostName = getHostName();
    hostName === 'http://test.inna.ru' ? BannerUrl = `${hostName}${ApiUrls.SectionGet}4`: BannerUrl = `https://inna.ru${ApiUrls.SectionGet}4`;
    return axios.get(BannerUrl)
};