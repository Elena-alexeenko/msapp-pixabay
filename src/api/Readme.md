# Backend

Contains the middleware , routing & server initialization, the service of choice being [express])(https://expressjs.com).

Searching for avalibale images based on 4 query params.

category - a string for searching data (can not be empty). pageNum - the number of the current page of the query, must be a number bigger than 0 (can not be empty). , must be a number between 3 or 200.

order - How the results should be ordered. Accepted values: "popular", "latest".[Pixabay api](https://pixabay.com/api/docs/)

End point /images/:id

Searching for a specific image by id based on id path param.

# To run the backend run

```
    node app.js
```

in src\api
