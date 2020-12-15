function getAsText(readFile) {

    const reader = new FileReader();
    reader.readAsText(readFile, "UTF-8");
    reader.onprogress = updateProgress;
    reader.onload = loaded;
    reader.onerror = errorHandler;
}

function updateProgress(evt) {
    //Progress bar
}

function loaded(evt) {
    const fileString = evt.target.result;
}

function errorHandler(evt) {
    alert(evt.target.error);
}