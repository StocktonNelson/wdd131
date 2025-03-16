import recipes from './recipes.mjs';

function randomRecipte(number) {
    return Math.floor(Math.random() * number);
}

function getRandomListValue(list){
    const listLength = list.length;
	const randomNum = randomRecipte(listLength);
	return list[randomNum];
}

function recipeTemplate(recipe) {
    return `<section>
            <div class="image-holder">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>

            <div class="description">

                <div class="tags">
                    ${tagsTemplate(recipe.tags)}
                </div>
                
                <div class="food-title">
                    <h2>
                        ${recipe.name.toLowerCase()}
                    </h2>
                </div>
                
                
                ${ratingTemplate(recipe.rating)}

                <div class="breif-text">
                    <p>
                        ${recipe.description}
                    </p>
                </div>
            </div>

        </section>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = '';
    tags.forEach(tag => {
        html += `<span class="tag">${tag}</span>`;
    });
    return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let rate = 0; rate < 5; rate++) {
        if (rate < rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const mainElement = document.querySelector('main');
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
	// Set the HTML strings as the innerHTML of our output element.
    mainElement.innerHTML = recipesHTML;

}

function filterRecipes(query){
    // This function filters recipes based on a search query
    const filtered = recipes.filter(recipe => {
        const recipeName = recipe.name.toLowerCase();
        const searchQuery = query.toLowerCase();
        // Return food on site that matches the search query
        return recipeName.includes(searchQuery);
    });
    
    // Sort the filtered results alphabetically by name
    return filtered.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
}

function init() {
    // get a random recipe
    const recipe = getRandomListValue(recipes)
    // render the recipe with renderRecipes.
    renderRecipes([recipe]);
    
    // Add event listener for search functionality
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('#search-input');
    
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            const filteredRecipes = filterRecipes(query);
            renderRecipes(filteredRecipes);
        }
    });
    
    // Also add event listener for Enter key in search input
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                const filteredRecipes = filterRecipes(query);
                renderRecipes(filteredRecipes);
            }
        }
    });
}

init();