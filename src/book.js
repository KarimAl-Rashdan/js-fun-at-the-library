function createTitle(title) {
  return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
var character = {
    name: name,
    age: age,
    pronouns: pronouns
  };
  return character;
  };

//"should be able to add reviews to an array that already contains reviews"
function saveReview(feedback, reviews) {
  if (reviews.includes(feedback) === false) {
    return reviews.push(feedback)
  }
}


function calculatePageCount(title) {
  console.log(title.length*20);
  return title.length*20;
}
//"should return a book object"
function writeBook(bookTitle,bookCharacter,genre) {

return book = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: bookTitle.length*20,
  genre: genre}
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
