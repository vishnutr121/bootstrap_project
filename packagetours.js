$(document).ready(function () {
    $("#enquireBtn").click(function () {
        if ($("#myForm")[0].checkValidity()) {
            $("#myForm")[0].reset();
            $('#bookNowModal').modal('hide');
            $('#successModal').modal('show');
            
        } else {
            $("#myForm")[0].reportValidity();
        }
    });
});