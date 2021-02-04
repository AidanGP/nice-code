//Main JS File

// Grab the two drop down buttons by their ID's
const MODE_SELECTOR = document.getElementById('mode');
const THEME_SELECTOR = document.getElementById('theme');

// List of available modes (languagues)
const MODE_LIST = ['javascript', 'css', 'htmlmixed', 'python', 'go', 'haskell',
    'php', 'ruby', 'sql'
];

// List of available themes
const THEME_LIST = ['3024-night', 'base16-dark', 'blackboard',
    'cobalt', 'midnight', 'monokai', 'darcula', 'isotope',
    'material-darker', 'night',
    'twilight'
];

// Populate the mode dropdown with the available modes.
for (let i = 0; i < MODE_LIST.length; i++) {
    let mode = MODE_LIST[i];
    let new_dropdown_entry = document.createElement('option');
    new_dropdown_entry.textContent = mode;
    new_dropdown_entry.value = mode;
    MODE_SELECTOR.appendChild(new_dropdown_entry);
}

// Populate the theme dropdown with the available themes.
for (let j = 0; j < THEME_LIST.length; j++) {
    let theme = THEME_LIST[j];
    let new_dropdown_entry = document.createElement('option');
    new_dropdown_entry.textContent = theme;
    new_dropdown_entry.value = theme;
    THEME_SELECTOR.appendChild(new_dropdown_entry);
}

// changeMode function called when the use changes the mode
function changeMode(dropdown_option) {
    let mode_name = dropdown_option.value;
    editor.setOption('mode', mode_name);
}

// changeTheme function called when the user changes the theme
function changeTheme(dropdown_option) {
    let theme_name = dropdown_option.value;
    editor.setOption('theme', theme_name);
}

// Initialise the CodeMirror editor
let editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    viewportMargin: Infinity,
    theme: 'monokai',
    mode: 'javascript',
    lineWrapping: true,
    autofocus: true
});

function import_code() {
    // OnClick function for uploading code.
    // Probably obsolete because of the drag and drop feature.
}

function export_code() {
    // OnClick function for downloading the submitted code.
    let user_code = document.getElementById('container');
    html2canvas(user_code, {
        backgroundColor: null,
    }).then(function (canvas) {
        image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        let link = document.createElement('a');
        link.download = 'nice-code.png';
        link.href = image;
        link.click();
    })
}