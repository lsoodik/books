const apiKey = process.env.API_KEY;
const booksContainer = document.querySelector('.books-container');
async function fetchBook() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:9781451648546&key=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function displayBook(book) {
  const bookDiv = document.createElement("div");
  bookDiv.className = "book";

  bookDiv.innerHTML = `<h2>${book.title}</h2>  `;

  booksContainer.appendChild(bookDiv);
}

async function loadBooks() {
  for (let id = 1; id <= 2; id++) {
    const book = await fetchBook(id);
    if (book) {
      displayBook(book);
    }
  }
}
window.onload = loadBooks;