const library = [{
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
},
{
    author: "Steve Jobs",
    title:  "Walter Isaacson",
    readingStatus: true
},
{
    author:  "Suzanne Collins",
    title:   "Mockingjay: The Final Book The Hunger Games",
    readingStatus: false
}
];

const BooksRead = library.filter((book)=>{
    return book.readingStatus === true;
})

console.log(BooksRead);