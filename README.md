# DashBoard-Project
CRUD operation done with React 


E-Commerce Dashboard

This project is a web-based e-commerce dashboard built using React. It includes features such as user authentication, product management, and CRUD operations (Create, Read, Update, Delete).

Features

User authentication: Users can create an account, log in, and log out. Authentication is handled using JSON Web Tokens (JWT).
Product management: Logged-in users can view a list of products, add new products, edit existing products, and delete products.
Search functionality: Users can search for products using keywords.
Responsive design: The dashboard is optimized for different screen sizes, from desktop to mobile.
Technologies Used
React: A JavaScript library for building user interfaces.
React Router: A library for routing in React applications.
Axios: A library for making HTTP requests from the browser.
Bootstrap: A popular CSS framework for building responsive, mobile-first websites.
Node.js: A JavaScript runtime for building server-side applications.
Express: A web framework for Node.js.
MongoDB: A NoSQL document database.
Getting Started
To run this project locally, you will need to have Node.js and MongoDB installed on your machine.

Clone the repository:

git clone[https://github.com/Mohammad-Mubarak/DashBoard-Project.git]
Navigate to the project directory:


cd e-commerce-dashboard
Install dependencies:


npm install
Start the development server:


npm start
This will start the frontend and backend servers simultaneously. The dashboard should be accessible at http://localhost:3000.

Create a .env file in the root directory of the project and add the following environment variables:

makefile
Copy code
PORT=3001
JWT_SECRET=your-secret-key-here
MONGODB_URI=mongodb://localhost:27017/e-commerce-dashboard
The PORT variable specifies the port on which the backend server will run. The JWT_SECRET variable is used to sign and verify JWTs. The MONGODB_URI variable specifies the URI for your MongoDB database.






