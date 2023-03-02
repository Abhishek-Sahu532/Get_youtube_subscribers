# Project Title - Get YouTube Subscribers

By the specific routes in the URL, an user can access the number of subscribers, add subscribers or access subscribers by specific IDs and names, he or she can update and delete as well.

### Technology Used
- NodeJS
- Express
- MongoDB
- MongoDB Atlas
- Mongoose

## Features

- Fetch specific data from database via a route
- Adding new subscribers to database
- Updating existing subscribers present in the database
- Deleting subscribers from the database



Useful Links

```sh
http://localhost:3000/subscribers
```
> Using the above route user can see the full list of the subscribers.

```sh
http://localhost:3000/subscribers/names
```
> Using the above route You can see the full list of the subscribers with only "name" and "subscribedChannel".

```sh
http://localhost:3000/subscribers/<id>
```
> Using the above route you can see the details of the ojbect of the given particular object id.


Deployed Link :

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
