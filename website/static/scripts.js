document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== "") {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<span class="you">Usuário:</span> ${message}`;
        document.getElementById('chatBox').appendChild(messageDiv);
        messageInput.value = '';  // Limpa o campo de texto
        document.getElementById('chatBox').scrollTop = document.getElementById('chatBox').scrollHeight; // Desce automaticamente
    }
});

// Permite enviar mensagem ao pressionar Enter
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('sendButton').click();
    }
});

var video = document.getElementById('videoPlayer');

if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource('http://34.66.89.191:8080/hls/stream.m3u8'); // Endereço do seu arquivo HLS
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play();
    });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = 'http://34.66.89.191:8080/hls/stream.m3u8';
    video.addEventListener('loadedmetadata', function () {
        video.play();
    });
}
