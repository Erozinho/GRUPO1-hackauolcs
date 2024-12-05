document.getElementById('sendButton').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== "") {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = `<span>Usuário:</span> ${message}`;
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
