/* Author: Adrian Tee (Aug 2014)
======================================
-References:
Read from json for each project checklist
====================================== */ 


angular.module('mainApp', [])
	.config(function(){

	})
	.run(function($rootScope){

	})
	.controller('MainController', function($scope){

		$scope.projName="Company";
		$scope.passed=0;
		$scope.total=0;
		$scope.test="hello";
		console.log("run");

		$scope.projdata=[
			{title:'Database',data:[
				'Find and replace all URL to live URL in SQL file',
				'Import new SQL to database',
				'Import options settings in WP',
				'Import theme settings in WP',
				'Replace all url in theme options to LIVE url in WP',
				'Import store listing in WP',
				'Link store categories (run script)',
				'Import tyres listing (run script)',
				'Link tyres relationship (run script)'
			]},
			{title:'Files & Images',data:[
				'Login to WP and save permalinks',
				'Check for missing images',
				'Check backup is set to 21 copy in WP',
				'Copy missing images to wp-content/uploads'
			]},
			{title:'Server',data:[
				'Make sure vhost is set up to correct domain',
				'Ensure domain is correct per country',
				'chown all to apache:apache if pull for new instance',
				'Ensure branch is en for english sites',
				'Run deploy script and check for errors (if required)'
			]},
			{title:'Function & Links',data:[
				'Check Header navi links pointing to correct page',
				'Check Footer navi links',
				'Check social icon links are correct',
				'Check Captcha is working',
				'Submit to contact form'
			]},
			{title:'Analytics',data:[
				'Ensure analytics (GA or baidu) code in place and correct'
			]}
		];
		console.log($scope.projdata);
		for(var i=0;i<$scope.projdata.length;i++){
			$scope.total += $scope.projdata[i].data.length;
		}
		console.log($scope.total);

		$scope.toggleMe = function($event, data){
			// var index=data[1];
			var elem=$($event.currentTarget);
			if(elem.hasClass('btn-danger')){
				$scope.passed++;
				elem.removeClass('btn-danger');
				elem.addClass('btn-success');
			}else{
				$scope.passed--;
				elem.removeClass('btn-success');
				elem.addClass('btn-danger');
			}
		}












	});