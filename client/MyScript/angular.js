
angular.module('myApp',[]).controller('myCtrl', function($scope, $http){
	$scope.number_value1 = ["1", "2", "3", "4", "5", "6"];
	$scope.number_value2 = ["0", "1", "2"];
	$scope.number_value3 = ["0", "1"];
	$scope.danh_xung = ["Ông", "Bà"];
	
	$scope.chieu1 = function() 
    {
		 $scope.style1 = {backgroundColor: '#337ab7'};
		 $scope.style2 = null;
		 $scope.show = false;
	}
	
	$scope.chieu2 = function() 
    {
		 $scope.style2 = {backgroundColor: '#337ab7'};
		 $scope.style1 = null;
		 $scope.show = true;
	}
	
	$scope.checkNumber1 = function(selectedNumber1)
	{
		$scope.selectedNumber2 = $scope.number_value2[0];
		$scope.selectedNumber3 = $scope.number_value3[0];	
		if(selectedNumber1 == "1")
		{	
			$scope.number_value2 = ["0", "1", "2"];
			$scope.number_value3 = ["0", "1"];
		}
		if(selectedNumber1 == "2")
		{
			$scope.number_value2 = ["0", "1", "2", "3", "4"];
			$scope.number_value3 = ["0", "1", "2"];
		}
		if(selectedNumber1 == "3")
		{
			$scope.number_value2 = ["0", "1", "2", "3"];
			$scope.number_value3 = ["0", "1", "2", "3"];
		}

		if(selectedNumber1 == "4")
		{
			$scope.number_value2 = ["0", "1", "2"];
			$scope.number_value3 = ["0", "1", "2", "3", "4"];
		}
		
		if(selectedNumber1 == "5")
		{
			$scope.number_value2 = ["0", "1"];
			$scope.number_value3 = ["0", "1", "2", "3", "4", "5"];
		}
		
		if(selectedNumber1 == "6")
		{
			$scope.number_value2 = ["0"];
			$scope.number_value3 = ["0", "1", "2", "3", "4", "5", "6"];
		}
	}
	
	$scope.checkNumber2 = function(selectedNumber2)
	{
		$scope.selectedNumber3 = $scope.number_value3[0];	
		if($scope.selectedNumber1 == "1")
		{	
			$scope.number_value3 = ["0", "1"];
			if(selectedNumber2 == "2")
				$scope.number_value3 = ["0"];
		}
		
		if($scope.selectedNumber1 == "2")
		{		
			$scope.number_value3 = ["0", "1", "2"];
			if(selectedNumber2 == "3")
				$scope.number_value3 = ["0", "1"];
			if(selectedNumber2 == "4")
				$scope.number_value3 = ["0"];		
		}
		
		if($scope.selectedNumber1 == "3")
		{		
			$scope.number_value3 = ["0", "1", "2", "3"];
		}
		
		if($scope.selectedNumber1 == "4")
		{		
			$scope.number_value3 = ["0", "1", "2", "3", "4"];
		}
		
		if($scope.selectedNumber1 == "5")
		{		
			$scope.number_value3 = ["0", "1", "2", "3", "4", "5"];
		}
		
		if($scope.selectedNumber1 == "6")
		{		
			$scope.number_value3 = ["0", "1", "2", "3", "4", "5", "6"];
		}
	}

	$scope.init = function(){
		$scope.maChuyenBay = "";
		$scope.noiDi = "";
		$scope.noiDen = "";
		$scope.ngayDi = "";
		$scope.gioDi = "";
		$scope.gio = "";
		$scope.phut = "";
		$scope.hang = "";
		$scope.soLuongGhe = 0;
		$scope.giaVe = 0;

		$scope.sanBayDi = [];
			$http({
		        method: 'GET',
		        url: '/api/start_airports',
		    }).then(function successCallback(response) {
		        var airports = response.data;
					
		        for (var i = 0; i < airports.length; i++) {
		            $http({
		                method: 'GET',
		                url : '/api/airports/' + airports[i]
		            }).then(function success(res) {
		                $scope.sanBayDi.push(res.data);
		                //console.log(res.data);
		            })
		        }
		    }, function errorCallback(response) {
		        console.log('laySanBayDi failed');
		    });
	};

	$scope.themChuyenBay = function() {
		$scope.ngayDi = $("#from").val();
		if($scope.maChuyenBay == "")
		{
			alert('Vui lòng nhập mã chuyến bay!');
				return;
		}	

		if($scope.noiDi == "")
		{
			alert('Vui lòng chọn nơi khởi hành!');
			return;
		}

		if($scope.noiDen == "")
		{
			alert('Vui lòng chọn nơi về!');
			return;
		}	

		if($scope.ngayDi == "")
		{
			alert('Vui lòng chọn ngày khởi hành!');
			return;
		}	

		if($scope.gio == "")
		{
			alert('Vui lòng chọn giờ đi!');
			return;
		}

		if($scope.phut == "")
		{
			alert('Vui lòng chọn phút!');
			return;
		}

		if($scope.hang == "")
		{
			alert('Vui lòng chọn hạng!');
			return;
		}

		console.log($scope.maChuyenBay);
		console.log($scope.noiDi);
		console.log($scope.noiDen);
		console.log($scope.ngayDi);
		console.log($scope.gio);
		console.log($scope.phut);
		console.log($scope.hang);
		console.log($scope.soLuongGhe);	
		console.log($scope.giaVe);

		console.log('gio',$scope.gio + ":" + $scope.phut);

    	$http({
                method: 'POST',
                url: '/api/flights',
                data : {
                	'maChuyenBay': $scope.maChuyenBay,
                	'noiDi': $scope.noiDi,
                	'noiDen': $scope.noiDen,
                	'ngayDi': $scope.ngayDi,
                	'gioDi': $scope.gio + ":" + $scope.phut,
                	'hang': $scope.hang,
                	'soLuongGhe': $scope.soLuongGhe,
                	'giaVe': $scope.giaVe
                }
            }).then(function successCallback(response) {
                console.log('adding success');
                console.log(response.data);
                $scope.flights = response.data;
                alert('Thêm chuyến bay thành công!!');
                $scope.init();
                
            }, function errorCallback(response) {
                console.log('adding failed');
                alert('Thêm chuyến bay thất bại!!');
            });
    };

    $scope.init();
});





	
