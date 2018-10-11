$().ready(function() {

    var url = "http://localhost:8080/Users/Get?id=2";
    $.getJSON(url)
        .then(function(jsonResponse) {
            console.log(jsonResponse);
            render(jsonResponse.data);
        })
})

function render(user) {
    $("#uid").val(user.id);
    $("#uname").val(user.firstName + " " + user.lastName);
    $("#uusername").val(user.userName);
    $("#uphone").val(user.phoneNumber);
    $("#uemail").val(user.email);
    $("#ureviewer").prop("checked", user.reviewer);
    $("#uadmin").prop("checked", user.admin);
}