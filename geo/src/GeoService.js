import axios from 'axios';
import config from './config';

const defaultGetLocationData = async (ip = '') => {
  const { data: { country, city } } = await axios.get(`${config.api}${ip}`);
  return { country, city };
};

export default class GeoService {
  constructor(getLocationDataByIp = defaultGetLocationData) {
    this.getLocationDataByIp = getLocationDataByIp;
  }

  getLocation = async (ip = '') => {
    const { getLocationDataByIp } = this;
    const res = await getLocationDataByIp(ip);
    return res;
  }

  getHumanResult = async (ip) => {
    const data = await this.getLocation(ip);
    const prepareData = this.prepareData(data);
    return prepareData;
  }

  prepareData = (data) => {
    const { country, city } = data;
    return `country: ${country}, city: ${city}`;
  }
}
