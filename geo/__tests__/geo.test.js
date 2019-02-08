import GeoService from '../src';
import config from '../src/config';

const geoService = new GeoService(config);

test('geoService local', async () => {
  const result = await geoService.getLocation();
  expect(result).toBe('country: Russia, city: Kazan’');
});

test('get location from ip', async () => {
  const result = await geoService.getLocation('24.48.0.1');
  expect(result).toBe('country: Canada, city: Québec');
});
