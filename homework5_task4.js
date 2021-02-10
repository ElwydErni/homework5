
class StringBuilder {
    // #Str
    constructor(value) {
        this._value = value;
    }
    get value(){
        return this._value;
    }
    append(str){
        this._value = (`${str} ${this._value}`);
    }
    prepend(str){
        this._value = (`${this._value} ${str}`);
    }
    pad(str){
        this._value = (`${str} ${this._value} ${str}`);
    }

}
const builder = new StringBuilder('.');

console.log(builder.value);
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='