## Setup

```sh
$ make install
```

## Run tests

```sh
$ make test
```
# Usage
```sh
$ npm i -g geo-kruglov
$ geo-kruglov
> country: Russia, city: Kazan

$ geo-kruglov 24.48.0.1
> country: Canada, city: Québec
```

```
import GeoService from 'geo-kruglov';

const geoService = new GeoService();

geoService.getLocation(); // country: Russia, city: Kazan 
```