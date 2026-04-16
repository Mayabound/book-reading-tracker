RA2311056030015
DSA
PROJ BY - ANUBHAV KUMAR YADAV 
Book Reading Tracker
A full-stack web application to track your reading list — add books, mark them as read, and manage your personal library.
Tech Stack

Frontend — React
Backend — Node.js, Express
Database — MongoDB (Mongoose)

Features

Add books to your reading list
View all your books in one place
Track reading status
Delete books from the list

Getting Started
Prerequisites
Make sure you have these installed:

Node.js
MongoDB (local or Atlas)

Installation

Clone the repository

bash   git clone https://github.com/Mayabound/book-reading-tracker.git
   cd book-reading-tracker

Setup the backend

bash   cd backend
   npm install

Create a .env file inside the backend folder

   MONGO_URI=your_mongodb_connection_string
   PORT=5000

Start the backend server

bash   node server.js

Setup the frontend (in a new terminal)

bash   cd frontend
   npm install
   npm start

Open your browser and go to http://localhost:3000

Project Structure
book-reading-tracker/
├── backend/
│   ├── models/
│   │   └── Books.js
│   ├── routes/
│   │   └── books.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    └── src/
        ├── components/
        │   ├── BookForm.js
        │   └── BookList.js
        ├── App.js
        └── index.js
Author
Made by Mayabound
