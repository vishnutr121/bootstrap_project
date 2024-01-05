function openModal() {
    var bookNowModal = document.getElementById("bookNowModal2");
    var modal = new bootstrap.Modal(bookNowModal);
    modal.show();
    $("#enquireBtn5").click(function () {
            if ($("#myForm5")[0].checkValidity()) {
                $("#myForm5")[0].reset();
                modal.hide();
                $('#successModal').modal('show');
                
            } else {
                $("#myForm5")[0].reportValidity();
            }
        });
  }
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(openModal, 5000);
  });
  $(document).ready(function () {
        $("#enquireBtn1").click(function () {
            if ($("#myForm1")[0].checkValidity()) {
                $("#myForm1")[0].reset();
                $('#successModal').modal('show');
            } else {
                $("#myForm1")[0].reportValidity();
            }
        });
    });
    $(document).ready(function () {
        $("#enquireBtn").click(function () {
            if ($("#myForm")[0].checkValidity()) {
                $("#myForm")[0].reset();
                $('#successModal').modal('show');
            } else {
                $("#myForm")[0].reportValidity();
            }
        });
    });
    $(document).ready(function () {
        $("#enquireBtn3").click(function () {
            if ($("#myForm3")[0].checkValidity()) {
                $("#myForm3")[0].reset();
                $('#successModal').modal('show');
            } else {
                $("#myForm3")[0].reportValidity();
            }
        });
    });
    $(document).ready(function () {
        $("#enquireBtn4").click(function () {
            if ($("#myForm4")[0].checkValidity()) {
                $("#myForm4")[0].reset();
                $('#successModal').modal('show');
            } else {
                $("#myForm4")[0].reportValidity();
            }
        });
    });
    $(document).ready(function () {
        $("#enquireBtn2").click(function () {
            if ($("#myForm2")[0].checkValidity()) {
                $("#myForm2")[0].reset();
                $('#bookNowModal').modal('hide');
                $('#successModal').modal('show');
                
            } else {
                $("#myForm2")[0].reportValidity();
            }
        });
    });