class WeatherInfo {
    constructor(data) {
        this.coord = data.coord;
        this.weather = data.weather;
        this.base = data.base;
        this.main = data.main;
        this.visibility = data.visibility;
        this.wind = data.wind;
        this.clouds = data.clouds;
        this.dt = data.dt;
        this.sys = data.sys;
        this.timezone = data.timezone;
        this.id = data.id;
        this.name = data.name;
        this.cod = data.cod;
    }
}

export default WeatherInfo;

//"{"coord":{"lon":49.1221,"lat":55.7887},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":0.34,"feels_like":-2.75,"temp_min":0.34,"temp_max":0.41,"pressure":1017,"humidity":93,"sea_level":1017,"grnd_level":1009},"visibility":10000,"wind":{"speed":2.63,"deg":228,"gust":5.01},"clouds":{"all":100},"dt":1698679234,"sys":{"type":2,"id":48937,"country":"RU","sunrise":1698637453,"sunset":1698671400},"timezone":10800,"id":551487,"name":"Kazan’","cod":200}"