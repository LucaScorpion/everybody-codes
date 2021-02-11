# Keep Talking and Everybody Codes

De opdrachten zijn gemaakt in TypeScript. Om de code te kunnen runnen zal deze dus eerst gecompiled moeten worden. Dit doe je door middel van:

```
npm run build
```

Het is echter ook mogelijk om de TypeScript scripts direct te runnen (via bijvoorbeeld `ts-node`), hiervoor staan de commands bij de specifieke opdracht.

Alle commands gaan ervan uit dat ze in de root project directory gerund worden.

## CLI

Zoeken op een camera naam:

```shell
node build/search.js --name Neude
# Of:
npm run search -- --name Neude
```

## API

Start de server:

```shell
node build/server.js
# Of:
npm start
```

De server runt standaard op poort 4000. Dit kan worden ingesteld door de `PORT` environment variable op een andere waarde te zetten.

De server heeft 1 endpoint: `GET /api/cameras`. Dit endpoint geeft een lijst met alle cameras:

```json
[
  {
    "name": "UTR-CM-501 Neude rijbaan voor Postkantoor",
    "num": 501,
    "latitude": "52.093421",
    "longitude": "5.118278"
  },
  {
    "name": "UTR-CM-502 Potterstraat / Loeff Berchmakerstraat",
    "num": 502,
    "latitude": "52.093599",
    "longitude": "5.118325"
  },
  ...
]
```

## Webapp

// TODO
