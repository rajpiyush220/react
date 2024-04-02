import $ from 'jquery';
$(document)
	.ready(

		function() {
			$("#testConnection").click(function(event) {
				// Prevent the form from submitting via the browser.
				event.preventDefault();
				var formData = {
					sourceHost: $("#sourceHost").val(),
					sourcePort: $("#sourcePort").val(),
					sourceServerName: $("#sourceServerName").val(),
					sourceDb: $("#sourceDb").val(),
					sourceUserName: $("#sourceUserName").val(),
					sourcePwd: $("#sourcePwd").val()
				}
				$.ajax({
					type: "POST",
					contentType: "application/json",
					url: window.location.origin + "/backup/connection/test",
					data: JSON.stringify(formData),
					success: function(result) {
						console.log(result);
						alert(result);
					},
					error: function(e) {
						alert("Error!")
						console.log("ERROR: ", e);
					}
				});
			})

		})

function isPositiveNumber(event) {
    var input = event.target;
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode >= 48 && charCode <= 57 || charCode === 8 || charCode === 46) {
        if (/^\d*\.?\d*$/.test(input.value) || charCode !== 46) {
            return true;
        }
    }
    event.preventDefault();
    return false;
}

function showValidationErrors(){
    /*if(validationErrors != null){
        var popupWidth = 500;
        var popupHeight = 250;
        var leftPosition = (window.innerWidth - popupWidth) / 2;
        var topPosition = (window.innerHeight - popupHeight) / 2;
        var popupWindow = window.open("", "Popup", "width=" + popupWidth + ",height=" + popupHeight + ",left=" + leftPosition + ",top=" + topPosition);
        popupWindow.document.write("<html><head><title>Validation Errors</title></head>");
        popupWindow.document.write("<body style='font-family: Arial, sans-serif;text-align: left;'>");
        popupWindow.document.write("<div style='white-space: pre-line;font-weight: bold;color: red;'>");

        validationErrors.forEach(function(line) {
            popupWindow.document.write("<div style='border-bottom: 1px solid black; padding-bottom: 5px;'>" + line + "</div>");
        });
        popupWindow.document.write("</div></body></html>");
        popupWindow.document.close();
        setTimeout(function() {
            popupWindow.close();
        }, 300000);
    }else{
        $("#sourceHost").focus();
    }*/
}