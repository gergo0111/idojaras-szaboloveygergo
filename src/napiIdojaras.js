class NapiIdojaras {
    constructor(nap, maxHomerseklet, minHomerseklet, idojaras) {
      this.nap = nap;
      this.maxHomerseklet = maxHomerseklet;
      this.minHomerseklet = minHomerseklet;
      this.idojaras = idojaras;
    }
  
    toString() {
        const napok = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];
        const napNev = napok[this.nap];
        return `Az ${napNev}i időjárás: ${this.idojaras}, maximum ${this.maxHomerseklet} Celsius, minimum ${this.minHomerseklet} Celsius.`;
    }
  }
  
  export default NapiIdojaras;