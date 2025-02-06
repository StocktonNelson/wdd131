const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '****'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description:
            'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc:
            'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
]
;
const articleList = document.querySelector('.book_blog_gallary');

articles.forEach(article => {
    const sectionElement = document.createElement('section');

    const articleElement = document.createElement('div');
    articleElement.classList.add('book_blog');

    articleElement.innerHTML = `
        <div class="book">
            <h2>${article.title}</h2>
            <img src="${article.imgSrc}" alt="${article.imgAlt}" width="300" height="500"/>
            <p>${article.description}</p>
        </div>
        <div class="info">
            <h2>${article.date}</h2>
            <p>Ages: ${article.ages}</p>
            <p>Genre: ${article.genre}</p>
            <p>Stars: ${article.stars}</p>
        </div>
    `;
    sectionElement.appendChild(articleElement);
    articleList.appendChild(sectionElement);
});