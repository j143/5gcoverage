// Mock coverage data for major cities and carriers
const coverageData = {
    // US cities with coordinates and coverage information
    us: {
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
        }
    },

    // Indian cities with coordinates and coverage information
    india: {
        cities: {
            'mumbai': { lat: 19.0760, lng: 72.8777, name: 'Mumbai, Maharashtra' },
            'delhi': { lat: 28.7041, lng: 77.1025, name: 'Delhi' },
            'bangalore': { lat: 12.9716, lng: 77.5946, name: 'Bangalore, Karnataka' },
            'bengaluru': { lat: 12.9716, lng: 77.5946, name: 'Bangalore, Karnataka' },
            'hyderabad': { lat: 17.3850, lng: 78.4867, name: 'Hyderabad, Telangana' },
            'ahmedabad': { lat: 23.0225, lng: 72.5714, name: 'Ahmedabad, Gujarat' },
            'chennai': { lat: 13.0827, lng: 80.2707, name: 'Chennai, Tamil Nadu' },
            'kolkata': { lat: 22.5726, lng: 88.3639, name: 'Kolkata, West Bengal' },
            'surat': { lat: 21.1702, lng: 72.8311, name: 'Surat, Gujarat' },
            'pune': { lat: 18.5204, lng: 73.8567, name: 'Pune, Maharashtra' },
            'jaipur': { lat: 26.9124, lng: 75.7873, name: 'Jaipur, Rajasthan' },
            'lucknow': { lat: 26.8467, lng: 80.9462, name: 'Lucknow, Uttar Pradesh' },
            'kanpur': { lat: 26.4499, lng: 80.3319, name: 'Kanpur, Uttar Pradesh' },
            'nagpur': { lat: 21.1458, lng: 79.0882, name: 'Nagpur, Maharashtra' },
            'indore': { lat: 22.7196, lng: 75.8577, name: 'Indore, Madhya Pradesh' },
            'thane': { lat: 19.2183, lng: 72.9781, name: 'Thane, Maharashtra' },
            'bhopal': { lat: 23.2599, lng: 77.4126, name: 'Bhopal, Madhya Pradesh' },
            'visakhapatnam': { lat: 17.6868, lng: 83.2185, name: 'Visakhapatnam, Andhra Pradesh' },
            'pimpri chinchwad': { lat: 18.6298, lng: 73.7997, name: 'Pimpri-Chinchwad, Maharashtra' },
            'patna': { lat: 25.5941, lng: 85.1376, name: 'Patna, Bihar' },
            'vadodara': { lat: 22.3072, lng: 73.1812, name: 'Vadodara, Gujarat' },
            'ghaziabad': { lat: 28.6692, lng: 77.4538, name: 'Ghaziabad, Uttar Pradesh' },
            'ludhiana': { lat: 30.9010, lng: 75.8573, name: 'Ludhiana, Punjab' },
            'agra': { lat: 27.1767, lng: 78.0081, name: 'Agra, Uttar Pradesh' },
            'nashik': { lat: 19.9975, lng: 73.7898, name: 'Nashik, Maharashtra' },
            'faridabad': { lat: 28.4089, lng: 77.3178, name: 'Faridabad, Haryana' },
            'meerut': { lat: 28.9845, lng: 77.7064, name: 'Meerut, Uttar Pradesh' },
            'rajkot': { lat: 22.3039, lng: 70.8022, name: 'Rajkot, Gujarat' },
            'kalyan dombivli': { lat: 19.2402, lng: 73.1305, name: 'Kalyan-Dombivli, Maharashtra' },
            'vasai virar': { lat: 19.4412, lng: 72.8397, name: 'Vasai-Virar, Maharashtra' },
            'varanasi': { lat: 25.3176, lng: 82.9739, name: 'Varanasi, Uttar Pradesh' },
            'srinagar': { lat: 34.0837, lng: 74.7973, name: 'Srinagar, Jammu and Kashmir' },
            'dhanbad': { lat: 23.7957, lng: 86.4304, name: 'Dhanbad, Jharkhand' },
            'jodhpur': { lat: 26.2389, lng: 73.0243, name: 'Jodhpur, Rajasthan' },
            'amritsar': { lat: 31.6340, lng: 74.8723, name: 'Amritsar, Punjab' },
            'raipur': { lat: 21.2514, lng: 81.6296, name: 'Raipur, Chhattisgarh' },
            'allahabad': { lat: 25.4358, lng: 81.8463, name: 'Prayagraj, Uttar Pradesh' },
            'prayagraj': { lat: 25.4358, lng: 81.8463, name: 'Prayagraj, Uttar Pradesh' },
            'coimbatore': { lat: 11.0168, lng: 76.9558, name: 'Coimbatore, Tamil Nadu' },
            'jabalpur': { lat: 23.1815, lng: 79.9864, name: 'Jabalpur, Madhya Pradesh' },
            'gwalior': { lat: 26.2183, lng: 78.1828, name: 'Gwalior, Madhya Pradesh' },
            'vijayawada': { lat: 16.5062, lng: 80.6480, name: 'Vijayawada, Andhra Pradesh' },
            'howrah': { lat: 22.5958, lng: 88.2636, name: 'Howrah, West Bengal' },
            'ranchi': { lat: 23.3441, lng: 85.3096, name: 'Ranchi, Jharkhand' },
            'madurai': { lat: 9.9252, lng: 78.1198, name: 'Madurai, Tamil Nadu' },
            'chandigarh': { lat: 30.7333, lng: 76.7794, name: 'Chandigarh' },
            'thiruvananthapuram': { lat: 8.5241, lng: 76.9366, name: 'Thiruvananthapuram, Kerala' },
            'mysore': { lat: 12.2958, lng: 76.6394, name: 'Mysuru, Karnataka' },
            'mysuru': { lat: 12.2958, lng: 76.6394, name: 'Mysuru, Karnataka' },
            'bareilly': { lat: 28.3670, lng: 79.4304, name: 'Bareilly, Uttar Pradesh' },
            'gurgaon': { lat: 28.4595, lng: 77.0266, name: 'Gurugram, Haryana' },
            'gurugram': { lat: 28.4595, lng: 77.0266, name: 'Gurugram, Haryana' },
            'aligarh': { lat: 27.8974, lng: 78.0880, name: 'Aligarh, Uttar Pradesh' }
        }
    },

    // Generate coverage data for each city and carrier based on country
    generateCoverageData: function(country = 'us') {
        const carriers = country === 'us' 
            ? ['verizon', 'att', 'tmobile', 'sprint']
            : ['jio', 'airtel', 'vi', 'bsnl'];
        const networkTypes = ['5g', '4g', '3g'];
        const coverageData = [];
        const cities = this[country].cities;

        for (const [cityKey, cityInfo] of Object.entries(cities)) {
            for (const carrier of carriers) {
                for (const networkType of networkTypes) {
                    // Generate realistic coverage data
                    const baseSignal = this.getBaseSignalStrength(carrier, networkType, country);
                    const coverage = this.generateCityAreaCoverage(cityInfo, carrier, networkType, baseSignal);
                    coverageData.push(...coverage);
                }
            }
        }
        
        return coverageData;
    },

    getBaseSignalStrength: function(carrier, networkType, country = 'us') {
        // Realistic signal strength ranges by carrier and network type
        const signalRanges = country === 'us' ? {
            'verizon': { '5g': [85, 95], '4g': [80, 90], '3g': [70, 80] },
            'att': { '5g': [80, 90], '4g': [75, 85], '3g': [65, 75] },
            'tmobile': { '5g': [82, 92], '4g': [77, 87], '3g': [67, 77] },
            'sprint': { '5g': [75, 85], '4g': [70, 80], '3g': [60, 70] }
        } : {
            'jio': { '5g': [80, 92], '4g': [75, 88], '3g': [65, 75] },
            'airtel': { '5g': [78, 90], '4g': [73, 85], '3g': [63, 73] },
            'vi': { '5g': [75, 87], '4g': [70, 82], '3g': [60, 70] },
            'bsnl': { '5g': [70, 82], '4g': [65, 77], '3g': [55, 65] }
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

// Pre-generate coverage data for both countries
let allCoverageData = {
    us: coverageData.generateCoverageData('us'),
    india: coverageData.generateCoverageData('india')
};

// Current active coverage data (default to US)
let currentCoverageData = allCoverageData.us;
let currentCountry = 'us';

// Common zip codes and their corresponding cities for US
const zipCodes = {
    us: {
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
    },

    // Common PIN codes and their corresponding cities for India
    india: {
        '400001': 'mumbai',
        '400002': 'mumbai',
        '400003': 'mumbai',
        '110001': 'delhi',
        '110002': 'delhi',
        '110003': 'delhi',
        '560001': 'bangalore',
        '560002': 'bangalore',
        '560003': 'bangalore',
        '500001': 'hyderabad',
        '500002': 'hyderabad',
        '500003': 'hyderabad',
        '380001': 'ahmedabad',
        '380002': 'ahmedabad',
        '380003': 'ahmedabad',
        '600001': 'chennai',
        '600002': 'chennai',
        '600003': 'chennai',
        '700001': 'kolkata',
        '700002': 'kolkata',
        '700003': 'kolkata',
        '395001': 'surat',
        '395002': 'surat',
        '395003': 'surat',
        '411001': 'pune',
        '411002': 'pune',
        '411003': 'pune',
        '302001': 'jaipur',
        '302002': 'jaipur',
        '302003': 'jaipur',
        '226001': 'lucknow',
        '226002': 'lucknow',
        '226003': 'lucknow',
        '208001': 'kanpur',
        '208002': 'kanpur',
        '208003': 'kanpur',
        '440001': 'nagpur',
        '440002': 'nagpur',
        '440003': 'nagpur',
        '452001': 'indore',
        '452002': 'indore',
        '452003': 'indore',
        '400601': 'thane',
        '400602': 'thane',
        '400603': 'thane',
        '462001': 'bhopal',
        '462002': 'bhopal',
        '462003': 'bhopal',
        '530001': 'visakhapatnam',
        '530002': 'visakhapatnam',
        '530003': 'visakhapatnam',
        '800001': 'patna',
        '800002': 'patna',
        '800003': 'patna',
        '390001': 'vadodara',
        '390002': 'vadodara',
        '390003': 'vadodara',
        '201001': 'ghaziabad',
        '201002': 'ghaziabad',
        '201003': 'ghaziabad',
        '141001': 'ludhiana',
        '141002': 'ludhiana',
        '141003': 'ludhiana',
        '282001': 'agra',
        '282002': 'agra',
        '282003': 'agra',
        '422001': 'nashik',
        '422002': 'nashik',
        '422003': 'nashik',
        '121001': 'faridabad',
        '121002': 'faridabad',
        '121003': 'faridabad',
        '250001': 'meerut',
        '250002': 'meerut',
        '250003': 'meerut',
        '360001': 'rajkot',
        '360002': 'rajkot',
        '360003': 'rajkot',
        '421301': 'kalyan dombivli',
        '421302': 'kalyan dombivli',
        '421303': 'kalyan dombivli',
        '221001': 'varanasi',
        '221002': 'varanasi',
        '221003': 'varanasi',
        '190001': 'srinagar',
        '190002': 'srinagar',
        '190003': 'srinagar',
        '826001': 'dhanbad',
        '826002': 'dhanbad',
        '826003': 'dhanbad',
        '342001': 'jodhpur',
        '342002': 'jodhpur',
        '342003': 'jodhpur',
        '143001': 'amritsar',
        '143002': 'amritsar',
        '143003': 'amritsar',
        '492001': 'raipur',
        '492002': 'raipur',
        '492003': 'raipur',
        '211001': 'allahabad',
        '211002': 'allahabad',
        '211003': 'allahabad',
        '641001': 'coimbatore',
        '641002': 'coimbatore',
        '641003': 'coimbatore',
        '482001': 'jabalpur',
        '482002': 'jabalpur',
        '482003': 'jabalpur',
        '474001': 'gwalior',
        '474002': 'gwalior',
        '474003': 'gwalior',
        '520001': 'vijayawada',
        '520002': 'vijayawada',
        '520003': 'vijayawada',
        '834001': 'ranchi',
        '834002': 'ranchi',
        '834003': 'ranchi',
        '625001': 'madurai',
        '625002': 'madurai',
        '625003': 'madurai',
        '160001': 'chandigarh',
        '160002': 'chandigarh',
        '160003': 'chandigarh',
        '695001': 'thiruvananthapuram',
        '695002': 'thiruvananthapuram',
        '695003': 'thiruvananthapuram',
        '570001': 'mysore',
        '570002': 'mysore',
        '570003': 'mysore',
        '243001': 'bareilly',
        '243002': 'bareilly',
        '243003': 'bareilly',
        '122001': 'gurgaon',
        '122002': 'gurgaon',
        '122003': 'gurgaon',
        '202001': 'aligarh',
        '202002': 'aligarh',
        '202003': 'aligarh'
    }
};

// Carrier information for both countries
const carrierInfo = {
    us: {
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
    },
    india: {
        jio: {
            name: 'Jio',
            color: '#0066CC',
            coverage: { '5g': 'Jio True 5G', '4g': '4G VoLTE', '3g': '3G' }
        },
        airtel: {
            name: 'Airtel',
            color: '#E31937',
            coverage: { '5g': 'Airtel 5G Plus', '4g': '4G LTE', '3g': '3G' }
        },
        vi: {
            name: 'Vi (Vodafone Idea)',
            color: '#E60000',
            coverage: { '5g': 'Vi GigaNet', '4g': '4G LTE', '3g': '3G' }
        },
        bsnl: {
            name: 'BSNL',
            color: '#FF6600',
            coverage: { '5g': 'BSNL 5G', '4g': '4G LTE', '3g': '3G' }
        }
    }
};