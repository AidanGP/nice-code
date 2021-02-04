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
    EDITOR.setOption('mode', mode_name);
}

// changeTheme function called when the user changes the theme
function changeTheme(dropdown_option) {
    let theme_name = dropdown_option.value;
    EDITOR.setOption('theme', theme_name);
}

const SITE_THEMES = [["#D0DB97","#69B578"],
                    ["#D6D5C9","#0A100D"],
                    ["#C8D96F","#A5B452"],
                    ["#F8FFE5","#3083DC"],
                    ["#A9FDAC","#44CF6C"]];

const SITE_THEME = SITE_THEMES[Math.floor(Math.random() * SITE_THEMES.length)];
const ROOT = document.documentElement;
ROOT.style.setProperty('--bg', SITE_THEME[0]);
ROOT.style.setProperty('--font', SITE_THEME[1]);

// Initialise the CodeMirror editor
const EDITOR = CodeMirror.fromTextArea(document.getElementById('code'), {
    viewportMargin: Infinity,
    theme: 'material-darker',
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