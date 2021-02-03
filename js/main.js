// Initialise the CodeMirror editor
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    viewportMargin: Infinity,
    theme: "material-darker",
    mode: "python",
    lineWrapping: true
  });



function export_code() {
    // OnClick function for downloading the submitted code.
    let div = document.getElementById('container');
    html2canvas(div, {
        backgroundColor: null
    }).then( 
        function (canvas) { 
            image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.download = "nice-code.png";
            link.href = image;
            link.click();
        }) 
} 

