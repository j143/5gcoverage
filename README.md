# 5G Network Coverage Map

A comprehensive web application for checking 5G network coverage across major US cities. This interactive tool allows users to search for locations, filter by mobile carriers, and compare coverage across different network types.

![5G Coverage App](https://github.com/user-attachments/assets/2fc037d8-1119-4503-a43f-8e3f3ea743cf)

## Features

### Core Functionality
- **Interactive Coverage Map**: Visual representation of 5G coverage with clickable data points
- **Location Search**: Search by city name, address, or ZIP code
- **Carrier Filtering**: Filter coverage data by major carriers (Verizon, AT&T, T-Mobile, Sprint)
- **Network Type Comparison**: Compare 5G, 4G LTE, and 3G coverage
- **Real-time Statistics**: Display signal strength and estimated speeds

### Mobile-Friendly Design
![Mobile View](https://github.com/user-attachments/assets/d7a2e683-5b70-4168-a3bc-4d98ad21e42f)

- Responsive design that works on all device sizes
- Touch-friendly interface for mobile users
- Optimized layout for small screens

### Optional Features
- **Coverage Feedback System**: Users can submit coverage reports
- **Carrier News**: Latest 5G rollout news and updates
- **Device Recommendations**: Recommended 5G phones and carrier plans

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Custom Properties
- **Data**: Mock coverage data for demonstration
- **No Dependencies**: Pure JavaScript implementation (no external libraries required)

## Coverage Data

The application includes comprehensive mock data for:
- **45+ Major US Cities**: From New York to Los Angeles
- **4 Major Carriers**: Verizon, AT&T, T-Mobile, Sprint
- **3 Network Types**: 5G, 4G LTE, 3G
- **200+ ZIP Codes**: Common postal codes for quick searches

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/j143/5gcoverage.git
   cd 5gcoverage
   ```

2. Start a local server:
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Or any other static file server
   ```

3. Open your browser and navigate to `http://localhost:8000`

## Usage

1. **Search for a Location**: Enter a city name, address, or ZIP code in the search box
2. **Filter Coverage**: Use the carrier and network type dropdowns to filter results
3. **View Details**: Click on any coverage point to see detailed information
4. **Compare Networks**: Use the "Compare Coverage Types" button for side-by-side analysis
5. **Submit Feedback**: Share your real-world coverage experience

## Supported Locations

### Major Cities
- New York, NY
- Los Angeles, CA
- Chicago, IL
- Houston, TX
- Phoenix, AZ
- Philadelphia, PA
- San Francisco, CA
- And 35+ more major metropolitan areas

### ZIP Code Examples
- New York: 10001, 10002, 10003
- Los Angeles: 90210, 90211, 90212
- Chicago: 60601, 60602, 60603
- And 200+ more ZIP codes

## File Structure

```
5gcoverage/
├── index.html          # Main application page
├── style.css           # Styling and responsive design
├── script.js           # Application logic and functionality
├── coverage-data.js    # Mock coverage data and utilities
└── README.md           # This file
```

## Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Future Enhancements

- Integration with real carrier APIs
- GPS-based location detection
- Historical coverage data
- Speed test integration
- Coverage heatmaps
- Offline support with PWA features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## License

This project is for demonstration purposes. Coverage data is simulated and not representative of actual carrier performance.

## Disclaimer

This application uses mock data for demonstration purposes only. Actual 5G coverage may vary significantly from the data displayed. For real coverage information, please consult your carrier directly.