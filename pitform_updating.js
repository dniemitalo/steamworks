$(document).ready(function(){
	updateTeams(teamData);
	$("#submit").click(
		function(){

			if (validateForm()){
				ajaxInsert();
			} else {
				$('.status').html('Form data not filled out correctly.');
				//update status message to describe invalid form submission
			}
		}
	); //close submit click function

	$("#team").change(
		function(){
			lookupTeamData();
		}
		
		//run ajax method to update fields if data exists
		
	); //close team change
}); //close document ready

function lookupTeamData(){
	$('.status').html('Looking for team\'s data...');
	var postData = 'team='+$('#team').val();
	//console.log(postData);

	$.ajax({
	    url : "pitTeamGet.php",
	    type: "GET",
	    dataType: "json",
	    data : postData,
	    success: function(data,status, xhr)
	    {
	    	if ($.trim(data)){   
		     	$('.status').html("Scouting data exists for team "+$('#team').val());

		     	$('#drivetype').val(data['drivetype']);
				$('#scout_name').val(data['scout_name']);
				$('#height').val(data['height']);
				$('#orient').val(data['orient']);
				$('#drivetype').val(data['drivetype']);
				$('#transmission').val(data['transmission']);
				$('#driveMotors').val(data['driveMotors']);
				$('#speed').val(data['speed']);
				$('#GR').val(data['GR']);
				$('#wheelDiam').val(data['wheelDiam']);
				$('#weight').val(data['weight']);
				$('#build_appearance').val(data['build_appearance']);
				$('#wiring_appearance').val(data['wiring_appearance']);
				$('#pit_comments').val(data['pit_comments']);
				$('#hopper_size').val(data['hopper_size']);

				$('#manip_high').attr('checked',!!+data['manip_high']);
				$('#manip_low').attr('checked',!!+data['manip_low']);
				$('#manip_gear').attr('checked',!!+data['manip_gear']);
				$('#floor_gear').attr('checked',!!+data['floor_gear']);
				$('#manip_hopper').attr('checked',!!+data['manip_hopper']);
				$('#manip_climb').attr('checked',!!+data['manip_climb']);
				$('#manip_pickup').attr('checked',!!+data['manip_pickup']);
				$('#pitscout_auto_baseline').attr('checked',!!+data['pitscout_auto_baseline']);
				$('#pitscout_auto_high').attr('checked',!!+data['pitscout_auto_high']);
				$('#pitscout_auto_low').attr('checked',!!+data['pitscout_auto_low']);
				$('#pitscout_auto_gear').attr('checked',!!+data['pitscout_auto_gear']);
				$('#start_middle').attr('checked',!!+data['start_middle']);
				$('#start_boiler').attr('checked',!!+data['start_boiler']);
				$('#start_far').attr('checked',!!+data['start_far']);
				$('#start_left').attr('checked',!!+data['start_left']);
				$('#start_right').attr('checked',!!+data['start_right']);
				$('#gear_middle').attr('checked',!!+data['gear_middle']);
				$('#gear_boiler').attr('checked',!!+data['gear_boiler']);
				$('#gear_far').attr('checked',!!+data['gear_far']);
				$('#gear_left').attr('checked',!!+data['gear_left']);
				$('#gear_right').attr('checked',!!+data['gear_right']);





			}
			else{   
			    $('.status').html("No existing data found for team "+$('#team').val());
			}
	     	//update status message with results of submission
	     	//$('.status').html(data);
	     	//Show and/or hide HTML elements if necessary
	    },
	    error: function (jqXHR, status, errorThrown)
	    {
	    	$('.status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call

	//if null, do nothing
	//if data exists, populate fields and change submit button to "update" button
}

function validateForm(){
	// var matchnum = $('#matchnum').val();
	// var team = $('#team').val();
	// var validated = true;
	// if(matchnum==null||isNaN(matchnum)||team==null||team==""){
	// 	validated = false;
	// 	$('.status').html('Fill out form fields.');
	// }
	// //validate HTML form data
	// //if form input is invalid, validated = false
	// return validated;
	return true;
}

function ajaxInsert(){
	$('.status').html('Connecting to database...');
	//var event_code = scheduleData[0]["event_key"];
	var event_code = "2017iacf";
	var team = $("#team").val();
	var scout_name = $("#scout_name").val();
	var height = $("#height").val();
	var orient = $("#orient").val();
	var drivetype = $("#drivetype").val();
	var transmission = $("#transmission").val();
	var driveMotors = $("#driveMotors").val();
	var speed = $("#speed").val();
	var GR = $("#GR").val();
	var wheelDiam = $("#wheelDiam").val();
	var weight = $("#weight").val();
	var build_appearance = $("#build_appearance").val();
	var wiring_appearance = $("#wiring_appearance").val();
	var pit_comments = $('#pit_comments').val();
	var manip_high = parseInt(document.getElementById('manip_high').checked | 0);
	var manip_low = parseInt(document.getElementById('manip_low').checked | 0);
	var manip_gear = parseInt(document.getElementById('manip_gear').checked | 0);
	var floor_gear = parseInt(document.getElementById('floor_gear').checked | 0);
	var manip_hopper = parseInt(document.getElementById('manip_hopper').checked | 0);
	var hopper_size = $("#hopper_size").val();
	var manip_climb = parseInt(document.getElementById('manip_climb').checked | 0);
	var manip_pickup = parseInt(document.getElementById('manip_pickup').checked | 0);
	var pitscout_auto_baseline = parseInt(document.getElementById('pitscout_auto_baseline').checked | 0);
	var pitscout_auto_high = parseInt(document.getElementById('pitscout_auto_high').checked | 0);
	var pitscout_auto_low = parseInt(document.getElementById('pitscout_auto_low').checked | 0);
	var pitscout_auto_gear = parseInt(document.getElementById('pitscout_auto_gear').checked | 0);
	var start_middle = parseInt(document.getElementById('start_middle').checked | 0);
	var start_boiler = parseInt(document.getElementById('start_boiler').checked | 0);
	var start_far = parseInt(document.getElementById('start_far').checked | 0);
	var start_left = parseInt(document.getElementById('start_left').checked | 0);
	var start_right = parseInt(document.getElementById('start_right').checked | 0);
	var gear_middle = parseInt(document.getElementById('gear_middle').checked | 0);
	var gear_boiler = parseInt(document.getElementById('gear_boiler').checked | 0);
	var gear_far = parseInt(document.getElementById('gear_far').checked | 0);
	var gear_left = parseInt(document.getElementById('gear_left').checked | 0);
	var gear_right = parseInt(document.getElementById('gear_right').checked | 0);

	var postData = 'event_code='+event_code+
		'&event_code='+event_code+
		'&team='+team+
		'&scout_name='+scout_name+
		'&height='+height+
		'&orient='+orient+
		'&drivetype='+drivetype+
		'&transmission='+transmission+
		'&driveMotors='+driveMotors+
		'&speed='+speed+
		'&GR='+GR+
		'&wheelDiam='+wheelDiam+
		'&weight='+weight+
		'&build_appearance='+build_appearance+
		'&wiring_appearance='+wiring_appearance+
		'&manip_high='+manip_high+
		'&manip_low='+manip_low+
		'&manip_gear='+manip_gear+
		'&floor_gear='+floor_gear+
		'&manip_hopper='+manip_hopper+
		'&hopper_size='+hopper_size+
		'&manip_climb='+manip_climb+
		'&manip_pickup='+manip_pickup+
		'&pitscout_auto_baseline='+pitscout_auto_baseline+
		'&pitscout_auto_high='+pitscout_auto_high+
		'&pitscout_auto_low='+pitscout_auto_low+
		'&pitscout_auto_gear='+pitscout_auto_gear+
		'&start_middle='+start_middle+
		'&start_boiler='+start_boiler+
		'&start_far='+start_far+
		'&start_left='+start_left+
		'&start_right='+start_right+
		'&gear_middle='+gear_middle+
		'&gear_boiler='+gear_boiler+
		'&gear_far='+gear_far+
		'&gear_left='+gear_left+
		'&gear_right='+gear_right+
		'&pit_comments='+pit_comments;


    $.ajax({
	    url : "insert_pit_record.php",
	    type: "POST",
	    data : postData,
	    success: function(data,status, xhr)
	    {
	     	//reset form data for a new entry
	     	$('#manip_high').attr('checked', false);
	     	$('#manip_low').attr('checked', false);
	     	$('#manip_gear').attr('checked', false);
	     	$('#floor_gear').attr('checked', false);
	     	$('#manip_hopper').attr('checked', false);
	     	$('#manip_high').attr('checked', false);
	     	$('#manip_climb').attr('checked', false);
	     	$('#manip_pickup').attr('checked', false);
	     	$('#pitscout_auto_baseline').attr('checked', false);
	     	$('#pitscout_auto_high').attr('checked', false);
	     	$('#pitscout_auto_low').attr('checked', false);
	     	$('#pitscout_auto_gear').attr('checked', false);
	     	$('#start_middle').attr('checked', false);
	     	$('#start_boiler').attr('checked', false);
	     	$('#start_far').attr('checked', false);
	     	$('#start_left').attr('checked', false);
	     	$('#start_right').attr('checked', false);
	     	$('#gear_middle').attr('checked', false);
	     	$('#gear_boiler').attr('checked', false);
	     	$('#gear_far').attr('checked', false);
	     	$('#gear_left').attr('checked', false);
	     	$('#gear_right').attr('checked', false);

	     	//update status message with results of submission
	     	$('.status').html(data);
	     	window.scrollTo(0,document.body.scrollHeight);
	     	//$('#team').val(''); 
	     	//$('#team').focus();

	     	//Show and/or hide HTML elements if necessary
	    },
	    error: function (jqXHR, status, errorThrown)
	    {
	    	$('.status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call
}

function updateTeams(arr){
	var teamList = [];
		for (i = 0; i < teamData.length; i++){
			teamList.push({num: parseInt(teamData[i]["team_number"]),
				nick: teamData[i]["nickname"]});
		}

	teamList.sort(function comp(a, b){return parseInt(a['num'])-parseInt(b['num'])});

	var choices = '';
	for(i = 0; i < teamList.length; i++){
		var num = teamList[i]['num'];
		var nick = teamList[i]['nick']
		choices += '<option value="'+num+'">'+num+' - '+nick.substring(0,22)+'</option>\n';
	}
	document.getElementById('team').innerHTML = choices;
}

function updateNickname(arr, teamnum){
	// for (i = 0; i < arr.length; i++){
	// 	if (arr[i]['team_number']==teamnum){
	// 		$('#nickname').html(arr[i]['nickname']);
	// 	}
	// }
}