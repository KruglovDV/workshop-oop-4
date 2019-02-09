import app from 'commander';
import GeoService from './GeoService';

const geoService = new GeoService();

export default () => (
  app
    .version('0.0.1')
    .arguments('[ip]')
    .description('Shows location')
    .action(async (ip) => {
      const location = await geoService.getHumanResult(ip);
      console.log(location);
    }));
