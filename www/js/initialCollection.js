import{Db} from "./db.js";
import {Processor} from "./Processor.js";

class InitialProcessors{

        constructor()
        {
            this.processorsCollection = [];
            this.sortedAsc = true;
        }
    
        async loadData()
        {
       
            this.processorsCollection = await Db.getDB("/cpuz.json");
            this.processorsCollection = this.processorsCollection.map(p => new Processor(p));
        }

        async searchByName(val)
    {
        await this.loadData()
        val= val.trim();// supprime les espaces vides
        if(val.length>0)
        {
            val = val.toLowerCase();
            this.processorsCollection = this.processorsCollection.filter(processor => processor.name.toLowerCase().includes(val));
            console.log(val);
        }
    }
        sortProcessorByprice()
    {
        let array = this.processorsCollection.sort((a,b)=>a.price - b.price);
        this.bool=!this.bool;
        if(this.bool){
            return array.reverse();
        }
        return array;
    }
}
export{InitialProcessors}
