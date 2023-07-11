import { InitialProcessors } from "./initialCollection.js";
import {Table} from "./tableProcessor.js";


let initialProcessors = new InitialProcessors();

await initialProcessors.loadData();

let processorTable = new Table(initialProcessors);

processorTable.generateTable();

document.getElementById("price").addEventListener("click",(e)=> {processorTable.generateTable(initialProcessors.sortProcessorByprice())});

document.getElementById("search").addEventListener("input", async (e) => {
    // contient la valeur du champ lorsque l'evenement est déclenché
       let searchFiledValue = e.target.value;
   
       await initialProcessors.searchByName(searchFiledValue);
   
       processorTable.generateTable();
    })