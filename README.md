# phonato-api
Flexible API that works with NATO phonetic alphabet

## Quick setup
```typescript
/* To start server
By default exposes endpoint http://localhost:3000/phonato
Endpoint and port can be changed in config.json
*/
npm install
npm start
```

## How to use
To **GET** full NATO alphabet:
http://localhost:3000/phonato

To **GET** NATO spelling for a single letter:
http://localhost:3000/phonato/a
```
{"A":"Alfa"}
```
http://localhost:3000/phonato/z
```
{"Z":"Zulu"}
```

To **GET** NATO spelling for one random letter:
http://localhost:3000/phonato/random
or
http://localhost:3000/phonato/random/1
```
{"J":"Juliett"}
```

To **GET** NATO spelling for any number of letters
http://localhost:3000/phonato/random/3
```
{"Q":"Quebec","S":"Sierra","X":"X-ray"}
```

To NATO spell your string, **POST** JSON `{ "input": "I am Artem" }` to http://localhost:3000/phonato
```
   [{ I: 'India' },
    { ' ': '' },
    { A: 'Alfa' },
    { M: 'Mike' },
    { ' ': '' },
    { A: 'Alfa' },
    { R: 'Romeo' },
    { T: 'Tango' },
    { E: 'Echo' },
    { M: 'Mike' }]
```