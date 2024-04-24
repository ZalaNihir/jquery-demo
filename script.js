function removeErrMsg() {
    $("#nameErr").html('');
    $("#emailErr").html('');
    $("#passwordErr").html('');
    $("#cityErr").html('');
    $("#phoneErr").html('');
}
$("#success").hide();
$("#form1").on('submit', function (e) {
    removeErrMsg();
    e.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let city = $("#city").val();
    let phone = $("#phone").val();
    if (name == '' || name == null) {
        $("#nameErr").html('Name field is required.');
    }
    if (email == '' || email == null) {
        $("#emailErr").html('Email field is required.');
    }
    if (password == '' || password == null) {
        $("#passwordErr").html('Password field is required.');
    }
    if (city == '' || city == null) {
        $("#cityErr").html('City field is required.');
    }
    if (phone == '' || phone == null) {
        $("#phoneErr").html('Phone field is required.');
    }
    else {
        $("body").addClass("bg-dark");
        $("#formDiv").hide();
        $("#success").show();
    }
    // if($("#radio1").val() != null){
    //     alert('1');
    // }
    // if(name.length != 10)
    // {
    //     $("#nameErr").html('Name field must be 10.');
    // }
});