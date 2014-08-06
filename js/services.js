angular.module('starter').service("alarmsService", [function() {
    this.alarms = [
            {
                id: 1,
                title: "Casa",
                targetAddress: "Charcas 4708 Buenos Aires",
                targetLatitude: "",
                targetLongitude: "",
                ratio: 5
            },
            {
                id: 2,
                title: "Casa",
                targetAddress: "Charcas 4708 Buenos Aires",
                targetLatitude: "",
                targetLongitude: "",
                ratio: 5
            },
            {
                id: 3,
                title: "Futbol",
                targetAddress: "Charcas 2332 Buenos Aires",
                targetLatitude: "",
                targetLongitude: "",
                ratio: 2
            }];

    this.getAlarms = function() {
        return this.alarms;
    };
	
	this.removeAlarm = function(id) {
        return _.reject(this.alarms, function(alarm){ return alarm.id == id; });
    };
}]);