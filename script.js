const startButton =
    document.getElementById("startButton");

const startMenu =
    document.getElementById("startMenu");


const notepadWindow =
    document.getElementById("notepadWindow");

const closeNotepad =
    document.getElementById("closeNotepad");

const notepadTitle =
    document.getElementById("notepadTitle");

const notepadContent =
    document.getElementById("notepadContent");

const notepadPosition =
    document.getElementById("notepadPosition");


const runWindow =
    document.getElementById("runWindow");

const closeRun =
    document.getElementById("closeRun");


const explorerWindow =
    document.getElementById("explorerWindow");

const closeExplorer =
    document.getElementById("closeExplorer");


const photoViewerWindow =
    document.getElementById("photoViewerWindow");

const closePhotoViewer =
    document.getElementById("closePhotoViewer");

const photoViewerTitle =
    document.getElementById("photoViewerTitle");

const photoViewerImage =
    document.getElementById("photoViewerImage");

const photoViewerStatus =
    document.getElementById("photoViewerStatus");

const previousPhoto =
    document.getElementById("previousPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");


// =========================================
// WINDOW FOCUS / STACKING
// =========================================

let highestZIndex = 10;

function bringToFront(windowElement) {

    highestZIndex++;

    windowElement.style.zIndex =
        highestZIndex;
}


// =========================================
// EXPLORER ELEMENTS
// =========================================

const windowTitle =
    document.getElementById("windowTitle");

const windowIcon =
    document.getElementById("windowIcon");

const addressFolder =
    document.getElementById("addressFolder");

const addressIcon =
    document.getElementById("addressIcon");

const searchBox =
    document.getElementById("searchBox");

const filesArea =
    document.getElementById("filesArea");

const statusText =
    document.getElementById("statusText");


// =========================================
// FOLDER DATA
// =========================================

const folders = {

    Projects: {

        icon: "folder-empty.ico",

        search: "Search Projects",

        items: [

            {
                name: "Online Banking",
                icon: "folder-full.ico",
                type: "folder"
            },

            {
                name: "Forum",
                icon: "folder-full.ico",
                type: "folder"
            },

            {
                name: "Banker Maintenance CLA",
                icon: "folder-full.ico",
                type: "folder"
            },

            {
                name: "README.txt",
                icon: "document.ico",
                type: "text",

                content:
`Welcome to my portfolio!

This is my README file.

Thanks for visiting!`
            }

        ]

    },


    "Online Banking": {

        icon: "folder-empty.ico",

        search: "Search Online Banking",

        items: [

            {
                name: "README.txt",
                icon: "document.ico",
                type: "text",
                content: "Online Banking project"
            },

            {
                name: "live demo",
                icon: "desktop-bookmark.ico",
                type: "link"
            },

            {
                name: "github",
                icon: "desktop-bookmark.ico",
                type: "link"
            },

            {
                name: "example-photo-1",
                icon: "photos.ico",
                type: "photo"
            },

            {
                name: "example-photo-2",
                icon: "photos.ico",
                type: "photo"
            },

            {
                name: "example-photo-3",
                icon: "photos.ico",
                type: "photo"
            }

        ]

    },


    Forum: {

        icon: "folder-empty.ico",

        search: "Search Forum",

        items: [

            {
                name: "README.txt",
                icon: "document.ico",
                type: "text",
                content: "Forum"
            },

            {
                name: "live demo",
                icon: "desktop-bookmark.ico",
                type: "link"
            },

            {
                name: "github",
                icon: "desktop-bookmark.ico",
                type: "link"
            }

        ]

    },


    "Banker Maintenance CLA": {

        icon: "folder-empty.ico",

        search: "Search Banker Maintenance CLA",

        items: [

            {
                name: "README.txt",
                icon: "document.ico",
                type: "text",
                content:
                    "Banker Maintenance Command Line Application"
            },

            {
                name: "live demo",
                icon: "desktop-bookmark.ico",
                type: "link"
            },

            {
                name: "github",
                icon: "desktop-bookmark.ico",
                type: "link"
            }

        ]

    },


    Documents: {

        icon: "folder-empty.ico",

        search: "Search Documents",

        items: [

            {
                name: "Joseph-Polat-Resume.docx",
                icon: "document.ico",
                type: "text",

                content:
                    "THIS IS MY RESUME"
            },

            {
                name: "Notes.txt",
                icon: "document.ico",
                type: "text",

                content:
                    "this is just a filler so the folder doesn't look empty"
            }

        ]

    },


    Pictures: {

        icon: "photos.ico",

        search: "Search Pictures",

        items: [

            {
                name: "Profile Picture",
                type: "photo",
                icon: "photos.ico"
            },

            {
                name: "Portfolio Screenshot",
                type:"photo",
                icon: "photos.ico"
            }

        ]

    },


    Resume: {

        icon: "document.ico",

        search: "Search Resume",

        items: [

            {
                name: "Joseph Polat - Resume.pdf",
                icon: "document.ico"
            }

        ]

    },


    "My Computer": {

        icon: "computer.ico",

        search: "Search Computer",

        items: [

            {
                name: "Local Disk (C:)",
                icon: "hard-drive.ico"
            },

            {
                name: "Network",
                icon: "network.ico"
            },

            {
                name: "Documents",
                icon: "folder-full.ico"
            },

            {
                name: "Pictures",
                icon: "photos.ico"
            }

        ]

    }

};


