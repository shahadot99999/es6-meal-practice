const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        //.then(data => console.log(data.meals));
        .then(data => displayMeals(data.meals));
}
const displayMeals = meals => {
    //console.log(meals);
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerHTML = ``;
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
       
                <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                    </div>
                </div>
            
        `;
        mealsContainer.appendChild(mealDiv);
    })
}
const searchFood = () => {
    const searhField = document.getElementById('search-field');
    const searchText = searhField.value;
    loadMeals(searchText);
    searchField.value = '';

    //console.log('searching', searchText);
}

const loadMealDetail = (idMeal) => {
    //console.log('get details of id', idMeal);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    //console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetails(data.meals[0]));
}

const displayMealsDetails = meal => {
    const detaitsContainer = document.getElementById('details-container');
    detaitsContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
  <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>

  `;
    detaitsContainer.appendChild(mealDiv)
}

loadMeals('');