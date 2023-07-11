class Processor{
    constructor(processor)
    {
        Object.assign(this, processor);
        this.name = this.nameComplete();
    }

    nameComplete()
    {
        let name;
        let brand;
        let family;
        let model;
        name = this.brand + " " + this.family + " " + this.model + " ";
        return name;
    }
    

    getValues()
        {
            return Object.values(this);
        }

}
export{Processor}
