if (!sessionStorage.getItem('username')) {
    window.location.href = 'index.html';
} else {
    var username = sessionStorage.getItem('username');
    const secretCode = 'cGFyaQ==';
    if (secretCode != username) {
        window.location.href = 'index.html';
    }
}

document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (event) {
    if (
        event.keyCode === 123 || // F12
        (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
        (event.ctrlKey && event.shiftKey && event.keyCode === 74) || // Ctrl+Shift+J
        (event.ctrlKey && event.keyCode === 85) // Ctrl+U
    ) {
        event.preventDefault();
    }
});
