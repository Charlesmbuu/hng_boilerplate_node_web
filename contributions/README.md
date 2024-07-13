# User Authentication and Organization Management System

This project implements a user authentication and organization management system using Node.js, Express, PostgreSQL, JWT authentication, and Jest for testing.

## Overview

This project aims to build a secure and scalable user authentication and organization management system. It includes user registration, login, JWT-based authentication, and management of organizations.

## Features

- **User Authentication:**
  - Register new users with default organization assignment.
  - Login with email and password authentication using JWT tokens.
  - Secure routes using middleware for token verification.

- **Organization Management:**
  - Create, read, update, delete (CRUD) operations for organizations.
  - Restrict access to organizations based on user roles or permissions.

- **Testing:**
  - Unit tests for authentication endpoints using Jest and Supertest.
  - Ensure secure and expected behavior of endpoints.

## Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 
- npm 
- PostgreSQL


### Installation
1. Clone the repository:
    
bash
    git clone https://github.com/Charlesmbuu/hng_boilerplate_node_web.git

2. Navigate to the project directory:
    
bash
    cd hng_boilerplate_node_web

3. Install dependencies:
    
bash
    npm install

4. Configure environment variables:
    - Copy .env.example to .env and fill in your environment variables.

## Usage
### Running the Server
```bash
npm start
The server will start on http://localhost:3000.
Running Tests
```bash


npm test
## API Endpoints
### User Endpoints
- Get All Users
    - URL: /api/users
    - Method: GET
    - Description: Retrieves a list of all users.
- Get User by ID
    - URL: /api/users/:id
    - Method: GET
    - Description: Retrieves a user by their ID.
- Create User
    - URL: /api/users
    - Method: POST
    - Description: Creates a new user.
- Update User
    - URL: /api/users/:id
    - Method: PUT
    - Description: Updates a user by their ID.
- Delete User
    - URL: /api/users/:id
    - Method: DELETE
    - Description: Deletes a user by their ID.
Organization Endpoints
- Get All Organizations
    - URL: /api/organizations
    - Method: GET
    - Description: Retrieves a list of all organizations.
- Get Organization by ID
    - URL: /api/organizations/:id
    - Method: GET
    - Description: Retrieves an organization by their ID.
- Create Organization
    - URL: /api/organizations
    - Method: POST
    - Description: Creates a new organization.
- Update Organization
    - URL: /api/organizations/:id
    - Method: PUT
    - Description: Updates an organization by their ID.
- Delete Organization
    - URL: /api/organizations/:id
    - Method: DELETE
    - Description: Deletes an organization by their ID.
## Database Schema
### Users Table
ColumnTypeDescriptionidIntegerPrimary KeynameStringUser's nameemailStringUser's email (Unique)organization_idIntegerForeign Key (Organization ID)
### Organizations Table
ColumnTypeDescriptionidIntegerPrimary KeynameStringOrganization's nameaddressStringOrganization's address
Contribution Guidelines
- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request.
License
This project is licensed under the MIT License.
sql





This is the API documentation together with the Database designs

API Documentation: https://boot2roothngtask3.netlify.app/ 

Database design link: https://dbdiagram.io/d/[Team_name]-database-desgin-6692c59b9939893daed95285

