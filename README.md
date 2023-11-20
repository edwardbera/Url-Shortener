# Url-Shortener
URL shortening is a technique on the World Wide Web in which a Uniform Resource Locator may be made substantially shorter and still direct to the required page.
This repository contains the API. Here is a link to the Front-End repository -> https://github.com/edwardbera/url-shortener-ui 
Here is a link to the live application -> http://www.smur1.xyz

# Tech Stack
- Node JS
- Express
- MongoDB

# Pre-requisites
- You will need a MongoDB Cluster which you can create for free by visiting mongodb.com.
- Install Node JS on your computer.

# Installation
1. Download the repository.
2. Open the folder in your terminal.
3. Run npm install to install all dependencies.
4. Create a .env file and Add the following Environment Variables:
   - MONGODBURL (The connection string to your mongodb cluster)
   - HOMEPAGEURL (The url to you client side application)
   - DEFAULTURL (Your APIs URL)
5. In your terminal run 'node index.js' to run the server.

# Endpoints
- [GET] getUrls (Retrieves all shortened URLs in the Database)
- [POST] shorten (Accepts request body with the URL to be shortened in the form { url : "www.example.com"} and returns the shortened URL)
   


