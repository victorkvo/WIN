PATCH /articles/1 HTTP/1.1      //PATCH request
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json

{
  "data": {
    "type": "articles",   // resource being updated
    "id": "1",                            
    "attributes": {
      "title": "To TDD or Not"
    }
  }
}




PATCH /articles/1 HTTP/1.1      //PATCH request
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json

{
  "data": {
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "To TDD or Not",     
      "text": "TLDR; It's complicated... but check your test coverage regardless."
    }       // In this example, the PATCH request will update the
  }         // "title" and "text" attributes of the article.
}           // note: any missing attributes will remain unchanged.
            // The server MUST NOT have their values changed to null.




PATCH /articles/1 HTTP/1.1      //PATCH request
Content-Type: application/vnd.api+json
Accept: application/vnd.api+json

{
  "data": {
    "type": "articles",
    "id": "1",
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "1" }
      }    
    }       // In this example, the PATCH request will update the "author" relationship.
  }         // note: any missing attributes will remain unchanged.
}           // The server MUST NOT have their values changed to null.