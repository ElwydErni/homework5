

class Storage {
    #shoItems

    constructor(shoItems = []) {
        this.#shoItems = shoItems;
    };
    getItems() {
        return this.#shoItems;
        };
    addItem(item) {
        this.#shoItems.push(item);
    };
    removeItem(name){
        for(let prod of this.#shoItems){
        if (prod === name) {
            let index = this.#shoItems.indexOf(prod);
            this.#shoItems.splice(index, 1);
        }
        }
    };


    }

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);





const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]