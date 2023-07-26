# Product REST API

This is a RESTful API for managing products, built with Express and Mongoose. The API allows performing CRUD operations (Create, Read, Update, Delete) on products. It provides various endpoints to fetch, create, update, and delete products based on different parameters.

## Getting Started

To get started with this Product REST API, follow the steps below:

### Prerequisites

- Node.js (at least version 12.x)
- MongoDB database
- express
- mongoose
- cors
- dotenv
- nodemon

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sraveshnandan/Product_Api.git
cd product-rest-api
```

2. Install dependencies:

```bash
npm install
```

3. Configure MongoDB connection:

   Open `db.js` and replace the MongoDB connection URL with your actual database URL.

### Running the API

Run the following command to start the server:

```bash
npm run dev
```

The API will be accessible at `http://localhost:3000`.

## Endpoints

### Get All Products

Retrieve details of all products.

- **Endpoint:** `GET http://localhost:3000/api/v1/products`
- **Response:** JSON object containing an array of product details.

### Find Product by ID

Find a product by its ID.

- **Endpoint:** `GET http://localhost:3000/api/v1/product/64bc84e754bed9cb64e7075c`
- **Response:** JSON object containing the product details.

### Delete Product

Delete a product by its ID.

- **Endpoint:** `DELETE http://localhost:3000/api/v1/product/?_id=64c0928ebd0c6b140bd36396`
- **Response:** JSON object containing a success message if deletion is successful.

### Update Product

Update a product by its ID.

- **Endpoint:** `PUT http://localhost:3000/api/v1/product/64bc9b02662a721fe83eab15`
- **Request Body:** JSON object containing the updated product details.
- **Response:** JSON object containing the updated product details.

### Create New Product

Create a new product.

- **Endpoint:** `POST http://localhost:3000/api/v1/product/new`
- **Request Body:** JSON object containing the new product details.
- **Response:** JSON object containing the newly created product details.

### Filter Products

Filter products by name, category, and price.

- **Endpoint:** `GET http://localhost:3000/api/v1/products/filter/?by=name`
- **Query Parameters:** `category` and `price` (optional) for filtering products.
- **Response:** JSON object containing an array of filtered product details.



---
 Happy coding!
