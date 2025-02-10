import fs from 'node:fs/promises';
import NapiIdojaras from './napiIdojaras.js';

export async function beolvas() {
    const csvTartalom = await fs.readFile('idojaras.csv', 'utf-8');
    const sorok = csvTartalom.split('\n');
  
    const idojarasLista = [];
  
    for (const sor of sorok) {
      const adatok = sor.split(';');
      if (adatok.length === 4) {
        const nap = parseInt(adatok[0]);
        const minHomerseklet = parseInt(adatok[1]);
        const maxHomerseklet = parseInt(adatok[2]);
        const idojaras = adatok[3];
  
        idojarasLista.push(new NapiIdojaras(nap, maxHomerseklet, minHomerseklet, idojaras));
      }
    }
  
    return idojarasLista;
  }
