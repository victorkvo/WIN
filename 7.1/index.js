// For individual book search

submit.addEventListener("click", movieTitle);


function movieTitle(e) {
  e.preventDefault();
  let title = search.value;

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(`http://openlibrary.org/search.json?author=&title=${title}`, requestOptions)
  .then(response => response.json())
  .then((result) => {
    console.log(result.docs[0].title);
    document.getElementById('titleP').innerHTML = result.docs[0].title;
  })

  .catch(error => console.log('error', error));

}

//  END ************






