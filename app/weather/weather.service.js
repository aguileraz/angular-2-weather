System.register(["angular2/core", "./weather.data", "rxjs/Observable", "angular2/http", 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, weather_data_1, Observable_1, http_1;
    var WeatherService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_data_1_1) {
                weather_data_1 = weather_data_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(_http) {
                    this._http = _http;
                }
                WeatherService.prototype.getWeatherItems = function () {
                    return weather_data_1.WEATHER_ITEMS;
                };
                WeatherService.prototype.addWeatherItem = function (weatherItem) {
                    weather_data_1.WEATHER_ITEMS.push(weatherItem);
                };
                WeatherService.prototype.clearWeatherItems = function () {
                    weather_data_1.WEATHER_ITEMS.splice(0);
                };
                WeatherService.prototype.searchWeatherData = function (cityName) {
                    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=KEY&units=metric')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json());
                    });
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU9BO2dCQUVJLHdCQUFxQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07Z0JBQUcsQ0FBQztnQkFFcEMsd0NBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsNEJBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx1Q0FBYyxHQUFkLFVBQWUsV0FBd0I7b0JBQ25DLDRCQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUVELDBDQUFpQixHQUFqQjtvQkFDSSw0QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsUUFBZ0I7b0JBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsR0FBRyxRQUFRLEdBQUcseUJBQXlCLENBQUM7eUJBQzVHLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7eUJBQ2hDLEtBQUssQ0FBQyxVQUFBLEtBQUs7d0JBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO29CQUN6QyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQXhCTDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkF5QmIscUJBQUM7WUFBRCxDQXhCQSxBQXdCQyxJQUFBO1lBeEJELDJDQXdCQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtXRUFUSEVSX0lURU1TfSBmcm9tIFwiLi93ZWF0aGVyLmRhdGFcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiYW5ndWxhcjIvaHR0cFwiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXItaXRlbVwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlXG57XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBnZXRXZWF0aGVySXRlbXMoKSB7XG4gICAgICAgIHJldHVybiBXRUFUSEVSX0lURU1TO1xuICAgIH1cblxuICAgIGFkZFdlYXRoZXJJdGVtKHdlYXRoZXJJdGVtOiBXZWF0aGVySXRlbSkge1xuICAgICAgICBXRUFUSEVSX0lURU1TLnB1c2god2VhdGhlckl0ZW0pO1xuICAgIH1cblxuICAgIGNsZWFyV2VhdGhlckl0ZW1zKCkge1xuICAgICAgICBXRUFUSEVSX0lURU1TLnNwbGljZSgwKTtcbiAgICB9XG5cbiAgICBzZWFyY2hXZWF0aGVyRGF0YShjaXR5TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JyArIGNpdHlOYW1lICsgJyZBUFBJRD1LRVkmdW5pdHM9bWV0cmljJylcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
