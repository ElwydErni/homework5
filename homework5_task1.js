function Account({login, email}){
    this.login = login;
    this.email = email;
    this.getInfo = function (){
      return (`Login: ${this.login}, Email: ${this.email}`);
    }

}


const mango = new Account({login: 'Mangozedog', email: 'mango@dog.woof'});

console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});
console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com

console.log(Account.prototype.getInfo); // function