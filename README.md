## Application Concept


This application is intended to function like a fitness tracker. It is designed
to let users catalogue their weekly routines, compare the results with prior logs,
and track overall fitness.

--------

## Set Up & Installation for API


   1) Fork and Clone this repository.
   2) Create and checkout into a new branch.
   3) Install dependencies with `npm instal`.
   4) Run local server with `npm run server`.

--------

## API Routes


Methods   |	Paths
--------- | -----------
GET | /userexercises
GET | /exercises/:id
POST | /exercises
PATCH | /exercises/:id
DELETE | /exercises/:id

---------

## Technology Used


* HTML
* SCSS
* JavaScript
* React
* Axios
* Bootstrap
* Passport
* Mongo DB
* Momento

---------

## Unsolved Problems


* When listing multiple exercises the resources don't have text to describe what the numbers are referencing.

----------

## Relevant Links


[Client Side Repository](https://github.com/Dave-92-stack/Exercise-Client)

[Client Deployment](https://dave-92-stack.github.io/exercise-client/)

[API Side Repository](https://github.com/Dave-92-stack/Exercise-API)

[API Deployment](https://whispering-retreat-24051.herokuapp.com/)

--------

## WireFrame & ERD


[WireFrame & ERD](https://imgur.com/a/2OUY15k)

--------

## User Stories


* As an unregistered user, I would like to sign up.
* As a registered user, I would like to sign in with email and password.
* As a signed in user, I would like to change my password.
* As a signed in user, I would like to sign out.
* As a signed in user, I would like to create a log of my exercise routine.
* As a signed in user, I would like to update my exercise logs.
* As a signed in user, I would like to delete old exercise logs.
* As a signed in user, I would like to see past exercise logs.
