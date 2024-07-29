document.getElementById('bookmarkForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
    e.preventDefault();

    // Get form values
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    const bookmark = {
        name: siteName,
        url: siteUrl
    };

    // Check if bookmarks already exist in localStorage
    let bookmarks;
    if (localStorage.getItem('bookmarks') === null) {
        bookmarks = [];
    } else {
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    }

    // Add new bookmark to the array
    bookmarks.push(bookmark);

    // Re-set bookmarks array to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Clear form
    document.getElementById('bookmarkForm').reset();

    // Re-fetch bookmarks
    fetchBookmarks();
}

function fetchBookmarks() {
    // Get bookmarks from localStorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Get output div
    const bookmarksList = document.getElementById('bookmarksList');

    // Build output
    bookmarksList.innerHTML = '';
    for (let i = 0; i < bookmarks.length; i++) {
        const name = bookmarks[i].name;
        const url = bookmarks[i].url;

        bookmarksList.innerHTML += `<a href="${url}" target="_blank">${name}</a>`;
    }
}

// Fetch bookmarks on page load
document.addEventListener('DOMContentLoaded', fetchBookmarks);
