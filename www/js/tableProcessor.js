class Table {
    constructor(processorTable) {
        this.initialProcessors = processorTable;
        this.tBody = document.getElementById("tableBody");
        this.nbElement = document.getElementById("nbElement");
    }

    generateTable(){
        this.generateBody();

        this.nbElement.innerText = this.initialProcessors.processorsCollection.length;
       
        
    }
    generateBody() {
      
        let array = this.initialProcessors.processorsCollection;
        this.tBody.innerHTML = ""

        
        for (let processor of array) {
            let row = document.createElement('tr');
            row.className = "tablebodyTr";
            this.tBody.appendChild(row);
            this.generateCell(row, processor.id);
            this.generateCell(row, processor.brand);
            this.generateCell(row, processor.family);
            this.generateCell(row, processor.model);
            this.generateCell(row, processor.ghz);
            this.generateCell(row, processor.price);
            this.generateCell(row, processor.name);


        }
    }

        generateCell(row, processors) {
            let cell = document.createElement('td');
            cell.className = "cellData";
            cell.textContent = processors;
            cell.dataset.val = processors;
            row.appendChild(cell);
        }
    }

export { Table };


