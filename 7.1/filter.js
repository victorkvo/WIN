









var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(`http://openlibrary.org/subjects/${subject}.json?`, requestOptions)
    .then(response => response.json())
    .then((result) => {

        console.log(result.docs[0].title);
    
        document.getElementById('book1').innerHTML = result.works[0].title;
        document.getElementById('book2').innerHTML = result.works[1].title;
        document.getElementById('book3').innerHTML = result.works[2].title;
        document.getElementById('book4').innerHTML = result.works[3].title;
        document.getElementById('book5').innerHTML = result.works[4].title;
        document.getElementById('book6').innerHTML = result.works[5].title;
      })

    .catch(error => console.log('error', error));