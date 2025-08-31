// Mock coverage data for major US cities and carriers
const coverageData = {
    // Major cities with coordinates and coverage information
    cities: {
        'new york': { lat: 40.7128, lng: -74.0060, name: 'New York, NY' },
        'los angeles': { lat: 34.0522, lng: -118.2437, name: 'Los Angeles, CA' },
        'chicago': { lat: 41.8781, lng: -87.6298, name: 'Chicago, IL' },
        'houston': { lat: 29.7604, lng: -95.3698, name: 'Houston, TX' },
        'phoenix': { lat: 33.4484, lng: -112.0740, name: 'Phoenix, AZ' },
        'philadelphia': { lat: 39.9526, lng: -75.1652, name: 'Philadelphia, PA' },
        'san antonio': { lat: 29.4241, lng: -98.4936, name: 'San Antonio, TX' },
        'san diego': { lat: 32.7157, lng: -117.1611, name: 'San Diego, CA' },
        'dallas': { lat: 32.7767, lng: -96.7970, name: 'Dallas, TX' },
        'san jose': { lat: 37.3382, lng: -121.8863, name: 'San Jose, CA' },
        'austin': { lat: 30.2672, lng: -97.7431, name: 'Austin, TX' },
        'jacksonville': { lat: 30.3322, lng: -81.6557, name: 'Jacksonville, FL' },
        'fort worth': { lat: 32.7555, lng: -97.3308, name: 'Fort Worth, TX' },
        'columbus': { lat: 39.9612, lng: -82.9988, name: 'Columbus, OH' },
        'charlotte': { lat: 35.2271, lng: -80.8431, name: 'Charlotte, NC' },
        'san francisco': { lat: 37.7749, lng: -122.4194, name: 'San Francisco, CA' },
        'indianapolis': { lat: 39.7684, lng: -86.1581, name: 'Indianapolis, IN' },
        'seattle': { lat: 47.6062, lng: -122.3321, name: 'Seattle, WA' },
        'denver': { lat: 39.7392, lng: -104.9903, name: 'Denver, CO' },
        'washington': { lat: 38.9072, lng: -77.0369, name: 'Washington, DC' },
        'boston': { lat: 42.3601, lng: -71.0589, name: 'Boston, MA' },
        'el paso': { lat: 31.7619, lng: -106.4850, name: 'El Paso, TX' },
        'detroit': { lat: 42.3314, lng: -83.0458, name: 'Detroit, MI' },
        'nashville': { lat: 36.1627, lng: -86.7816, name: 'Nashville, TN' },
        'portland': { lat: 45.5152, lng: -122.6784, name: 'Portland, OR' },
        'oklahoma city': { lat: 35.4676, lng: -97.5164, name: 'Oklahoma City, OK' },
        'las vegas': { lat: 36.1699, lng: -115.1398, name: 'Las Vegas, NV' },
        'louisville': { lat: 38.2527, lng: -85.7585, name: 'Louisville, KY' },
        'baltimore': { lat: 39.2904, lng: -76.6122, name: 'Baltimore, MD' },
        'milwaukee': { lat: 43.0389, lng: -87.9065, name: 'Milwaukee, WI' },
        'albuquerque': { lat: 35.0844, lng: -106.6504, name: 'Albuquerque, NM' },
        'tucson': { lat: 32.2226, lng: -110.9747, name: 'Tucson, AZ' },
        'fresno': { lat: 36.7378, lng: -119.7871, name: 'Fresno, CA' },
        'sacramento': { lat: 38.5816, lng: -121.4944, name: 'Sacramento, CA' },
        'kansas city': { lat: 39.0997, lng: -94.5786, name: 'Kansas City, MO' },
        'mesa': { lat: 33.4152, lng: -111.8315, name: 'Mesa, AZ' },
        'atlanta': { lat: 33.7490, lng: -84.3880, name: 'Atlanta, GA' },
        'omaha': { lat: 41.2565, lng: -95.9345, name: 'Omaha, NE' },
        'colorado springs': { lat: 38.8339, lng: -104.8214, name: 'Colorado Springs, CO' },
        'raleigh': { lat: 35.7796, lng: -78.6382, name: 'Raleigh, NC' },
        'miami': { lat: 25.7617, lng: -80.1918, name: 'Miami, FL' },
        'virginia beach': { lat: 36.8529, lng: -75.9780, name: 'Virginia Beach, VA' },
        'long beach': { lat: 33.7701, lng: -118.1937, name: 'Long Beach, CA' },
        'minneapolis': { lat: 44.9778, lng: -93.2650, name: 'Minneapolis, MN' },
        'tulsa': { lat: 36.1540, lng: -95.9928, name: 'Tulsa, OK' },
        'tampa': { lat: 27.9506, lng: -82.4572, name: 'Tampa, FL' },
        'arlington': { lat: 32.7357, lng: -97.1081, name: 'Arlington, TX' },
        'new orleans': { lat: 29.9511, lng: -90.0715, name: 'New Orleans, LA' }
    },

    // Generate coverage data for each city and carrier
    generateCoverageData: function() {
        const carriers = ['verizon', 'att', 'tmobile', 'sprint'];
        const networkTypes = ['5g', '4g', '3g'];
        const coverageData = [];

        for (const [cityKey, cityInfo] of Object.entries(this.cities)) {
            for (const carrier of carriers) {
                for (const networkType of networkTypes) {
                    // Generate realistic coverage data
                    const baseSignal = this.getBaseSignalStrength(carrier, networkType);
                    const coverage = this.generateCityAreaCoverage(cityInfo, carrier, networkType, baseSignal);
                    coverageData.push(...coverage);
                }
            }
        }
        
        return coverageData;
    },

    getBaseSignalStrength: function(carrier, networkType) {
        // Realistic signal strength ranges by carrier and network type
        const signalRanges = {
            'verizon': { '5g': [85, 95], '4g': [80, 90], '3g': [70, 80] },
            'att': { '5g': [80, 90], '4g': [75, 85], '3g': [65, 75] },
            'tmobile': { '5g': [82, 92], '4g': [77, 87], '3g': [67, 77] },
            'sprint': { '5g': [75, 85], '4g': [70, 80], '3g': [60, 70] }
        };
        
        const range = signalRanges[carrier][networkType];
        return Math.random() * (range[1] - range[0]) + range[0];
    },

    generateCityAreaCoverage: function(cityInfo, carrier, networkType, baseSignal) {
        const coverage = [];
        const radius = 0.1; // Roughly 11km radius around city center
        const points = 20; // Number of coverage points around the city
        
        for (let i = 0; i < points; i++) {
            // Generate points in a circle around the city center
            const angle = (i / points) * 2 * Math.PI;
            const distance = Math.random() * radius;
            
            const lat = cityInfo.lat + distance * Math.cos(angle);
            const lng = cityInfo.lng + distance * Math.sin(angle);
            
            // Add some variation to signal strength based on distance from center
            const distanceFromCenter = Math.sqrt(Math.pow(lat - cityInfo.lat, 2) + Math.pow(lng - cityInfo.lng, 2));
            const signalPenalty = (distanceFromCenter / radius) * 20; // Up to 20 point penalty
            const signalStrength = Math.max(20, baseSignal - signalPenalty + (Math.random() * 10 - 5));
            
            // Calculate estimated speed based on network type and signal strength
            const estimatedSpeed = this.calculateEstimatedSpeed(networkType, signalStrength);
            
            coverage.push({
                lat: lat,
                lng: lng,
                carrier: carrier,
                networkType: networkType,
                signalStrength: Math.round(signalStrength),
                estimatedSpeed: estimatedSpeed,
                city: cityInfo.name,
                coverageLevel: this.getCoverageLevel(signalStrength)
            });
        }
        
        return coverage;
    },

    calculateEstimatedSpeed: function(networkType, signalStrength) {
        // Realistic speed estimates based on network type and signal strength
        const maxSpeeds = {
            '5g': { min: 50, max: 1000 }, // 50 Mbps to 1 Gbps
            '4g': { min: 10, max: 100 },  // 10 to 100 Mbps
            '3g': { min: 1, max: 10 }     // 1 to 10 Mbps
        };
        
        const speedRange = maxSpeeds[networkType];
        const signalFactor = signalStrength / 100; // Convert to 0-1 scale
        const speed = speedRange.min + (speedRange.max - speedRange.min) * signalFactor;
        
        return Math.round(speed * 10) / 10; // Round to 1 decimal place
    },

    getCoverageLevel: function(signalStrength) {
        if (signalStrength >= 80) return 'excellent';
        if (signalStrength >= 65) return 'good';
        if (signalStrength >= 50) return 'fair';
        return 'poor';
    }
};

