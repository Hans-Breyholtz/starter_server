﻿# Starter Server for REST API Server with Express.js and MongoDB

This project is designed to help you rapidly develop your startup ideas by providing the essential components that most applications require. My goal is to save you countless hours, allowing you to concentrate on what truly matters: creating innovative and groundbreaking tools.

<p align="center">
  <a href="https://github.com/hanseirik-breyholtzmott" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/hans-eirik-breyholtz-mott/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="https://twitter.com/hanseirik_breyh" target="_blank">
    <img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter">
  </a>
  <a href="https://www.youtube.com/@hanseirik_breyholtzmott" target="_blank">
    <img src="https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
  </a>
  <a href="https://www.instagram.com/hanseirik_breyholtzmott/" target="_blank">
    <img src="https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram">
  </a>
</p>

## Motivation and Vision

As a passionate startup enthusiast and developer, I've recognized a common challenge in software development: the repetitive setup of foundational components across projects. This realization has inspired me to embark on an ambitious journey - creating the ultimate starter kit for developers.

My drive comes from countless hours spent configuring authentication systems, setting up backend infrastructures, and integrating databases - tasks that, while crucial, often divert energy from the unique aspects of each project. I envision the future with new and creative soluations, if I can help a few to make bigger chanages will that be a reward itself.

I aim to build a comprehensive, flexible starter kit that will:

1.  Accelerate Development: Save 100+ hours on each new project by providing ready-to-use, customizable components.
2.  Empower Creativity: Free developers to focus on innovative features rather than boilerplate setup.
3.  Elevate Quality: Incorporate best practices and robust architectures to ensure projects start on a solid foundation.
4.  Foster Community: Create a platform for developers to share, learn, and contribute, enhancing the kit's value over time.

## Overview

This project is a REST API server developed using Node.js, Express.js, and MongoDB. It serves as the backend for a client application, offering endpoints to facilitate CRUD (Create, Read, Update, Delete) operations. The API is capable of handling user authentication, data validation, and other essential functionalities.

Key features of this project include:

- Type checking TypeScript
- Customized Authentication system: Sign up, Sign in, Forgot password, Reset password, and more.
- Coming soon: Passwordless Authentication with magic links, multi-factor Auth, Social Auth (Google, Facebook, Vipps, Github and more)
- Logging with winston and Log Management with Better Stack
- Integration with MongoDB
- RESTful API design

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [API Endpoints](#api-endpoints)
7. [Youtube tutorials](#youtube-tutorials)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MongoDB (v4.x or higher) installed and running

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Hans-Breyholtz/starter_server.git
   ```

2. Navigate to the project directory:

   ```
   cd starter_server
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Run the development:

   ```
   npm start
   ```

## Environment Variables

[.env.sample](https://github.com/Hans-Breyholtz/starter_server/blob/main/.env.sample)

## Technologies Used

- [Express.js](https://expressjs.com) Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware modules.
- [MongoDB](https://www.mongodb.com) MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for scalability, high performance, and schema flexibility.
- [Betterstack](https://betterstack.com) BetterStack is a comprehensive monitoring and incident response platform designed to provide real-time observability, alerting, and logging to help teams quickly detect and resolve issues in their infrastructure and applications.
- [Joi](https://www.npmjs.com/package/joi) Joi validation is a powerful schema description library for JavaScript, used to define and validate object structures to ensure data integrity and consistency.
- [Resend](https://resend.com) Resend is an email API platform designed to simplify sending, receiving, and tracking emails programmatically for developers.

## Project structure

```
.
├── src             # Source folder
│ ├── auth          # Authentication module
│ ├── config        # Configuration files
│ ├── controllers   # Controllers for handling routes
│ ├── db            # Database connection and queries
│ ├── emails        # Email templates and functions
│ ├── library       # Utility libraries
│ ├── logs          # Logging setup and logs
│ ├── middleware    # Express middleware
│ ├── models        # Database models
│ ├── public        # Public assets
│ ├── router        # Routing configuration
│ ├── service       # Service layer logic
│ ├── types         # Type definitions
│ └── utils         # Utility functions
├── .env.template   # Sample environment variables file
├── .gitignore      # Git ignore rules
├── nodemon.json    # Nodemon configuration
├── README.md       # README file
└── tsconfig.json   # TypeScript configuration
```

## Authentication

In this starter template I have built a JSON Web Token (JWT) for authentication. This has multiple purposes, that the client web/app can both communicate with the server REST API. In the diagram below you can see the flow of the authentication of users.

Features:
- User registration, login, logout, profile management, and account verification
- Password reset and email notifications for account verification and password recovery
- Session management: retrieve and delete user sessions
- Pre built frontend forms for login, registration and password reset

### Authentication Flow

When a user logs in, the server generates two JWTs: an AccessToken and a RefreshToken. These tokens are sent back to the client in secure, HTTP-only cookies.

- **AccessToken:** This token is short-lived (15 minutes) and is included in every request to authenticate the user.
- **RefreshToken:** This token is long-lived (30 days) and is only sent to the /refresh endpoint. This endpoint issues a new AccessToken when the original expires.

The frontend handles 401 AccessTokenExpired errors by automatically sending a request to the /refresh endpoint to obtain a new AccessToken. If successful (HTTP 200), the client retries the original request, ensuring a seamless user experience without requiring a re-login. If the /refresh endpoint returns an error, the user is logged out and redirected to the login page.
