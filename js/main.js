// Initialise the CodeMirror editor
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    viewportMargin: Infinity,
    theme: "monokai",
    mode: "javascript",
    lineWrapping: true,
    autofocus: true
});

var lang = document.getElementById("language");
var mode = ["javascript","css","htmlmixed","python", "go", "haskell",
            "php", "ruby", "sql"];

for (var i = 0; i < mode.length; i ++) {
    var item = mode[i];
    var element = document.createElement("option");
    element.textContent = item;
    element.value = item;
    lang.appendChild(element);
}

var theme = document.getElementById("theme");
var themes = ["3024-night", "base16-dark", "blackboard",
          "cobalt", "midnight", "monokai","darcula", "isotope", 
          "material-darker", "night",
          "twilight"];

for (var i = 0; i < themes.length; i ++) {
    var item = themes[i];
    var element = document.createElement("option");
    element.textContent = item;
    element.value = item;
    theme.appendChild(element);
}

function changeMode(obj) {
    var val = obj.value;
    editor.setOption("mode", val);
}

function changeTheme(obj) {
    var val = obj.value;
    editor.setOption("theme", val);
}

function import_code() {
    // OnClick function for uploading code.
    // Probably obsolete because of the drag and drop feature.
}


function export_code() {
    // OnClick function for downloading the submitted code.
    let div = document.getElementById('container');
    html2canvas(div, {
        backgroundColor: null,
    }).then(function (canvas) { 
            image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            var link = document.createElement('a');
            link.download = "nice-code.png";
            link.href = image;
            link.click();
        }) 
} 

