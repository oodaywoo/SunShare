# SunShare

**SunShare** is a web application that helps you plan the perfect summer day at the beach. It fuses:
- **Weather & UV APIs** to fetch current conditions
- **Simple ML rules** to recommend protective gear
- **Data Visualization** (Chart.js) to display a 7-day outlook

## Features
- UV index & temperature lookup by city
- Activity & gear suggestions (hat, sunscreen, sunglasses)
- 7-day weather chart

## Getting Started

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Technologies
- Python, Flask
- React, Create React App
- Chart.js

## License
MIT
