const getTheTitles = function (books) {
  //   const books = [
  //     {
  //       title: "Book",
  //       author: "Name",
  //     },
  //     {
  //       title: "Book2",
  //       author: "Name2",
  //     },
  //   ];
  const titles = [];
  books.forEach((book) => {
    titles.push(book.title);
  });
  return titles;
};
// getTheTitles();
// Do not edit below this line
module.exports = getTheTitles;
