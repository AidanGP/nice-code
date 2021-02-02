function import_code() {
    //Import user code
}

function export_code() {
    //Export user code

    let user_code = document.getElementById('code_editor').value;
    $.ajax({
        url: "http://localhost:5000/export/",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({"code": user_code})
    }).done(function(data) {
        console.log(data);
    });
}

