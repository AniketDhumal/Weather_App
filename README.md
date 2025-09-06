<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Weather App 🌤️

A full-stack weather application built with Node.js, Express, Vite, and MongoDB. This app fetches real-time weather data and allows users to save favorite locations.
Features
Current Weather: View the temperature, humidity, wind speed, and weather conditions.
Hourly \& Daily Forecast: Detailed forecasts for better planning.
Favorites: Save and manage favorite locations.
Responsive UI: Built with Vite for a fast, modern frontend.
Persistent Storage: User data stored securely in MongoDB.
Tech Stack
Frontend: Vite, React (or your framework)
Backend: Node.js, Express
Database: MongoDB (Atlas or local)
API: OpenWeatherMap API
Setup Instructions
Clone the Repository
git clone [https://github.com/AniketDhumal/Weather.git](https://github.com/AniketDhumal/Weather.git)
cd Weather

Install Dependencies
Backend:
cd server
npm install

Frontend:
cd client
npm install

Configure Environment Variables
Create a .env file in the server folder:
MONGO_URI=your_mongodb_connection_string
PORT=5000
OPENWEATHER_API_KEY=your_openweathermap_api_key

Run the Application
Backend:
cd server
npm run dev

Frontend:
cd client
npm run dev

The app should now be running locally at http://localhost:5173 (Vite default).
Contributing
Contributions are welcome! Fork the repository and submit a pull request. here give me readme.md file

Here’s a polished `README.md` file for your Weather App project:

***

# Weather App 🌤️

A full-stack weather application built with **Node.js**, **Express**, **Vite**, and **MongoDB**.
This app fetches real-time weather data and allows users to save favorite locations.

***

## Features

- **Current Weather**: View temperature, humidity, wind speed, and weather conditions.
- **Hourly \& Daily Forecast**: Get detailed forecasts for better planning.
- **Favorites**: Save and manage your favorite locations.
- **Responsive UI**: Built using **Vite** for a fast, modern frontend.
- **Persistent Storage**: User data stored securely in **MongoDB**.

***

## Tech Stack

- **Frontend**: Vite, React
- **Backend**: Node.js, Express
- **Database**: MongoDB (Atlas or local)
- **API**: OpenWeatherMap API

***

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/AniketDhumal/Weather.git
cd Weather
```


### 2. Install Dependencies

**Backend**

```bash
cd server
npm install
```

**Frontend**

```bash
cd client
npm install
```


### 3. Configure Environment Variables

Create a `.env` file in the **server** folder and add the following:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
OPENWEATHER_API_KEY=your_openweathermap_api_key
```


### 4. Run the Application

**Backend**

```bash
cd server
npm run dev
```

**Frontend**

```bash
cd client
npm run dev
```

The app should now be running locally at:
👉 `http://localhost:5173` (Vite default)

***

## Contributing

Contributions are welcome!

- Fork the repository
- Create a new branch (`feature/my-feature`)
- Commit your changes
- Push the branch
- Open a Pull Request 🚀

***

## License

This project is open-source and available under the [MIT License](LICENSE).

***

Would you like me to also include **screenshots and API usage details** in the README to make it more professional for GitHub?