// Pre-generate coverage data
const allCoverageData = coverageData.generateCoverageData();

// Common zip codes and their corresponding cities
const zipCodes = {
    '10001': 'new york',
    '10002': 'new york',
    '10003': 'new york',
    '90210': 'los angeles',
    '90211': 'los angeles',
    '90212': 'los angeles',
    '60601': 'chicago',
    '60602': 'chicago',
    '60603': 'chicago',
    '77001': 'houston',
    '77002': 'houston',
    '77003': 'houston',
    '85001': 'phoenix',
    '85002': 'phoenix',
    '85003': 'phoenix',
    '19101': 'philadelphia',
    '19102': 'philadelphia',
    '19103': 'philadelphia',
    '78201': 'san antonio',
    '78202': 'san antonio',
    '78203': 'san antonio',
    '92101': 'san diego',
    '92102': 'san diego',
    '92103': 'san diego',
    '75201': 'dallas',
    '75202': 'dallas',
    '75203': 'dallas',
    '95101': 'san jose',
    '95102': 'san jose',
    '95103': 'san jose',
    '78701': 'austin',
    '78702': 'austin',
    '78703': 'austin',
    '32201': 'jacksonville',
    '32202': 'jacksonville',
    '32203': 'jacksonville',
    '76101': 'fort worth',
    '76102': 'fort worth',
    '76103': 'fort worth',
    '43201': 'columbus',
    '43202': 'columbus',
    '43203': 'columbus',
    '28201': 'charlotte',
    '28202': 'charlotte',
    '28203': 'charlotte',
    '94101': 'san francisco',
    '94102': 'san francisco',
    '94103': 'san francisco',
    '46201': 'indianapolis',
    '46202': 'indianapolis',
    '46203': 'indianapolis',
    '98101': 'seattle',
    '98102': 'seattle',
    '98103': 'seattle',
    '80201': 'denver',
    '80202': 'denver',
    '80203': 'denver',
    '20001': 'washington',
    '20002': 'washington',
    '20003': 'washington',
    '02101': 'boston',
    '02102': 'boston',
    '02103': 'boston',
    '79901': 'el paso',
    '79902': 'el paso',
    '79903': 'el paso',
    '48201': 'detroit',
    '48202': 'detroit',
    '48203': 'detroit',
    '37201': 'nashville',
    '37202': 'nashville',
    '37203': 'nashville',
    '97201': 'portland',
    '97202': 'portland',
    '97203': 'portland',
    '73101': 'oklahoma city',
    '73102': 'oklahoma city',
    '73103': 'oklahoma city',
    '89101': 'las vegas',
    '89102': 'las vegas',
    '89103': 'las vegas',
    '40201': 'louisville',
    '40202': 'louisville',
    '40203': 'louisville',
    '21201': 'baltimore',
    '21202': 'baltimore',
    '21203': 'baltimore',
    '53201': 'milwaukee',
    '53202': 'milwaukee',
    '53203': 'milwaukee',
    '87101': 'albuquerque',
    '87102': 'albuquerque',
    '87103': 'albuquerque',
    '85701': 'tucson',
    '85702': 'tucson',
    '85703': 'tucson',
    '93701': 'fresno',
    '93702': 'fresno',
    '93703': 'fresno',
    '95814': 'sacramento',
    '95815': 'sacramento',
    '95816': 'sacramento',
    '64101': 'kansas city',
    '64102': 'kansas city',
    '64103': 'kansas city',
    '85201': 'mesa',
    '85202': 'mesa',
    '85203': 'mesa',
    '30301': 'atlanta',
    '30302': 'atlanta',
    '30303': 'atlanta',
    '68101': 'omaha',
    '68102': 'omaha',
    '68103': 'omaha',
    '80901': 'colorado springs',
    '80902': 'colorado springs',
    '80903': 'colorado springs',
    '27601': 'raleigh',
    '27602': 'raleigh',
    '27603': 'raleigh',
    '33101': 'miami',
    '33102': 'miami',
    '33103': 'miami',
    '23451': 'virginia beach',
    '23452': 'virginia beach',
    '23453': 'virginia beach',
    '90801': 'long beach',
    '90802': 'long beach',
    '90803': 'long beach',
    '55401': 'minneapolis',
    '55402': 'minneapolis',
    '55403': 'minneapolis',
    '74101': 'tulsa',
    '74102': 'tulsa',
    '74103': 'tulsa',
    '33601': 'tampa',
    '33602': 'tampa',
    '33603': 'tampa',
    '76001': 'arlington',
    '76002': 'arlington',
    '76003': 'arlington',
    '70112': 'new orleans',
    '70113': 'new orleans',
    '70114': 'new orleans'
};

// Carrier information
const carrierInfo = {
    verizon: {
        name: 'Verizon',
        color: '#E31937',
        coverage: { '5g': 'Ultra Wideband 5G', '4g': '4G LTE', '3g': '3G' }
    },
    att: {
        name: 'AT&T',
        color: '#00A8E0',
        coverage: { '5g': '5G+', '4g': '4G LTE', '3g': '3G' }
    },
    tmobile: {
        name: 'T-Mobile',
        color: '#E20074',
        coverage: { '5g': '5G UC', '4g': '4G LTE', '3g': '3G' }
    },
    sprint: {
        name: 'Sprint',
        color: '#FFD100',
        coverage: { '5g': '5G', '4g': '4G LTE', '3g': '3G' }
    }
};