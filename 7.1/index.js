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
    for(var i=0; i<10; i++){
    document.getElementById(`title${i}`).innerHTML = result.docs[i].title;
    var isbn = result.docs[i].isbn[0]
    document.getElementById(`book${i}`).src = `http://covers.openlibrary.org/b/ISBN/${isbn}-L.jpg`;
    var works = result.docs[i].key;
    return fetch(`https://openlibrary.org${works}.json`, requestOptions)
  
  .then(response => response.json())
  .then((result) => {
    console.log(result.description)
    document.getElementById(`desc${i}`).innerHTML = result.description;
  })
};
  })
  .catch(error => console.log('error', error));

}




// fetch(`http://openlibrary.org/search.json?author=&title=${title}`, requestOptions)
//   .then(response => response.json())
//   .then((result) => 
//     console.log(result.docs[0].title);
//     document.getElementById('titleP').innerHTML = result.docs[0].title;
//     console.log(result.docs[0].key)
//   )
//   .then(user => fetch(`https://openlibrary.org${user.docs[0].key}.json`, requestOptions))
//   .then(response1 => response1.json())
//   .then((results1) => {
//     console.log(results1.description)

//   })