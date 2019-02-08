import app from 'commander';
import GeoService from './geo';
import config from './config';

const geoService = new GeoService(config);

export default () => (
  app
    .version('0.0.1')
    .arguments('[ip]')
    .description('Shows location')
    .action(async (ip) => {
      const location = await geoService.getLocation(ip);
      console.log(location);
    }));
