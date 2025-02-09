if (!sessionStorage.getItem('username')) {
    window.location.href = 'index.html';
} else {
    var username = sessionStorage.getItem('username');
    const secretCode = 'cGFyaQ==';
    if (secretCode != username) {
        window.location.href = 'index.html';
    }
}