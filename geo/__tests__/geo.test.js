import GeoService from '../src';

const mocGetData = (ip) => {
  const responses = {
    '24.48.0.1': { country: 'Canada', city: 'Québec' },
    '24.48.0.2': { country: 'testCountry', city: 'testCity' },
  };
  return responses[ip] || { country: 'Russia', city: 'Kazan’' };
};

const geoService = new GeoService(mocGetData);

test('geoService local', async () => {
  const result = await geoService.getHumanResult();
  expect(result).toBe('country: Russia, city: Kazan’');
});

test('get location from ip', async () => {
  const result = await geoService.getHumanResult('24.48.0.1');
  expect(result).toBe('country: Canada, city: Québec');
});

test('geoService local row data', async () => {
  const result = await geoService.getLocation();
  expect(result).toEqual({ country: 'Russia', city: 'Kazan’' });
});

test('get location from ip row data', async () => {
  const result = await geoService.getLocation('24.48.0.1');
  expect(result).toEqual({ country: 'Canada', city: 'Québec' });
});
