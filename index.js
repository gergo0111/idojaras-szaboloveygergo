import NapiIdojaras from './napiIdojaras.js';
import { maiidojaras } from './idojaraskezeles.js';
import { beolvas } from './beolvas.js';

const idojaras = new NapiIdojaras(0, 25, 15, 'napos');
console.log(idojaras.toString());

async function main() {
  const idojarasLista = await beolvas();
  const maiIdojaras = await maiidojaras();
  idojarasLista.push(maiIdojaras);

  const legmagasabbHomersekletNap = idojarasLista.reduce((max, current) => {
    return max.maxHomerseklet > current.maxHomerseklet ? max : current;
  });

  console.log(`A legmagasabb hőmérséklet ${legmagasabbHomersekletNap.maxHomerseklet} Celsius volt ${legmagasabbHomersekletNap.nap} nap.`);
}

main();

