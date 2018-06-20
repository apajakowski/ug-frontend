export class Company {
  constructor(public name: string, public city: string) {
      this.name = name;
      this.city = city;
  }
}

export function listCompanies(clubs: Company[]){
  console.log('\n Lista firm')
  for (let company of clubs){
    console.log('Nazwa: ' + company.name + " " + company.city + "\t")
  }
}
