// arraylist data structure
// ArrayList is a class that implements a list data structure using an array

export default class ArrayList<T> {
    public length: number;
    private items: T[];
    

    constructor(capacity : number ) {
        this.length = 0;
        this.items = new Array<T>(capacity);
    }

    prepend(item: T): void {
        // check if the array is full
        if(this.length === this.items.length) {
            // create a new array that is twice the size of the current array
            const newItems = new Array<T>(this.items.length * 2);
            // copy the items from the old array to the new array
            for(let i = 0; i < this.items.length; i++) {
                newItems[i] = this.items[i];
            }
            // set the items to the new array
            this.items = newItems;
        }

        // shift all elements to the right by one
        for(let i = this.length; i > 0; i--) {
            this.items[i] = this.items[i-1];
        }

        // add the item to the beginning of the array   
        this.items[0] = item;

        this.length++;
    }

    insertAt(item: T, idx: number): void {
        // check if the array is full
        if(this.length === this.items.length) {
            // create a new array that is twice the size of the current array
            const newItems = new Array<T>(this.items.length * 2);
            // copy the items from the old array to the new array
            for(let i = 0; i < this.items.length; i++) {
                newItems[i] = this.items[i];
            }
            // set the items to the new array
            this.items = newItems;
        }

        // shift all elements strting from index idx to the right by one
        for(let i = this.length; i > idx; i--) {    
            this.items[i] = this.items[i-1];
        }

        // add the item to the idx index of the array
        this.items[idx] = item;
    }

    append(item: T): void {
        // check if the array is full
        if(this.length === this.items.length) {
            // create a new array that is twice the size of the current array
            const newItems = new Array<T>(this.items.length * 2);
            // copy the items from the old array to the new array
            for(let i = 0; i < this.items.length; i++) {
                newItems[i] = this.items[i];
            }
            // set the items to the new array 
            this.items = newItems;
        }

        // add the item to the end of the array
        this.items[this.length] = item;

        this.length++;    

    }

    remove(item: T): T | undefined {
        // find the index of the item
        const idx = this.items.indexOf(item);

        // if the item is not in the array, return undefined
        if(idx === -1) {
            return undefined;
        }
        
        // we need to overwrite startin from the removed element index
        for(let i = idx; i < this.length - 1; i++) {
            this.items[i] = this.items[i+1];
        }   

        this.length--;

        return item;
    }

    get(idx: number): T | undefined {
        if(idx < 0 || idx >= this.length) {
            return undefined;
        }
        
        return this.items[idx];    
    }

    removeAt(idx: number): T | undefined {

        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        const item = this.items[idx];

        // we need to overwrite startin from the removed element index
        for(let i = idx; i < this.length - 1; i++) {
            this.items[i] = this.items[i+1];
        }   

        this.length--;

        return item;

    }
}