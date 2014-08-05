angular.module('starter').service("alarmListService", [function() {
    this.alarmList = [
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
                title: "Trabajo",
                targetAddress: "Charcas 2332 Buenos Aires",
                targetLatitude: "",
                targetLongitude: "",
                ratio: 2
            }];

    this.getAlarmList = function() {
        return this.alarmList;
    };
    
    this.addAlarm = function()
	{
	    var size = _.size(this.alarmList);
	    if(size == 0)
	        this.alarmList.push();
	    else
	        this.alarmList.push(new Alarm(parseInt($scope.clases[size-1].id) + 1));
	};
	
	this.removeAlarm = function(id)
	{
	    this.alarmList = _.reject(this.alarmList, function(alarms){ return alarms.id == id; });
	};
}]);