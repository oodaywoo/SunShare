import os
from flask import Flask, request, jsonify
import requests
from dotenv import load_dotenv

load_dotenv()
APP = Flask(__name__)
OWM_KEY = os.getenv("OPENWEATHER_API_KEY")

@APP.route('/api/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city', 'Sydney')
    res = requests.get(
        f"https://api.openweathermap.org/data/2.5/onecall?lat={{lat}}&lon={{lon}}&exclude=minutely,hourly,alerts&units=metric&appid={OWM_KEY}"
    )
    data = res.json()
    return jsonify(data)

@APP.route('/api/recommend', methods=['POST'])
def recommend():
    '''Simple rule-based gear recommendation'''
    payload = request.json
    uv = payload.get('uv_index', 0)
    temp = payload.get('temp', 0)
    gear = []
    if uv >= 3:
        gear.append('Sunscreen (SPF 30+)' )
    if uv >= 6:
        gear.extend(['Hat', 'Sunglasses'])
    if temp >= 30:
        gear.append('Water Bottle')
    return jsonify({'recommendations': gear})

if __name__ == '__main__':
    APP.run(debug=True)
