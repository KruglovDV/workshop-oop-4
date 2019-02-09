import axios from 'axios';

export default class GeoService {
  constructor(config) {
    this.config = config;
  }

  getLocation = async (ip = '') => {
    const { config: { api } } = this;
    const { data: { country, city } } = await axios.get(`${api}${ip}`);
    const res = `country: ${country}, city: ${city}`;
    return res;
  }
}
