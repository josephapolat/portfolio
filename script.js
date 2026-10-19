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


const aboutWindow =
    document.getElementById("aboutWindow");

const closeAbout =
    document.getElementById("closeAbout");

const closeAboutButton =
    document.getElementById("closeAboutButton");


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
                    `Double click any of the folder icons to access information about my projects.`
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
                content: `ONLINE BANKING APP

This is a full-stack online banking application I built
to practice working with a frontend, backend, database,
and user authentication.

TECHNOLOGIES USED

Frontend:
- JavaScript
- HTML
- CSS

Backend:
- Java
- Spring Boot
- Spring Security
- JWT
- Maven

Database:
- PostgreSQL

FEATURES

- User login
- User authentication
- JWT authentication
- Customer information
- Bank account information
- Account balances
- Account numbers
- Account nicknames
- Primary and secondary account signers

HOW IT WORKS

The frontend is built with React and communicates with
the Spring Boot backend using REST API requests.

When a user logs in, their credentials are sent to the
backend. If the login is successful, the backend returns
a JWT token. The frontend then uses that token when
making authenticated requests.

The backend connects to a PostgreSQL database to store
and retrieve the application's data.

WHAT I LEARNED

This project gave me more experience building a full-stack
application and connecting different parts of an application
together.

Some of the main things I practiced were:

- Building REST APIs with Spring Boot
- Using PostgreSQL
- Working with JWT authentication
- Using Spring Security
- Debugging frontend and backend issues
- Deploying an application

LIVE DEMO

https://onlinebanking-1-l0ky.onrender.com/index.html

GITHUB

https://github.com/josephapolat/onlinebanking.git

AUTHOR

Joseph Polat`
            },

            {
                name: "live demo",
                icon: "desktop-bookmark.ico",
                type: "link",
                url: "https://onlinebanking-1-l0ky.onrender.com/index.html"
            },

            {
                name: "github",
                icon: "desktop-bookmark.ico",
                type: "link",
                url: "https://github.com/josephapolat/onlinebanking.git"
            },

            {
                name: "example-photo-1",
                icon: "photos.ico",
                type: "photo",
                image: "ob-sc-1.png"
            },

            {
                name: "example-photo-2",
                icon: "photos.ico",
                type: "photo",
                image: "ob-sc-2.png"
            },

            {
                name: "example-photo-3",
                icon: "photos.ico",
                type: "photo",
                image: "ob-sc-3.png"
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
                content: `Full-Stack Forum App

About the Project

This is a full-stack forum application where users can register, log in, create posts, and interact with other posts. I built this project to practice full-stack development and learn how the frontend, backend, and database work together.

Features

User registration and login

User authentication

Create and view forum posts

Reply to posts

View and update profile information

Search functionality

Navigation between pages using React Router

Technologies Used

Frontend

React

JavaScript

HTML

CSS

Axios

React Router

Backend

Java

Spring Boot

Maven

REST APIs

Database

PostgreSQL

JDBC

Deployment

Render

Docker

Live Demo

View the live application

GitHub Repository

View the source code

What I Learned

While working on this project, I gained experience connecting a React frontend to a Java and Spring Boot backend. I worked with REST APIs, user authentication, database queries, and managing user and post data.

I also learned more about deploying a full-stack application using Docker and Render, configuring environment variables, and troubleshooting issues between the frontend, backend, and database.

Running Locally

Prerequisites

Node.js and npm

Java 17

Maven

PostgreSQL

Frontend

Clone the repository:

git clone https://github.com/josephapolat/forum.git

Navigate to the project directory.

Install the dependencies:

npm install

Start the frontend development server:

npm run dev

Backend

The backend runs using Spring Boot and Maven. Configure your PostgreSQL database and the required environment variables before starting the application.

Build the application with:

mvn clean package

Then run it using your IDE or the generated JAR file.

Future Improvements

Improve the overall design and user experience

Add more profile customization options

Add additional forum features

Improve error handling and validation`
            },

            {
                name: "live demo",
                icon: "desktop-bookmark.ico",
                type: "link",
                url: "https://forum-xfrm.onrender.com/"
            },

            {
                name: "github",
                icon: "desktop-bookmark.ico",
                type: "link",
                url: ""
            },
            {
                name: "example-photo-1",
                icon: "photos.ico",
                type: "photo",
                image: ""
            },
            {
                name: "example-photo-2",
                icon: "photos.ico",
                type: "photo",
                image: ""
            },
            {
                name: "example-photo-3",
                icon: "photos.ico",
                type: "photo",
                image: ""
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
                    "Live demo coming soon"
            },
            {
                name: "github",
                icon: "desktop-bookmark.ico",
                type: "link",
                url: ""
            },
            {
                name: "example-photo-1",
                icon: "photos.ico",
                type: "photo",
                image: ""
            },
            {
                name: "example-photo-2",
                icon: "photos.ico",
                type: "photo",
                image: ""
            },
            {
                name: "example-photo-3",
                icon: "photos.ico",
                type: "photo",
                image: ""
            }

        ]

    },


    Documents: {

        icon: "folder-empty.ico",

        search: "Search Documents",

        items: [

            {
                name: "Joseph-Polat-Resume.pdf",
                icon: "document.ico",
                type: "link",
                url: "joseph-polat-resume.pdf"
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


    Resume: {

        icon: "document.ico",

        search: "Search Resume",

        items: [

            {
                name: "Joseph Polat - Resume.pdf",
                icon: "document.ico",
                type: "link",
                url: "joseph-polat-resume.pdf"
            }

        ]

    },


    "Social": {

        icon: "folder-full.ico",

        search: "Search Computer",

        items: [

            {
                name: "linkedin",
                icon: "desktop-bookmark.ico",
                type: "link",
                url: "https://linkedin.com/in/joseph-aydin-polat"
            },

            {
                name: "github",
                icon: "desktop-bookmark.ico",
                type: "link",
                url: "https://github.com/josephapolat"
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


            // Links

            if (item.type === "link") {

                file.addEventListener(
                    "dblclick",
                    () => {

                        window.open(
                            item.url,
                            "_blank"
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

const resumeButton =
    document.getElementById("resumeButton");

const socialButton =
    document.getElementById("socialButton");

const aboutButton =
    document.getElementById("aboutButton");


projectsButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openFolder(
            "Projects"
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


socialButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openFolder(
            "Social"
        );

    }
);


// =========================================
// ABOUT ME
// =========================================

function openAbout() {

    aboutWindow.style.display =
        "block";

    bringToFront(
        aboutWindow
    );

    startMenu.classList.remove(
        "open"
    );

    startButton.classList.remove(
        "pressed"
    );
}


aboutButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        openAbout();

    }
);


closeAbout.addEventListener(
    "click",
    () => {

        aboutWindow.style.display =
            "none";

    }
);


closeAboutButton.addEventListener(
    "click",
    () => {

        aboutWindow.style.display =
            "none";

    }
);


aboutWindow.addEventListener(
    "mousedown",
    () => {

        bringToFront(
            aboutWindow
        );

    }
);


// =========================================
// LEFT NAVIGATION PANE
// =========================================

const documentsNav =
    document.getElementById("documentsNav");

const socialNav =
    document.getElementById("socialNav");

const projectsNav =
    document.getElementById("projectsNav");


documentsNav.addEventListener(
    "click",
    () => {

        openFolder(
            "Documents"
        );

    }
);


socialNav.addEventListener(
    "click",
    () => {

        openFolder(
            "Social"
        );

    }
);


projectsNav.addEventListener(
    "click",
    () => {

        openFolder(
            "Projects"
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


            windowElement.style.transform =
                "none";


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


            newLeft =
                Math.max(
                    0,
                    newLeft
                );


            newTop =
                Math.max(
                    0,
                    newTop
                );


            newLeft =
                Math.min(
                    maxLeft,
                    newLeft
                );


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


const aboutTitleBar =
    aboutWindow.querySelector(
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


makeWindowDraggable(
    aboutWindow,
    aboutTitleBar
);