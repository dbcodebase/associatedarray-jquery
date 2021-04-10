
$(document).ready(function(){
	$("button").click(function(event) {

var key = document.getElementById("key").getAttribute("data-key");
var formInput = $('form').serializeArray();

var request = $.ajax({
type: "POST",
url:"users.php?key="+key, 
data:formInput,

statusCode: {
            404: function() { alert("file not found");}},

success : function(data){
	  $("#alert").html(data);
}            
});

});
});