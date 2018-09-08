// Initialize Firebase
var config = {
	apiKey: "AIzaSyD7BpmQ-_7EuEqYUsn8DhwGSIDJ2qVwW6c",
	authDomain: "cams-project-422f6.firebaseapp.com",
	databaseURL: "https://cams-project-422f6.firebaseio.com",
	projectId: "cams-project-422f6",
	storageBucket: "cams-project-422f6.appspot.com",
	messagingSenderId: "648522365381"
};
firebase.initializeApp(config);

var database = firebase.database();

var name = "";
var role = "";
var startDate = "";
var monthlyRate = "";



$("#submit").on("click", function () {

	event.preventDefault();

	$name = $("#empName").val().trim();
	$role = $("#empRole").val().trim();
	$startDate = $("#startDate").val().trim();
	$monthlyRate = $("#monthlyRate").val().trim();

	database.ref().push({
		name: $name,
		role: $role,
		startDate: $startDate,
		monthlyRate: $monthlyRate,
		timeAdded: firebase.database.ServerValue.TIMESTAMP,
	})

});

database.ref().on("child_added", function (snapshot) {
	var sv = snapshot.val();
	console.log(sv.name);
	console.log(sv.role);
	console.log(sv.startDate);
	console.log(sv.monthlyRate);

	var addName = $("<td>");
	addName.text(sv.name)

	var addRole = $("<td>");
	addRole.text(sv.role);

	var addDate = $("<td>");
	addDate.text(sv.startDate);

	var monthsWorked = $("<td>");
	monthsWorked.text("");

	var addRate = $("<td>");
	addRate.text(sv.monthlyRate);

	var totalBilled = $("<td>");
	totalBilled.text("");

	var newRow = $("<tr>")
	newRow.append(addName, addRole, addDate, monthsWorked, addRate, totalBilled);
	$("tbody").append(newRow);

})