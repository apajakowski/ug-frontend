export class Procesor {
  constructor(public name: string, public company: string, public speed: number, public cores: number) {
      this.name = name;
      this.company = company;
      this.speed = speed;
      this.cores = cores;
  }
}

export interface Company {
    name: string;
}

export function listProcessors(stadiums: Procesor[], companies: Company[]) {
  console.log('\nLista procesorow')
  for (let procesor of stadiums){
    console.log('Nazwa: ' + procesor.name + "\t" +
    "Firma: " + procesor.company + "\t" +
    "Predkosc: " + procesor.speed + "\t" +
    "Rdzenie: " + companies[(procesor.cores)-1].name)
  }
}
