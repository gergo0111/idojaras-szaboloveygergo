import NapiIdojaras from './napiIdojaras.js';
import { maiidojaras } from './idojaraskezeles.js';
import { beolvas } from './beolvas.js';
import fs from 'node:fs/promises';

const idojaras = new NapiIdojaras(0, 25, 15, 'napos');
console.log(idojaras.toString());

async function main() {
  const idojarasLista = await beolvas();
  const maiIdojaras = await maiidojaras();
  idojarasLista.push(maiIdojaras);

  const csvTartalom = idojarasLista.map(idojaras => {
    return `${idojaras.nap};${idojaras.minHomerseklet};${idojaras.maxHomerseklet};${idojaras.idojaras}`;
  }).join('\n');
  await fs.writeFile('idojaras-uj.csv', csvTartalom);

  const legmagasabbHomersekletNap = idojarasLista.reduce((max, current) => {
    return max.maxHomerseklet > current.maxHomerseklet ? max : current;
  });

const napok = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];
console.log(`A legmagasabb hőmérséklet ${legmagasabbHomersekletNap.maxHomerseklet} Celsius volt ${napok[legmagasabbHomersekletNap.nap]} nap.`);
}

main();

