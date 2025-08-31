// 5G Coverage Map Application - Simplified Version
class CoverageMap {
    constructor() {
        this.map = null;
        this.currentCoverageFilter = 'all';
        this.currentNetworkFilter = '5g';
        this.currentLocation = null;
        this.coveragePoints = [];
        
        this.initializeMap();
        this.bindEvents();
        this.loadDefaultLocation();
    }

    initializeMap() {
        // Initialize a simple canvas-based map
        const mapContainer = document.getElementById('map');
        mapContainer.innerHTML = `
            <div class="simple-map" id="simpleMap">
                <div class="map-header">
                    <h3 id="mapTitle">Interactive Coverage Map</h3>
                    <p id="mapLocation">Select a location to view coverage</p>
                </div>
                <div class="coverage-grid" id="coverageGrid">
                    <!-- Coverage visualization will be populated here -->
                </div>
                <div class="map-controls">
                    <button id="zoomIn" class="map-btn">Zoom In</button>
                    <button id="zoomOut" class="map-btn">Zoom Out</button>
                    <button id="centerMap" class="map-btn">Center</button>
                </div>
            </div>
        `;

        // Add simple map controls
        document.getElementById('zoomIn').addEventListener('click', () => this.zoomIn());
        document.getElementById('zoomOut').addEventListener('click', () => this.zoomOut());
        document.getElementById('centerMap').addEventListener('click', () => this.centerMap());
    }

    bindEvents() {
        // Search functionality
        document.getElementById('searchBtn').addEventListener('click', () => {
            this.performSearch();
        });

        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // Filter events
        document.getElementById('carrierFilter').addEventListener('change', (e) => {
            this.currentCoverageFilter = e.target.value;
            this.updateCoverageDisplay();
        });

        document.getElementById('networkType').addEventListener('change', (e) => {
            this.currentNetworkFilter = e.target.value;
            this.updateCoverageDisplay();
        });

        // Comparison button
        document.getElementById('compareBtn').addEventListener('click', () => {
            this.showComparison();
        });

        // Footer links
        document.getElementById('feedbackLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.showFeedbackModal();
        });

