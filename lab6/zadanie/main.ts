import { Company } from "./company";
import { listCompanies } from "./company";
import { Procesor } from "./processor";
import { listProcessors } from "./processor";

//firmy
let intel = new Company('Intel', 'Santa Clara')
let amd = new Company('AMD', 'Santa Clara')

let companiesList: COmpany[] = [intel, amd]
companies(companiesList);

//processory
let i5-650 = new Procesor('i5-650', 'Intel', 3200, 2);
let i5-750 = new Procesor('i5-750', 'Intel', 2660, 4);

let processorList: Procesor[] = [i5-650, i5-750];
processors(processorList, companiesList);

