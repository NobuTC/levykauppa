# Levykauppa

A group project where we implement a simple cd webstore where customers can purchase cd albums.

## Tech stack

- Front end: React
- Backend: Express, Node.js
- Database: sqlite3

## Setup steps

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Features

- View CDs
- Purchase CDs
- Add/remove CD from cart
- View CDs by category

## API Reference

#### Get CD by id

```http
  GET /api/product/:id
```

#### Create new CD

```http
  POST /api/product/add
```

| Parameter      | Type     | Description                              |
| :------------- | :------- | :--------------------------------------- |
| `title`        | `string` | **Required**. name of the CD             |
| `price`        | `number` | **Required**. price of the CD            |
| `category`     | `string` | **Required**. category of the CD         |
| `image_url`    | `string` | **Required**. URL to a picture of the CD |
| `release_date` | `date`   | **Required**. release date of the CD     |
| `info`         | `string` | **Required**. additional info of the CD  |
| `artist_name`  | `string` | **Required**. artist name of the CD      |