        document.getElementById('newsLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.showNewsModal();
        });

        document.getElementById('devicesLink').addEventListener('click', (e) => {
            e.preventDefault();
            this.showDevicesModal();
        });

        // Modal close
        document.querySelector('.close').addEventListener('click', () => {
            document.getElementById('modal').style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            const modal = document.getElementById('modal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    loadDefaultLocation() {
        // Load New York City as default
        this.searchForLocation('New York, NY');
    }

    performSearch() {
        const searchTerm = document.getElementById('searchInput').value.trim();
        if (!searchTerm) {
            alert('Please enter a city, address, or zip code');
            return;
        }

        this.searchForLocation(searchTerm);
    }

    searchForLocation(searchTerm) {
        const normalizedTerm = searchTerm.toLowerCase();
        
        // Check if it's a zip code
        let cityKey = zipCodes[searchTerm];
        
        if (!cityKey) {
            // Check if it's a city name
            cityKey = Object.keys(coverageData.cities).find(key => 
                key.includes(normalizedTerm) || 
                coverageData.cities[key].name.toLowerCase().includes(normalizedTerm)
            );
        }

        if (cityKey && coverageData.cities[cityKey]) {
            const city = coverageData.cities[cityKey];
            this.currentLocation = { ...city, key: cityKey };
            this.updateCoverageDisplay();
            this.updateLocationInfo(city.name);
        } else {
            // Try to find partial matches
            this.simulateGeocoding(searchTerm);
        }
    }

    simulateGeocoding(address) {
        // Simulate geocoding by finding the closest city match
        const words = address.toLowerCase().split(/\s+/);
        let bestMatch = null;
        let maxMatches = 0;

        for (const [cityKey, cityData] of Object.entries(coverageData.cities)) {
            const cityWords = cityData.name.toLowerCase().split(/\s+/);
            const matches = words.filter(word => 
                cityWords.some(cityWord => cityWord.includes(word) || word.includes(cityWord))
            ).length;

            if (matches > maxMatches) {
                maxMatches = matches;
                bestMatch = { key: cityKey, ...cityData };
            }
        }

        if (bestMatch && maxMatches > 0) {
            this.currentLocation = bestMatch;
            this.updateCoverageDisplay();
            this.updateLocationInfo(bestMatch.name);
        } else {
            alert('Location not found. Please try a major US city or zip code.');
        }
    }

    updateCoverageDisplay() {
        if (!this.currentLocation) return;

        // Update map header
        document.getElementById('mapTitle').textContent = `Coverage Map - ${this.currentLocation.name}`;
        document.getElementById('mapLocation').textContent = `Coordinates: ${this.currentLocation.lat.toFixed(4)}, ${this.currentLocation.lng.toFixed(4)}`;

        // Get filtered coverage data
        const filteredData = this.getFilteredCoverageData();
        
        // Display coverage visualization
        this.displayCoverageGrid(filteredData);
        
        // Update statistics
        this.updateStatistics(filteredData);
    }

    getFilteredCoverageData() {
        let data = allCoverageData.filter(point => {
            const distance = this.calculateDistance(
                this.currentLocation.lat, this.currentLocation.lng,
                point.lat, point.lng
            );
            return distance <= 20; // Within 20km of the searched location
        });

        // Filter by carrier
        if (this.currentCoverageFilter !== 'all') {
            data = data.filter(point => point.carrier === this.currentCoverageFilter);
        }

        // Filter by network type
        if (this.currentNetworkFilter !== 'all') {
            data = data.filter(point => point.networkType === this.currentNetworkFilter);
        }

        return data;
    }

    displayCoverageGrid(data) {
        const grid = document.getElementById('coverageGrid');
        
        if (data.length === 0) {
            grid.innerHTML = '<div class="no-coverage">No coverage data available for the selected filters.</div>';
            return;
        }

        // Group data by carrier for better visualization
        const carrierGroups = this.groupDataByCarrier(data);
        
        let html = '<div class="coverage-visualization">';
        
        for (const [carrier, points] of Object.entries(carrierGroups)) {
            const carrierData = carrierInfo[carrier];
            html += `
                <div class="carrier-section" style="border-left: 4px solid ${carrierData.color};">
                    <h4>${carrierData.name}</h4>
                    <div class="coverage-points">
            `;
            
            points.slice(0, 12).forEach((point, index) => {
                html += `
                    <div class="coverage-point ${point.coverageLevel}" 
                         onclick="window.coverageMap.showPointDetails('${carrier}', ${index})"
                         title="${point.networkType.toUpperCase()} - ${point.signalStrength}% - ${point.estimatedSpeed} Mbps">
                        <div class="point-marker" style="background-color: ${carrierData.color}"></div>
                        <div class="point-info">
                            <span class="network-type">${point.networkType.toUpperCase()}</span>
                            <span class="signal-strength">${point.signalStrength}%</span>
                        </div>
                    </div>
                `;
            });
            
            html += `
                    </div>
                </div>
            `;
        }
        
        html += '</div>';
        grid.innerHTML = html;
        
        // Store data for point details
        this.coveragePoints = data;
        window.coverageMap = this; // Make accessible for onclick
    }

    groupDataByCarrier(data) {
        const grouped = {};
        data.forEach(point => {
            if (!grouped[point.carrier]) {
                grouped[point.carrier] = [];
            }
            grouped[point.carrier].push(point);
        });
        return grouped;
    }

    showPointDetails(carrier, index) {
        const carrierData = carrierInfo[carrier];
        const points = this.coveragePoints.filter(p => p.carrier === carrier);
        const point = points[index];
        
        if (!point) return;
        
        alert(`${carrierData.name} Coverage Details\n\n` +
              `Network: ${point.networkType.toUpperCase()}\n` +
              `Signal Strength: ${point.signalStrength}%\n` +
              `Estimated Speed: ${point.estimatedSpeed} Mbps\n` +
              `Coverage Quality: ${point.coverageLevel}\n` +
              `Location: ${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}`);
    }

    updateStatistics(data) {
        if (data.length === 0) {
            this.clearStatistics();
            return;
        }

        // Calculate statistics
        const fiveGData = data.filter(p => p.networkType === '5g');
        const fourGData = data.filter(p => p.networkType === '4g');
        const avgSignal = data.reduce((sum, p) => sum + p.signalStrength, 0) / data.length;
        const avgSpeed = data.reduce((sum, p) => sum + p.estimatedSpeed, 0) / data.length;

        // Update display
        document.getElementById('fiveGCoverage').textContent = 
            fiveGData.length > 0 ? `${Math.round((fiveGData.length / (fiveGData.length + fourGData.length + data.filter(p => p.networkType === '3g').length)) * 100)}%` : 'No data';
        
        document.getElementById('fourGCoverage').textContent = 
            fourGData.length > 0 ? `${Math.round((fourGData.length / (fiveGData.length + fourGData.length + data.filter(p => p.networkType === '3g').length)) * 100)}%` : 'No data';
        
        document.getElementById('signalStrength').textContent = `${Math.round(avgSignal)}%`;
        document.getElementById('estimatedSpeed').textContent = `${Math.round(avgSpeed * 10) / 10} Mbps`;
    }

    clearStatistics() {
        document.getElementById('fiveGCoverage').textContent = '--';
        document.getElementById('fourGCoverage').textContent = '--';
        document.getElementById('signalStrength').textContent = '--';
        document.getElementById('estimatedSpeed').textContent = '--';
    }

    updateLocationInfo(locationName) {
        // Update the search input to show the found location
        document.getElementById('searchInput').value = locationName;
    }

    zoomIn() {
        // Simulate zoom functionality
        alert('Zoom In - This would show more detailed coverage data in a full implementation');
    }

    zoomOut() {
        // Simulate zoom functionality
        alert('Zoom Out - This would show broader coverage area in a full implementation');
    }

    centerMap() {
        // Re-center on current location
        if (this.currentLocation) {
            this.updateCoverageDisplay();
        }
    }

    showComparison() {
        if (!this.currentLocation) {
            alert('Please search for a location first');
            return;
        }

        const data = allCoverageData.filter(point => {
            const distance = this.calculateDistance(
                this.currentLocation.lat, this.currentLocation.lng,
                point.lat, point.lng
            );
            return distance <= 20;
        });

        const comparison = this.generateComparisonData(data);
        this.displayComparison(comparison);
    }

    generateComparisonData(data) {
        const networks = ['5g', '4g', '3g'];
        const carriers = ['verizon', 'att', 'tmobile', 'sprint'];
        const comparison = {};

        networks.forEach(network => {
            comparison[network] = {};
            carriers.forEach(carrier => {
                const carrierData = data.filter(p => p.carrier === carrier && p.networkType === network);
                if (carrierData.length > 0) {
                    const avgSignal = carrierData.reduce((sum, p) => sum + p.signalStrength, 0) / carrierData.length;
                    const avgSpeed = carrierData.reduce((sum, p) => sum + p.estimatedSpeed, 0) / carrierData.length;
                    comparison[network][carrier] = {
                        signal: Math.round(avgSignal),
                        speed: Math.round(avgSpeed * 10) / 10,
                        coverage: carrierData.length
                    };
                }
            });
        });

        return comparison;
    }

    displayComparison(comparison) {
        let html = '<h3>Network Coverage Comparison</h3>';
        
        Object.keys(comparison).forEach(network => {
            html += `<h4>${network.toUpperCase()} Coverage</h4>`;
            html += '<table style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">';
            html += '<tr style="background: #f0f0f0;"><th style="border: 1px solid #ddd; padding: 8px;">Carrier</th><th style="border: 1px solid #ddd; padding: 8px;">Signal</th><th style="border: 1px solid #ddd; padding: 8px;">Speed</th><th style="border: 1px solid #ddd; padding: 8px;">Points</th></tr>';
            
            Object.keys(comparison[network]).forEach(carrier => {
                const data = comparison[network][carrier];
                const carrierName = carrierInfo[carrier].name;
                html += `<tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${carrierName}</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${data.signal}%</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${data.speed} Mbps</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${data.coverage}</td>
                </tr>`;
            });
            
            html += '</table>';
        });

        document.getElementById('comparisonResults').innerHTML = html;
    }

    showFeedbackModal() {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2>Submit Coverage Feedback</h2>
            <form id="feedbackForm">
                <div style="margin-bottom: 15px;">
                    <label for="feedbackLocation">Location:</label><br>
                    <input type="text" id="feedbackLocation" style="width: 100%; padding: 8px; margin-top: 5px;" 
                           placeholder="Enter address or location" value="${this.currentLocation ? this.currentLocation.name : ''}">
                </div>
                
                <div style="margin-bottom: 15px;">
                    <label for="feedbackCarrier">Carrier:</label><br>
                    <select id="feedbackCarrier" style="width: 100%; padding: 8px; margin-top: 5px;">
                        <option value="">Select Carrier</option>
                        <option value="verizon">Verizon</option>
                        <option value="att">AT&T</option>
                        <option value="tmobile">T-Mobile</option>
                        <option value="sprint">Sprint</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <label for="feedbackNetwork">Network Type:</label><br>
                    <select id="feedbackNetwork" style="width: 100%; padding: 8px; margin-top: 5px;">
                        <option value="">Select Network</option>
                        <option value="5g">5G</option>
                        <option value="4g">4G LTE</option>
                        <option value="3g">3G</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <label for="feedbackQuality">Coverage Quality:</label><br>
                    <select id="feedbackQuality" style="width: 100%; padding: 8px; margin-top: 5px;">
                        <option value="">Select Quality</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="poor">Poor</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 15px;">
                    <label for="feedbackComments">Additional Comments:</label><br>
                    <textarea id="feedbackComments" rows="4" style="width: 100%; padding: 8px; margin-top: 5px;" 
                              placeholder="Share your experience..."></textarea>
                </div>
                
                <button type="submit" style="background: #667eea; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
                    Submit Feedback
                </button>
            </form>
        `;

        document.getElementById('feedbackForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your feedback! This helps improve our coverage data.');
            document.getElementById('modal').style.display = 'none';
        });

        document.getElementById('modal').style.display = 'block';
    }

    showNewsModal() {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2>5G Carrier News & Updates</h2>
            <div style="max-height: 400px; overflow-y: auto;">
                <div style="border-bottom: 1px solid #eee; padding: 15px 0;">
                    <h3>Verizon Expands 5G Ultra Wideband</h3>
                    <p style="color: #666; font-size: 0.9em;">December 2024</p>
                    <p>Verizon announces expansion of 5G Ultra Wideband to 50+ new cities, bringing faster speeds and lower latency to millions of customers.</p>
                </div>
                
                <div style="border-bottom: 1px solid #eee; padding: 15px 0;">
                    <h3>T-Mobile Achieves Nationwide 5G Coverage</h3>
                    <p style="color: #666; font-size: 0.9em;">November 2024</p>
                    <p>T-Mobile announces 5G UC coverage now reaches 95% of Americans, with significant improvements in rural areas.</p>
                </div>
                
                <div style="border-bottom: 1px solid #eee; padding: 15px 0;">
                    <h3>AT&T 5G+ Network Enhancements</h3>
                    <p style="color: #666; font-size: 0.9em;">October 2024</p>
                    <p>AT&T invests $2B in 5G+ infrastructure improvements, focusing on urban density and enterprise applications.</p>
                </div>
                
                <div style="padding: 15px 0;">
                    <h3>Sprint Network Integration Complete</h3>
                    <p style="color: #666; font-size: 0.9em;">September 2024</p>
                    <p>T-Mobile completes final phase of Sprint network integration, providing seamless 5G coverage across merged networks.</p>
                </div>
            </div>
        `;

        document.getElementById('modal').style.display = 'block';
    }

    showDevicesModal() {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h2>Recommended 5G Devices & Plans</h2>
            <div style="max-height: 400px; overflow-y: auto;">
                <h3>Popular 5G Smartphones</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
                    <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;">
                        <h4>iPhone 15 Pro</h4>
                        <p style="font-size: 0.9em; color: #666;">Premium 5G performance with advanced features</p>
                        <p style="font-weight: bold; color: #667eea;">Starting at $999</p>
                    </div>
                    
                    <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;">
                        <h4>Samsung Galaxy S24</h4>
                        <p style="font-size: 0.9em; color: #666;">Latest Android with 5G capabilities</p>
                        <p style="font-weight: bold; color: #667eea;">Starting at $799</p>
                    </div>
                    
                    <div style="border: 1px solid #ddd; padding: 10px; border-radius: 5px;">
                        <h4>Google Pixel 8</h4>
                        <p style="font-size: 0.9em; color: #666;">Pure Android experience with 5G</p>
                        <p style="font-weight: bold; color: #667eea;">Starting at $699</p>
                    </div>
                </div>
                
                <h3>5G Plans by Carrier</h3>
                <div style="margin-top: 15px;">
                    <div style="margin-bottom: 15px;">
                        <h4>Verizon 5G Plans</h4>
                        <ul style="margin-left: 20px;">
                            <li>5G Start - $70/month (nationwide 5G)</li>
                            <li>5G Play More - $80/month (premium data + perks)</li>
                            <li>5G Do More - $90/month (business features)</li>
                            <li>5G Get More - $100/month (unlimited premium)</li>
                        </ul>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h4>T-Mobile 5G Plans</h4>
                        <ul style="margin-left: 20px;">
                            <li>Essentials - $60/month (5G included)</li>
                            <li>Magenta - $70/month (5G + benefits)</li>
                            <li>Magenta MAX - $85/month (unlimited premium 5G)</li>
                        </ul>
                    </div>
                    
                    <div style="margin-bottom: 15px;">
                        <h4>AT&T 5G Plans</h4>
                        <ul style="margin-left: 20px;">
                            <li>Unlimited Starter - $65/month (5G access)</li>
                            <li>Unlimited Extra - $75/month (5G + hotspot)</li>
                            <li>Unlimited Elite - $85/month (premium 5G)</li>
                        </ul>
                    </div>
                </div>
                
                <p style="margin-top: 20px; padding: 15px; background: #f0f0f0; border-radius: 5px; font-size: 0.9em;">
                    <strong>Note:</strong> Prices are subject to change and may vary by location. Contact carriers directly for current pricing and availability.
                </p>
            </div>
        `;

        document.getElementById('modal').style.display = 'block';
    }

    calculateDistance(lat1, lng1, lat2, lng2) {
        // Calculate distance using Haversine formula
        const R = 6371; // Earth's radius in kilometers
        const dLat = this.toRad(lat2 - lat1);
        const dLng = this.toRad(lng2 - lng1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    toRad(deg) {
        return deg * (Math.PI / 180);
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CoverageMap();
});