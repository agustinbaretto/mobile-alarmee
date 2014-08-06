{"filter":false,"title":"services.js","tooltip":"/js/services.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":0},"end":{"row":41,"column":67}},"text":"angular.module('starter').service(\"alarmListService\", [function() {"},{"action":"insertText","range":{"start":{"row":41,"column":67},"end":{"row":42,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":42,"column":0},"end":{"row":80,"column":0}},"lines":["    this.alarmList = [","            {","                id: 1,","                title: \"Casa\",","                targetAddress: \"Charcas 4708 Buenos Aires\",","                targetLatitude: \"\",","                targetLongitude: \"\",","                ratio: 5","            },","            {","                id: 2,","                title: \"Casa\",","                targetAddress: \"Charcas 4708 Buenos Aires\",","                targetLatitude: \"\",","                targetLongitude: \"\",","                ratio: 5","            },","            {","                id: 3,","                title: \"Futbol\",","                targetAddress: \"Charcas 2332 Buenos Aires\",","                targetLatitude: \"\",","                targetLongitude: \"\",","                ratio: 2","            }];","","    this.getAlarmList = function() {","        return this.alarmList;","    };","    ","    this.addAlarm = function()","\t{","\t    var size = _.size(this.alarmList);","\t    if(size == 0)","\t        this.alarmList.push();","\t    else","\t        this.alarmList.push(new Alarm(parseInt($scope.clases[size-1].id) + 1));","\t};"]},{"action":"insertText","range":{"start":{"row":80,"column":0},"end":{"row":80,"column":4}},"text":"}]);"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":44}},"text":"alarmList"},{"action":"insertText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":36}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":36},"end":{"row":41,"column":37}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":37},"end":{"row":41,"column":38}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":38}},"text":"geo"},{"action":"insertText","range":{"start":{"row":41,"column":35},"end":{"row":41,"column":46}},"text":"geolocation"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":71,"column":0},"end":{"row":71,"column":4}},"text":"    "},{"action":"removeLines","range":{"start":{"row":43,"column":0},"end":{"row":71,"column":0}},"nl":"\n","lines":["            {","                id: 1,","                title: \"Casa\",","                targetAddress: \"Charcas 4708 Buenos Aires\",","                targetLatitude: \"\",","                targetLongitude: \"\",","                ratio: 5","            },","            {","                id: 2,","                title: \"Casa\",","                targetAddress: \"Charcas 4708 Buenos Aires\",","                targetLatitude: \"\",","                targetLongitude: \"\",","                ratio: 5","            },","            {","                id: 3,","                title: \"Futbol\",","                targetAddress: \"Charcas 2332 Buenos Aires\",","                targetLatitude: \"\",","                targetLongitude: \"\",","                ratio: 2","            }];","","    this.getAlarmList = function() {","        return this.alarmList;","    };"]},{"action":"removeText","range":{"start":{"row":42,"column":4},"end":{"row":42,"column":22}},"text":"this.alarmList = ["},{"action":"removeText","range":{"start":{"row":42,"column":4},"end":{"row":43,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":4},"end":{"row":43,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":4},"end":{"row":42,"column":8}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":49,"column":0},"end":{"row":49,"column":3}},"text":"\t};"},{"action":"removeLines","range":{"start":{"row":43,"column":0},"end":{"row":49,"column":0}},"nl":"\n","lines":["\t{","\t    var size = _.size(this.alarmList);","\t    if(size == 0)","\t        this.alarmList.push();","\t    else","\t        this.alarmList.push(new Alarm(parseInt($scope.clases[size-1].id) + 1));"]},{"action":"removeText","range":{"start":{"row":42,"column":9},"end":{"row":42,"column":30}},"text":"addAlarm = function()"},{"action":"removeText","range":{"start":{"row":42,"column":9},"end":{"row":43,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":42,"column":9},"end":{"row":42,"column":48}},"text":".geocoder = new google.maps.Geocoder();"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":42,"column":8},"end":{"row":42,"column":9}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":42,"column":47},"end":{"row":43,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":43,"column":0},"end":{"row":43,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":43,"column":4},"end":{"row":44,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":44,"column":0},"end":{"row":44,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":4},"end":{"row":44,"column":43}},"text":"$scope.getTargetPosition = function() {"},{"action":"insertText","range":{"start":{"row":44,"column":43},"end":{"row":45,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":45,"column":0},"end":{"row":57,"column":0}},"lines":["    $scope.geocoder.geocode( {'address': $scope.formData.targetAddress}, function(results, status) {","      $scope.$apply(function(){","        if (status == google.maps.GeocoderStatus.OK) {\t","          $scope.targetLatitude = results[0].geometry.location.lat();        ","          $scope.targetLongitude = results[0].geometry.location.lng();","          $scope.formData.targetAddress = results[0].formatted_address.substring(0, 100);","          $scope.getCurrentPosition();","        } else {","     \t   alert('Geocode was not successful for the following reason: ' + status);","        }","      });","    });"]},{"action":"insertText","range":{"start":{"row":57,"column":0},"end":{"row":57,"column":3}},"text":"  }"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":4},"end":{"row":44,"column":10}},"text":"$scope"},{"action":"insertText","range":{"start":{"row":44,"column":4},"end":{"row":44,"column":5}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":5},"end":{"row":44,"column":6}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":6},"end":{"row":44,"column":7}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":7},"end":{"row":44,"column":8}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":45,"column":4},"end":{"row":45,"column":10}},"text":"$scope"},{"action":"insertText","range":{"start":{"row":45,"column":4},"end":{"row":45,"column":8}},"text":"this"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":44,"column":38},"end":{"row":44,"column":51}},"text":"targetAddress"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":45,"column":39},"end":{"row":45,"column":55}},"text":"$scope.formData."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":55,"column":0},"end":{"row":55,"column":9}},"text":"      });"},{"action":"removeLines","range":{"start":{"row":47,"column":0},"end":{"row":55,"column":0}},"nl":"\n","lines":["        if (status == google.maps.GeocoderStatus.OK) {\t","          $scope.targetLatitude = results[0].geometry.location.lat();        ","          $scope.targetLongitude = results[0].geometry.location.lng();","          $scope.formData.targetAddress = results[0].formatted_address.substring(0, 100);","          $scope.getCurrentPosition();","        } else {","     \t   alert('Geocode was not successful for the following reason: ' + status);","        }"]},{"action":"removeText","range":{"start":{"row":46,"column":6},"end":{"row":46,"column":31}},"text":"$scope.$apply(function(){"},{"action":"removeText","range":{"start":{"row":46,"column":6},"end":{"row":47,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":46,"column":5},"end":{"row":46,"column":6}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":46,"column":4},"end":{"row":46,"column":5}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":46,"column":0},"end":{"row":46,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":45,"column":82},"end":{"row":46,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":45,"column":82},"end":{"row":46,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":45,"column":82},"end":{"row":45,"column":83}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":45,"column":82},"end":{"row":45,"column":83}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":45,"column":82},"end":{"row":45,"column":83}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":45,"column":82},"end":{"row":45,"column":83}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":82},"end":{"row":45,"column":83}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":83},"end":{"row":45,"column":84}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":84},"end":{"row":45,"column":85}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":85},"end":{"row":45,"column":86}},"text":"u"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":86},"end":{"row":45,"column":87}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":87},"end":{"row":45,"column":88}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":45,"column":88},"end":{"row":45,"column":89}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":47,"column":0},"end":{"row":47,"column":4}},"text":"}]);"},{"action":"removeLines","range":{"start":{"row":40,"column":0},"end":{"row":47,"column":0}},"nl":"\n","lines":["","angular.module('starter').service(\"geolocationService\", [function() {","    this.geocoder = new google.maps.Geocoder();","    ","    this.getTargetPosition = function(targetAddress) {","    this.geocoder.geocode( {'address': targetAddress}, function(results, status) {return });","  }"]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":39,"column":4},"end":{"row":40,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":4},"end":{"row":40,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":40,"column":0},"end":{"row":40,"column":87}},"text":"    $scope.alarms = _.reject($scope.alarms, function(alarm){ return alarm.id == id; });"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":38,"column":3},"end":{"row":39,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":39,"column":0},"end":{"row":39,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":39,"column":1},"end":{"row":40,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":40,"column":0},"end":{"row":40,"column":1}},"text":"\t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":40,"column":1},"end":{"row":40,"column":33}},"text":"this.getAlarmList = function() {"},{"action":"insertText","range":{"start":{"row":40,"column":33},"end":{"row":41,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":41,"column":0},"end":{"row":42,"column":0}},"lines":["        return this.alarmList;"]},{"action":"insertText","range":{"start":{"row":42,"column":0},"end":{"row":42,"column":6}},"text":"    };"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":40,"column":6},"end":{"row":40,"column":18}},"text":"getAlarmList"},{"action":"insertText","range":{"start":{"row":40,"column":6},"end":{"row":40,"column":7}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":40,"column":7},"end":{"row":40,"column":8}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":40,"column":6},"end":{"row":40,"column":8}},"text":"re"},{"action":"insertText","range":{"start":{"row":40,"column":6},"end":{"row":40,"column":17}},"text":"removeAlarm"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":40,"column":29},"end":{"row":40,"column":30}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":40,"column":30},"end":{"row":40,"column":31}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":15},"end":{"row":41,"column":30}},"text":"this.alarmList;"},{"action":"insertText","range":{"start":{"row":41,"column":15},"end":{"row":41,"column":98}},"text":"$scope.alarms = _.reject($scope.alarms, function(alarm){ return alarm.id == id; });"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":44,"column":0},"end":{"row":44,"column":87}},"text":"    $scope.alarms = _.reject($scope.alarms, function(alarm){ return alarm.id == id; });"},{"action":"removeText","range":{"start":{"row":43,"column":4},"end":{"row":44,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":15},"end":{"row":41,"column":31}},"text":"$scope.alarms = "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":24},"end":{"row":41,"column":30}},"text":"$scope"},{"action":"insertText","range":{"start":{"row":41,"column":24},"end":{"row":41,"column":25}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":25},"end":{"row":41,"column":26}},"text":"h"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":26},"end":{"row":41,"column":27}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":41,"column":27},"end":{"row":41,"column":28}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":29},"end":{"row":41,"column":35}},"text":"alarms"},{"action":"insertText","range":{"start":{"row":41,"column":29},"end":{"row":41,"column":38}},"text":"alarmList"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":40},"end":{"row":0,"column":44}},"text":"List"},{"action":"insertText","range":{"start":{"row":0,"column":40},"end":{"row":0,"column":41}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":1,"column":14},"end":{"row":1,"column":18}},"text":"List"},{"action":"insertText","range":{"start":{"row":1,"column":14},"end":{"row":1,"column":15}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":27,"column":17},"end":{"row":27,"column":21}},"text":"List"},{"action":"insertText","range":{"start":{"row":27,"column":17},"end":{"row":27,"column":18}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":28,"column":25},"end":{"row":28,"column":29}},"text":"List"},{"action":"insertText","range":{"start":{"row":28,"column":25},"end":{"row":28,"column":26}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":33,"column":33},"end":{"row":33,"column":37}},"text":"List"},{"action":"insertText","range":{"start":{"row":33,"column":33},"end":{"row":33,"column":34}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":35,"column":19},"end":{"row":35,"column":23}},"text":"List"},{"action":"insertText","range":{"start":{"row":35,"column":19},"end":{"row":35,"column":20}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":37,"column":19},"end":{"row":37,"column":23}},"text":"List"},{"action":"insertText","range":{"start":{"row":37,"column":19},"end":{"row":37,"column":20}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":41,"column":34},"end":{"row":41,"column":38}},"text":"List"},{"action":"insertText","range":{"start":{"row":41,"column":34},"end":{"row":41,"column":35}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":29},"end":{"row":31,"column":30}},"text":"f"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":30},"end":{"row":31,"column":31}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":31},"end":{"row":31,"column":32}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":32},"end":{"row":31,"column":33}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":29},"end":{"row":31,"column":33}},"text":"form"},{"action":"insertText","range":{"start":{"row":31,"column":29},"end":{"row":31,"column":37}},"text":"formData"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":9},"end":{"row":31,"column":12}},"text":"add"},{"action":"insertText","range":{"start":{"row":31,"column":9},"end":{"row":31,"column":10}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":10},"end":{"row":31,"column":11}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":11},"end":{"row":31,"column":12}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":12},"end":{"row":31,"column":13}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":31,"column":9},"end":{"row":31,"column":13}},"text":"save"},{"action":"insertText","range":{"start":{"row":31,"column":9},"end":{"row":31,"column":10}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":10},"end":{"row":31,"column":11}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":31,"column":11},"end":{"row":31,"column":12}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":22}},"text":"function Clase (_id) {"},{"action":"insertText","range":{"start":{"row":0,"column":22},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":11,"column":0}},"lines":["    this.id = _id;","    this.tipo = \"InstructorPrivado\";","    this.tipodesc = \"Instructor Privado\";","    this.cantidadPersonas = 1;","    this.fechaInicio = \"\";","    this.cantidadDias = 1;","    this.duracion;","    this.duracionDesc;","    this.precio = 0;","    this.filtroCal = \"\";"]},{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":4},"end":{"row":12,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":0},"end":{"row":11,"column":1}},"text":"}"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":11,"column":1},"end":{"row":11,"column":2}},"text":";"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":11,"column":2},"end":{"row":11,"column":6}},"text":"    "},{"action":"insertText","range":{"start":{"row":11,"column":2},"end":{"row":12,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":9},"end":{"row":2,"column":13}},"text":"tipo"},{"action":"insertText","range":{"start":{"row":2,"column":9},"end":{"row":2,"column":14}},"text":"title"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":9},"end":{"row":3,"column":17}},"text":"tipodesc"},{"action":"insertText","range":{"start":{"row":3,"column":9},"end":{"row":3,"column":22}},"text":"targetAddress"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":9},"end":{"row":4,"column":25}},"text":"cantidadPersonas"},{"action":"insertText","range":{"start":{"row":4,"column":9},"end":{"row":4,"column":23}},"text":"targetLatitude"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":5,"column":9},"end":{"row":5,"column":20}},"text":"fechaInicio"},{"action":"insertText","range":{"start":{"row":5,"column":9},"end":{"row":5,"column":24}},"text":"targetLongitude"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":6,"column":9},"end":{"row":6,"column":21}},"text":"cantidadDias"},{"action":"insertText","range":{"start":{"row":6,"column":9},"end":{"row":6,"column":14}},"text":"ratio"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":10,"column":0},"end":{"row":10,"column":23}},"text":"    this.filtroCal = \"\""},{"action":"removeLines","range":{"start":{"row":7,"column":0},"end":{"row":10,"column":0}},"nl":"\n","lines":["    this.duracion;","    this.duracionDesc;","    this.precio = 0;"]},{"action":"removeText","range":{"start":{"row":6,"column":17},"end":{"row":6,"column":19}},"text":"1;"},{"action":"removeText","range":{"start":{"row":6,"column":17},"end":{"row":7,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":6,"column":17},"end":{"row":6,"column":18}},"text":"5"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":26},"end":{"row":4,"column":27}},"text":"1"},{"action":"insertText","range":{"start":{"row":4,"column":26},"end":{"row":4,"column":27}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":4,"column":27},"end":{"row":4,"column":28}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":26},"end":{"row":3,"column":44}},"text":"Instructor Privado"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":18},"end":{"row":2,"column":35}},"text":"InstructorPrivado"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":0,"column":9},"end":{"row":0,"column":14}},"text":"Clase"},{"action":"insertText","range":{"start":{"row":0,"column":9},"end":{"row":0,"column":10}},"text":"A"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":10},"end":{"row":0,"column":11}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":11},"end":{"row":0,"column":12}},"text":"a"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":12},"end":{"row":0,"column":13}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":13},"end":{"row":0,"column":14}},"text":"m"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":2}},"text":"};"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":7,"column":0}},"nl":"\n","lines":["function Alarm (_id) {","    this.id = _id;","    this.title = \"\";","    this.targetAddress = \"\";","    this.targetLatitude = \"\";","    this.targetLongitude = \"\";","    this.ratio = 5;"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":38,"column":0},"end":{"row":38,"column":3}},"text":"\t};"},{"action":"removeLines","range":{"start":{"row":30,"column":0},"end":{"row":38,"column":0}},"nl":"\n","lines":["    ","    this.addAlarm = function(formData)","\t{","\t    var size = _.size(this.alarms);","\t    if(size == 0)","\t        this.alarms.push();","\t    else","\t        this.alarms.push(new Alarm(parseInt($scope.clases[size-1].id) + 1));"]},{"action":"removeText","range":{"start":{"row":29,"column":6},"end":{"row":30,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":34,"column":4},"end":{"row":35,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":35,"column":0},"end":{"row":36,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":36,"column":0},"end":{"row":36,"column":64}},"text":"angular.module('starter').service(\"alarmsService\", [function() {"},{"action":"insertText","range":{"start":{"row":36,"column":64},"end":{"row":37,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":37,"column":0},"end":{"row":37,"column":19}},"text":"    this.alarms = ["}]}]]},"ace":{"folds":[],"scrolltop":322,"scrollleft":0,"selection":{"start":{"row":34,"column":4},"end":{"row":34,"column":4},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":71,"mode":"ace/mode/javascript"}},"timestamp":1407358296366,"hash":"78878ef9755d37a3b7918bf3a31a40a129f42f68"}