//<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

function import_code() {
    //Import user code
}

function export_code() {
    //Export user code

    let user_code = document.getElementById('editor').innerText;
    $.ajax({
        url: "http://localhost:5000/export/",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({"code": user_code})
    }).done(function(data) {
        console.log(data);
    });
}

