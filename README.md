# Connect-to-World - Personalized News Hub

Connect-to-World is a personalized news hub that delivers curated news articles to users based on their interests. This project utilizes a public news API, GNews, to fetch news articles and employs a full-stack approach, combining React.js for the front-end, Node.js for the back-end, and MongoDB for the database. This README provides comprehensive instructions on setting up, running, and understanding the architecture of the application.

## Features

- **User Registration and Authentication:** Users can securely register and log in to their accounts.
- **Interest Selection:** Users can select and update their areas of interest such as technology, sports, politics, and health.
- **News Feed:** The platform displays a dynamic feed of news articles tailored to the user's chosen interests.
- **Article Saving:** Users can save articles to their account for later reading.
- **Article Recommendation:** The system suggests articles based on the user's reading history and preferences.

## Prerequisites

- Node.js installed
- MongoDB installed and running
- Git installed
- GNews API key

## Setup

1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/connect-to-world.git
   cd connect-to-world
   ```

2. **Install Dependencies:**
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the `backend` directory with the following content:
   ```
   DB_URL=mongodb://localhost:27017/connect-to-world
   GNEWS_API_KEY=your_gnews_api_key
   ```

4. **Database Setup:**
   Make sure your MongoDB instance is running. The application will use the `connect-to-world` database.

5. **Run the Application:**
   Open two terminal windows:
   ```
   # Terminal 1 - Frontend
   cd frontend
   npm start

   # Terminal 2 - Backend
   cd backend
   npm start
   ```

6. Access the application at `http://localhost:3000`.

## Architecture

- Front-end: Developed using React.js, providing a user-friendly and responsive UI.
- Back-end: Built with Node.js, handling authentication, API interactions, and article recommendations.
- Database: Utilizes MongoDB to store user data, preferences, and saved articles.
- APIs: The back-end exposes RESTful APIs for communication between the front-end and the database.
- Version Control: The project uses Git for version control, hosted on GitHub.

## Decisions and Considerations

- **Front-end Framework:** React.js was chosen for its component-based architecture and efficient rendering.
- **Back-end Framework:** Node.js was selected due to its non-blocking I/O and suitability for building scalable APIs.
- **Database Choice:** MongoDB, a NoSQL database, was opted for its flexibility in handling diverse data types.
- **GNews API:** The GNews API provides a wide range of news articles to fulfill the project's requirements.
- **Version Control:** Git simplifies collaboration and version tracking among team members.
 
 