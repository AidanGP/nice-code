//Main JS File

// Grab the two drop down buttons by their ID's
const MODE_SELECTOR = document.getElementById('mode');
const THEME_SELECTOR = document.getElementById('theme');

// List of available modes (languagues)
const MODE_LIST = ['python','javascript', 'css', 'htmlmixed', 'go', 'haskell',
    'php', 'ruby', 'sql', 'clike'
];

// List of available themes
const THEME_LIST = ['material-darker', 'base16-dark', 'blackboard',
    'cobalt', 'midnight', 'monokai', 'isotope', 'night', 'twilight'
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

const SITE_THEMES = [["#000000","#fca311"],
                    ["#f1faee","#0A100D"],
                    ["#f1faee","#e63946"],
                    ["#f1faee","#3083DC"],
                    ["#f1faee","#44CF6C"]];

const SITE_THEME = SITE_THEMES[Math.floor(Math.random() * SITE_THEMES.length)];
const ROOT = document.documentElement;
ROOT.style.setProperty('--bg', SITE_THEME[0]);
ROOT.style.setProperty('--font', SITE_THEME[1]);



var samp = [`def merge_sort(collection: list) -> list:
    def merge(left: list, right: list) -> list:
        def _merge():
            while left and right:
                yield (left if left[0] <= right[0] else right).pop(0)
            yield from left
            yield from right

        return list(_merge())

    if len(collection) <= 1:
        return collection
    mid = len(collection) // 2
    return merge(merge_sort(collection[:mid]), merge_sort(collection[mid:]))`,
`def bogo_sort(collection):
    def is_sorted(collection):
        if len(collection) < 2:
            return True
        for i in range(len(collection) - 1):
            if collection[i] > collection[i + 1]:
                return False
        return True

    while not is_sorted(collection):
        random.shuffle(collection)
    return collection`,
`def insertion_sort(collection: list) -> list:
    for insert_index, insert_value in enumerate(collection[1:]):
        temp_index = insert_index
        while insert_index >= 0 and insert_value < collection[insert_index]:
            collection[insert_index + 1] = collection[insert_index]
            insert_index -= 1
        if insert_index != temp_index:
            collection[insert_index + 1] = insert_value
    return collection`,
`def bubble_sort(collection):
    length = len(collection)
    for i in range(length - 1):
        swapped = False
        for j in range(length - 1 - i):
            if collection[j] > collection[j + 1]:
                swapped = True
                collection[j], collection[j + 1] = collection[j + 1], collection[j]
        if not swapped:
            break  # Stop iteration if the collection is sorted.
    return collection`,
`def quick_sort(collection: list) -> list:
    if len(collection) < 2:
        return collection
    pivot = collection.pop()  # Use the last element as the first pivot
    greater = []  # All elements greater than pivot
    lesser = []  # All elements less than or equal to pivot
    for element in collection:
        (greater if element > pivot else lesser).append(element)
    return quick_sort(lesser) + [pivot] + quick_sort(greater)`];

let a = samp[Math.floor(Math.random() * samp.length)];

document.getElementById('code').value = a;

//let a = code_samples[Math.floor(Math.random() * code_samples.length)];

// Initialise the CodeMirror editor
const EDITOR = CodeMirror.fromTextArea(document.getElementById('code'), {
    viewportMargin: Infinity,
    theme: 'material-darker',
    mode: 'python',
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




