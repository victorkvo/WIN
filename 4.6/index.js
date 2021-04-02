//Grabbing elements
let search = document.getElementById("search"),
    submit = document.getElementById("submit"),
    drinkName = document.getElementById("drinkName"),
    directions = document.getElementById("directions"),
    needed = document.getElementById("needed"),
    one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three");


submit.addEventListener('click', getDrink)
document.getElementById('toDo').value='';

var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=de230c27769be510293a1c0e90f7f788c1615655737");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function getDrink(e){
    e.preventDefault();
    let drink = search.value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    drinkName.innerHTML = result.drinks[0].strDrink;
    directions.innerHTML = result.drinks[0].strInstructions;
    one.innerHTML = result.drinks[0].strIngredient1;
    two.innerHTML = result.drinks[0].strIngredient2;
    three.innerHTML = result.drinks[0].strIngredient3;
    needed.style.visibility = "visible";
    document.getElementById('search').value='';
  })

 
  .catch(error => console.log('error', error));

}

<nav class="navbar navbar-light bg-light">
 
</nav>