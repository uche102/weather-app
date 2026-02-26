# Weather Application

This is a simple weather application that integrates with the Open Weather API to fetch and display weather information based on user input.

## Project Structure

```
weather-app
├── src
│   ├── index.tsx          # Entry point of the React application
│   ├── App.tsx            # Main App component
│   ├── components          # Contains reusable components
│   │   ├── Weather.tsx     # Displays weather information
│   │   └── SearchBar.tsx   # Allows user to search for weather data
│   ├── services            # API interaction logic
│   │   └── openWeather.ts  # Functions to fetch weather data
│   ├── styles              # CSS styles for the application
│   │   └── weather.css     # Styles for weather components
│   └── types               # TypeScript types and interfaces
│       └── index.ts        # Type definitions
├── public
│   └── index.html          # Main HTML file
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── .env.example            # Example environment variables
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd weather-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   - Rename `.env.example` to `.env` and add your Open Weather API key.

4. **Run the application:**
   ```
   npm start
   ```

## Usage

- Enter a city name in the search bar to fetch the current weather data.
- The weather information will be displayed below the search bar.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.