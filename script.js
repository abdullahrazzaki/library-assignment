class Book{
    constructor(author,publisher,date){
        this.author = author;
        this.publisher =publisher;
        this.date = date;
    }
}
Book.prototype.toJSONString = function () {
    return JSON.stringify(this,(key,value) => { console.log(key); return key==="name"?null:true;});
};
Book.prototype.fromJSON = function (name,str) {
    console.log(str);
    let obj = str;
    return new Book(obj.author,obj.publisher,obj.date);
};
let books = getBooks();
function saveBooks() {
    localStorage.setItem("books",JSON.stringify(books));
}
function getBooks() {
    let r = { };
    console.log(localStorage.getItem("books"));
    let arr = JSON.parse(localStorage.getItem("books"));
    for(let i in arr){
        r[i] = (Book.prototype.fromJSON(i,arr[i]));
    }
    console.log(r);
    return r;
}