// =========================================
// START MENU
// =========================================

startButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        const isOpen =
            startMenu.classList.toggle("open");

        startButton.classList.toggle(
            "pressed",
            isOpen
        );

    }
);


startMenu.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

    }
);


document.addEventListener(
    "click",
    () => {

        startMenu.classList.remove("open");

        startButton.classList.remove("pressed");

    }
);


// =========================================
// OPEN FOLDER
// =========================================

function openFolder(folderName) {

    const folder =
        folders[folderName];

    if (!folder) {
        return;
    }


    explorerWindow.style.display =
        "block";

    bringToFront(
        explorerWindow
    );


    windowTitle.textContent =
        folderName;


    windowIcon.src =
        folder.icon;


    addressFolder.textContent =
        folderName;

    addressIcon.src =
        folder.icon;


    searchBox.placeholder =
        folder.search;


    filesArea.innerHTML =
        "";


    folder.items.forEach(
        (item) => {

            const file =
                document.createElement("div");

            file.className =
                "file";


            const icon =
                document.createElement("img");

            icon.src =
                item.icon;

            icon.alt =
                "";


            const name =
                document.createElement("span");

            name.textContent =
                item.name;


            file.appendChild(icon);

            file.appendChild(name);


            // Text files

            if (item.type === "text") {

                file.addEventListener(
                    "dblclick",
                    () => {

                        openNotepad(
                            item.name,
                            item.content
                        );

                    }
                );

            }


            // Folders

            if (item.type === "folder") {

                file.addEventListener(
                    "dblclick",
                    () => {

                        openFolder(
                            item.name
                        );

                    }
                );

            }


            // Photos

            if (item.type === "photo") {

                file.addEventListener(
                    "dblclick",
                    () => {

                        const photos =
                            folder.items.filter(
                                (folderItem) =>
                                    folderItem.type === "photo"
                            );


                        const photoIndex =
                            photos.indexOf(item);


                        openPhotoViewer(
                            photos,
                            photoIndex
                        );

                    }
                );

            }


            filesArea.appendChild(
                file
            );

        }
    );


    statusText.textContent =
        folder.items.length +
        (
            folder.items.length === 1
                ? " item"
                : " items"
        );


    startMenu.classList.remove(
        "open"
    );

    startButton.classList.remove(
        "pressed"
    );
}


// =========================================
// START MENU FOLDER BUTTONS
// =========================================

const projectsButton =
    document.getElementById("projectsButton");

