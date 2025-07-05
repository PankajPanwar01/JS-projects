const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');
const toggle = document.getElementById('theme-toggle');

let currentEditRow = null;

btn.addEventListener('click', function (e) {
  e.preventDefault();

  const bookTitle = title.value.trim();
  const bookAuthor = author.value.trim();
  const bookYear = year.value.trim();

  if (bookTitle === '' || bookAuthor === '' || bookYear === '') {
    alert('Please fill in all fields!');
    return;
  }

  if (currentEditRow) {
    currentEditRow.children[0].textContent = bookTitle;
    currentEditRow.children[1].textContent = bookAuthor;
    currentEditRow.children[2].textContent = bookYear;

    currentEditRow = null;
    btn.textContent = 'Add Book';
  } else {
    const bookRow = document.createElement('section');
    bookRow.classList.add('table-section');
    bookRow.innerHTML = `
      <div>${bookTitle}</div>
      <div>${bookAuthor}</div>
      <div>${bookYear}</div>
    `;

    // Create action buttons
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => bookRow.remove());

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.classList.add('update');
    updateBtn.addEventListener('click', () => {
      title.value = bookRow.children[0].textContent;
      author.value = bookRow.children[1].textContent;
      year.value = bookRow.children[2].textContent;

      currentEditRow = bookRow;
      btn.textContent = 'Update Book';
    });

    const actionDiv = document.createElement('div');
    actionDiv.classList.add('actions');
    actionDiv.appendChild(deleteBtn);
    actionDiv.appendChild(updateBtn);
    bookRow.appendChild(actionDiv);

    bookList.appendChild(bookRow);
  }

  title.value = '';
  author.value = '';
  year.value = '';
});

// Theme toggle
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
