# Contact Management Application

A backend JavaScript project using Node.js, Express, and MongoDB for managing contacts.

---

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on contacts.
- **MongoDB Integration**: Utilizes MongoDB database to store contact information.
- **RESTful API**: Exposes RESTful API endpoints for interacting with contacts.
- **Error Handling**: Handles errors gracefully and provides informative responses.

---

## Setup Instructions

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Sourav-Sir/Contact-Application-Backend.git
   ```
   ## Install dependencies:
   ```bash
   cd contact-management-app
   npm install
   ```

## Set up MongoDB:

- Install MongoDB locally or use a cloud-based MongoDB service.
- Update the MongoDB connection URL in `app.js` to point to your MongoDB instance.

## Run the server:
```bash
npm start
```

## Test API endpoints using Postman or any REST client.
# API Endpoints
# Get All Contacts:
```bash
GET /api/contacts
```
## Add a New Contact
```bash
POST /api/contacts
```

## Request Body:
```json
{
  "name": "John Doe",
  "phoneNumber": "123-456-7890",
  "email": "john@example.com",
  "organization": "Example Inc"
}
```

## Update a Contact
```bash
PUT /api/contacts/:id
```

# Request Body:
```json
{
  "name": "Updated Name",
  "phoneNumber": "987-654-3210",
  "email": "updated@example.com",
  "organization": "Updated Organization"
}
```

## Delete a Contact
```bash
DELETE /api/contacts/:id
```

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- Body-parser

