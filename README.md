<!-- ABOUT THE PROJECT -->

# AN API that performs CRUD operation on a Person Model

## This is a REST API for a Blog created using NodeJS(TypeScript), ExpressJS and MongoDB.

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <p align="center">
    <br />
    <a href="https://github.com/wendeee/person-CRUD/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    
  </p>
</div>

# Technologies used

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

---

<br>

# Development

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

### Clone this repo

```sh
 git clone https://github.com/wendeee/person-CRUD.git
```

### Install project dependencies

```sh
npm install
```

### Update .env with [example.env](https://github.com/wendeee/person-CRUD/blob/main/example.env)

### Run development server

```sh
npm run dev
```

## Models

---

## Person

| field   | data_type | constraints                                 |
| ------- | --------- | ------------------------------------------- |
| name    | string    | required                                    |
| gender  | string    | required, enum: ['male', 'female', 'other'] |
| country | string    | required                                    |

# API Endpoints

---

### Base URL

[base url](https://person-crud-50om.onrender.com) 

### PERSON

### Add a new person

- Route: /api/person
- method: POST

- 👇: Body

```json
{
 "name": "Zoe Doeey",
 "gender": "other",
 "country": "Wonderland"
}
```

👇: Response

```json
{
 "status": "success",
 "person": {
  "name": "Zoe Doeey",
  "gender": "other",
  "country": "Wonderland",
  "_id": "65048776718779f60f351287",
  "__v": 0
 }
}
```

#### Get person

- Route: /api/person/:identifier
- Method: GET
- Example: /api/person/zoe doey

👇: Response

```json
{
 "status": "success",
 "person": {
  "_id": "65048776718779f60f351287",
  "name": "Zoe Doeey",
  "gender": "other",
  "country": "Wonderland",
  "__v": 0
 }
}
```

- Example: /api/person/65048776718779f60f351287

👇: Response

```json
{
 "status": "success",
 "person": {
  "_id": "65048776718779f60f351287",
  "name": "Zoe Doeey",
  "gender": "other",
  "country": "Wonderland",
  "__v": 0
 }
}
```

---

#### Get all created person

- Route: /api/person
- Method: GET

👇: Response

```json
{
 "status": "success",
 "person": {
  "_id": "65048776718779f60f351287",
  "name": "Zoe Doeey",
  "gender": "other",
  "country": "Wonderland",
  "__v": 0
 }
}
```

#### Update Person data

- Route: /api/person/:identifier
- Method: PATCH
- Example: /api/person/zoe
- body{
  "country": "Sunderland"
  }

👇: Response

```json
{
 "status": "success",
 "person": {
  "_id": "65048776718779f60f351287",
  "name": "Zoe Doeey",
  "gender": "other",
  "country": "Sunderland",
  "__v": 0
 }
}
```

#### Delete Person data

- Route: /api/person/:identifier
- Method: DELETE
- Example: /api/person/zoe

👇: Response

```json
{
 "status": "success",
 "message": "person deleted!"
}
```

Project Link: [https://github.com/wendeee/person-CRUD](https://github.com/wendeee/person-CRUD)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/wendeee/person-CRUD.svg?style=for-the-badge
[contributors-url]: https://github.com/wendeee/person-CRUD/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/wendeee/person-CRUD.svg?style=for-the-badge
[forks-url]: https://github.com/wendeee/person-CRUD/network/members
[stars-shield]: https://img.shields.io/github/stars/wendeee/person-CRUD.svg?style=for-the-badge
[stars-url]: https://github.com/wendeee/person-CRUD/stargazers
[issues-shield]: https://img.shields.io/github/issues/wendeee/person-CRUD.svg?style=for-the-badge
[issues-url]: https://github.com/wendeee/person-CRUD/issues
[license-shield]: https://img.shields.io/github/license/wendeee/person-CRUD.svg?style=for-the-badge
[license-url]: https://github.com/wendeee/person-CRUD/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
