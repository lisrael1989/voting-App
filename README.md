
# Voting App NBA 🏀

A simple and interactive voting application built with React and React Router. Users can vote for their favorite NBA players, log in as admin to manage data, and explore voting results. The app features authentication and role-based routing for an engaging user experience.

### Live Demo
[Voting App NBA](https://voting-app-nba.netlify.app/)

---

## Features
- **Login and Sign Up:** Secure user login with the ability to sign up for a new account.
- **Role-Based Routing:** 
  - Regular users can vote for players.
  - Admin users can manage players and view detailed results.
- **Voting System:** Vote for your favorite NBA players and see the results updated in real-time.
- **Guest Access:** Explore the app as a guest without signing up.
- **LocalStorage Integration:** Persist user data, players, and votes locally for seamless functionality.

---

## Tech Stack
- **Frontend:**
  - React
  - React Router (for routing and navigation)
  - CSS (for styling)

- **State Management:**
  - React Hooks (`useState`, `useEffect`)
  - Custom Hook (`useAuth`) for authentication logic

- **Data Storage:**
  - `localStorage` for persisting user and player data

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/voting-app-nba.git
   ```
2. Navigate to the project directory:
   ```bash
   cd voting-app-nba
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Screenshots

### Home Page
![Home Page](https://res.cloudinary.com/dpixrsdwh/image/upload/v1732021920/nba1_rrell4.png)

### Players Page
![Players Page](https://res.cloudinary.com/dpixrsdwh/image/upload/v1732021923/nba2_ubvim4.png)

### Admin Dashboard
![Admin Dashboard](https://res.cloudinary.com/dpixrsdwh/image/upload/v1732021919/nba3_w8q21a.png)

---

## How to Use
1. **Sign Up or Login:**
   - Create an account to start voting.
   - Admin users can log in with admin credentials to access special features.

2. **Vote for Players:**
   - Navigate to the players' page to vote for your favorite NBA players.
   - Votes are stored and reflected in real-time.

3. **Admin Features:**
   - Manage players and view voting results in the admin section.

4. **Guest Access:**
   - Explore the app as a guest without needing an account.

---

## Future Enhancements
- Add a backend with database integration for centralized data management.
- Introduce real-time updates using WebSockets or Firebase.
- Implement user profile pages with personalized stats.

---

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

---

## License
This project is licensed under the MIT License.

---

## Author
Developed by [Your Name](https://github.com/your-username)