const documentsButton =
    document.getElementById("documentsButton");

const picturesButton =
    document.getElementById("picturesButton");

const resumeButton =
    document.getElementById("resumeButton");

const computerButton =
    document.getElementById("computerButton");


projectsButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openFolder(
            "Projects"
        );

    }
);


documentsButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openFolder(
            "Documents"
        );

    }
);


picturesButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openFolder(
            "Pictures"
        );

    }
);


resumeButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openFolder(
            "Resume"
        );

    }
);


computerButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openFolder(
            "My Computer"
        );

    }
);


// =========================================
// LEFT NAVIGATION PANE
// =========================================

const documentsNav =
    document.getElementById("documentsNav");

const picturesNav =
    document.getElementById("picturesNav");


documentsNav.addEventListener(
    "click",
    () => {

        openFolder(
            "Documents"
        );

    }
);


picturesNav.addEventListener(
    "click",
    () => {

        openFolder(
            "Pictures"
        );

    }
);


// =========================================
// CLOSE EXPLORER
// =========================================

closeExplorer.addEventListener(
    "click",
    () => {

        explorerWindow.style.display =
            "none";

    }
);


// =========================================
// EXPLORER FOCUS
// =========================================

explorerWindow.addEventListener(
    "mousedown",
    () => {

        bringToFront(
            explorerWindow
        );

    }
);


// =========================================
// NOTEPAD
// =========================================

notepadWindow.addEventListener(
    "mousedown",
    () => {

        bringToFront(
            notepadWindow
        );

    }
);


function updateNotepadPosition() {

    const cursorPosition =
        notepadContent.selectionStart;

    const text =
        notepadContent.value.substring(
            0,
            cursorPosition
        );


    const lines =
        text.split("\n");


    const line =
        lines.length;


    const column =
        lines[lines.length - 1].length + 1;


    notepadPosition.textContent =
        "Ln " +
        line +
        ", Col " +
        column;
}


notepadContent.addEventListener(
    "keyup",
    updateNotepadPosition
);


notepadContent.addEventListener(
    "click",
    updateNotepadPosition
);


notepadContent.addEventListener(
    "input",
    updateNotepadPosition
);


function openNotepad(
    fileName,
    content
) {

    notepadWindow.style.display =
        "block";

    bringToFront(
        notepadWindow
    );


    notepadTitle.textContent =
        fileName +
        " - Notepad";


    notepadContent.value =
        content;


    notepadContent.setSelectionRange(
        0,
        0
    );


    updateNotepadPosition();


    notepadContent.focus();
}


closeNotepad.addEventListener(
    "click",
    () => {

        notepadWindow.style.display =
            "none";

    }
);


// =========================================
// RUN WINDOW
// =========================================

function openRun() {

    runWindow.style.display =
        "block";

    bringToFront(
        runWindow
    );


    const runInput =
        document.getElementById(
            "runInput"
        );


    runInput.focus();
}


closeRun.addEventListener(
    "click",
    () => {

        runWindow.style.display =
            "none";

    }
);


runWindow.addEventListener(
    "mousedown",
    () => {

        bringToFront(
            runWindow
        );

    }
);


// =========================================
// PHOTO VIEWER
// =========================================

let currentPhotos = [];

let currentPhotoIndex = 0;


function openPhotoViewer(
    photos,
    index
) {

    currentPhotos =
        photos;

    currentPhotoIndex =
        index;


    photoViewerWindow.style.display =
        "block";


    bringToFront(
        photoViewerWindow
    );


    displayCurrentPhoto();
}


function displayCurrentPhoto() {

    const photo =
        currentPhotos[
            currentPhotoIndex
        ];


    if (!photo) {
        return;
    }


    photoViewerImage.src =
        photo.image || "";


    photoViewerImage.alt =
        photo.name;


    photoViewerTitle.textContent =
        photo.name +
        " - Photo Viewer";


    photoViewerStatus.textContent =
        (currentPhotoIndex + 1) +
        " of " +
        currentPhotos.length;


    previousPhoto.disabled =
        currentPhotoIndex === 0;


    nextPhoto.disabled =
        currentPhotoIndex ===
        currentPhotos.length - 1;
}


