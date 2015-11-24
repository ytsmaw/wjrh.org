
//recurring refreshes
setInterval( "updateSongInfo();", 4000 );

$(function() {
	updateSongInfo = function(){

		var djdata = document.getElementById('djdata');
		$('#djdata').load("http://wjrh.org/show_dj.php").fadeIn("slow");
		$('#songdata').load("http://wjrh.org/show_song.php").fadeIn("slow");
	}
});

//first refresh
$(document).ready(function(){
	var djdata = document.getElementById('djdata');
	$('#djdata').load("http://wjrh.org/show_dj.php").fadeIn("slow");
	$('#songdata').load("http://wjrh.org/show_song.php").fadeIn("slow");
});


var checkData = function(){
	if (($("#songdata").text().length + $("#djdata").text().length > 160) || $("#djdata").text() == "WJRH RoboDJ\n"){
		$("#nowplaying-dj").hide();
	} else {
		$("#nowplaying-dj").show();
	}
}


$( document ).ajaxComplete(function() {
  checkData();
});
