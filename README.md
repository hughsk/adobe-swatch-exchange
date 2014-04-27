# adobe-swatch-exchange [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Encode/decode color palettes in Adobe's `.ase` format.

## Usage ##

[![adobe-swatch-exchange](https://nodei.co/npm/adobe-swatch-exchange.png?mini=true)](https://nodei.co/npm/adobe-swatch-exchange)

### ase.decode(buffer) ###

Returns a JSON object representing the contents of the `.ase` file, for example:

``` json
{
  "version": "1.0",
  "groups": [],
  "colors": [{
    "name": "RGB Red",
    "model": "RGB",
    "color": [1, 0, 0],
    "type": "global"
  }, {
    "name": "RGB Yellow",
    "model": "RGB",
    "color": [1, 1, 0],
    "type": "global"
  }]
}
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/adobe-swatch-exchange/blob/master/LICENSE.md) for details.