previousPhoto.addEventListener(
    "click",
    () => {

        if (currentPhotoIndex <= 0) {
            return;
        }


        currentPhotoIndex--;


        displayCurrentPhoto();

    }
);


nextPhoto.addEventListener(
    "click",
    () => {

        if (
            currentPhotoIndex >=
            currentPhotos.length - 1
        ) {

            return;

        }


        currentPhotoIndex++;


        displayCurrentPhoto();

    }
);


closePhotoViewer.addEventListener(
    "click",
    () => {

        photoViewerWindow.style.display =
            "none";

    }
);


photoViewerWindow.addEventListener(
    "mousedown",
    () => {

        bringToFront(
            photoViewerWindow
        );

    }
);


// =========================================
// UNIVERSAL WINDOW DRAGGING
// =========================================

function makeWindowDraggable(
    windowElement,
    titleBar
) {

    let isDragging = false;

    let offsetX = 0;
    let offsetY = 0;


    titleBar.addEventListener(
        "mousedown",
        (event) => {

            // Don't drag when clicking buttons

            if (
                event.target.closest(
                    ".window-buttons, .run-window-buttons"
                )
            ) {

                return;

            }


            bringToFront(
                windowElement
            );


            const rect =
                windowElement.getBoundingClientRect();


            offsetX =
                event.clientX -
                rect.left;


            offsetY =
                event.clientY -
                rect.top;


            isDragging =
                true;


            titleBar.style.cursor =
                "grabbing";


            // Remove transforms before dragging

            windowElement.style.transform =
                "none";


            // Prevent selecting the title text

            event.preventDefault();

        }
    );


    document.addEventListener(
        "mousemove",
        (event) => {

            if (!isDragging) {
                return;
            }


            const windowWidth =
                windowElement.offsetWidth;

            const windowHeight =
                windowElement.offsetHeight;


            const maxLeft =
                Math.max(
                    0,
                    window.innerWidth -
                    windowWidth
                );


            const maxTop =
                Math.max(
                    0,
                    window.innerHeight -
                    windowHeight
                );


            let newLeft =
                event.clientX -
                offsetX;


            let newTop =
                event.clientY -
                offsetY;


            // Keep inside left edge

            newLeft =
                Math.max(
                    0,
                    newLeft
                );


            // Keep inside top edge

            newTop =
                Math.max(
                    0,
                    newTop
                );


            // Keep inside right edge

            newLeft =
                Math.min(
                    maxLeft,
                    newLeft
                );


            // Keep inside bottom edge

            newTop =
                Math.min(
                    maxTop,
                    newTop
                );


            windowElement.style.left =
                newLeft + "px";


            windowElement.style.top =
                newTop + "px";

        }
    );


    document.addEventListener(
        "mouseup",
        () => {

            if (!isDragging) {
                return;
            }


            isDragging =
                false;


            titleBar.style.cursor =
                "default";

        }
    );

}


// =========================================
// ENABLE DRAGGING
// =========================================

const explorerTitleBar =
    explorerWindow.querySelector(
        ".title-bar"
    );


const notepadTitleBar =
    notepadWindow.querySelector(
        ".title-bar"
    );


const runTitleBar =
    runWindow.querySelector(
        ".run-title-bar"
    );


const photoViewerTitleBar =
    photoViewerWindow.querySelector(
        ".title-bar"
    );


makeWindowDraggable(
    explorerWindow,
    explorerTitleBar
);


makeWindowDraggable(
    notepadWindow,
    notepadTitleBar
);


makeWindowDraggable(
    runWindow,
    runTitleBar
);


makeWindowDraggable(
    photoViewerWindow,
    photoViewerTitleBar
);
