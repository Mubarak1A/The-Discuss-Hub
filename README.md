# Discuss Hub - A React Blog App

Welcome to Discuss Hub, a React-based blog app that allows users to create, view, and interact with blog content. This application is designed to provide a simple and intuitive platform for sharing and discussing blog posts.

## Table of Contents

- [Installation](#installation)
- [Deployment](#deployment)
- [Usage](#usage)
- [Components](#components)
- [Routes](#routes)
- [JSON Mocked Server](#json-mocked-server)

## Installation

To get started with Discuss Hub, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/discuss-hub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd discuss-hub
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view Discuss Hub.

## Deployment

The Discuss Hub app is deployed and can be accessed at [https://the-discuss-hub.vercel.app/](https://the-discuss-hub.vercel.app/).

## Usage

- Upon launching the application, users are greeted with a home page displaying a list of blog posts.
- Navigate through the application using the navbar.
- Create new blog posts using the "Create Blog" page.
- Click on individual blog posts to view detailed information.

## Components

Discuss Hub utilizes several React components to structure its functionality:

- `App.jsx`: The main application component responsible for routing and overall layout.
- `Navbar.jsx`: Navigation bar component for easy navigation within the app.
- `Home.jsx`: Component for displaying a list of blog posts on the home page.
- `CreateBlog.jsx`: Component for creating new blog posts.
- `BlogDetails.jsx`: Component for displaying detailed information about a specific blog post.
- `BlogList.jsx`: Template component for rendering the list of blogs.

## Routes

- `/`: Home page displaying a list of blog posts.
- `/create-blog`: Page for creating new blog posts.
- `/blogs/:id`: Page displaying detailed information about a specific blog post.
- `*`: 404 Not Found page for undefined routes.

## JSON Mocked Server

For this project, a JSON mocked server is used to simulate the database. The blog data is available at [https://my-json-server.typicode.com/Mubarak1A/The-Discuss-Hub_Mocked-Server/blogs](https://my-json-server.typicode.com/Mubarak1A/The-Discuss-Hub_Mocked-Server/blogs).