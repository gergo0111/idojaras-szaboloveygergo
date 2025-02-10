import NapiIdojaras from './napiIdojaras.js';
import * as readline from 'node:readline/promises';

async function maiidojaras() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const maiNap = new Date().getDay();

  const minHomerseklet = await rl.question('Add meg a mai minimum hőmérsékletet: ');
  const maxHomerseklet = await rl.question('Add meg a mai maximum hőmérsékletet: ');
  const idojaras = await rl.question('Add meg a mai időjárást (pl. napos, felhős, esős): ');

  rl.close();

  return new NapiIdojaras(maiNap, maxHomerseklet, minHomerseklet, idojaras);
}

export { maiidojaras };