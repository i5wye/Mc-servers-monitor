const servers = [
    "server1_address",
    "server2_address",
    "server3_address"
];

const serverStatusDiv = document.getElementById("serverStatus");

function checkServerStatus(serverAddress) {
    fetch(`/status?address=${serverAddress}`)
        .then(response => response.json())
        .then(data => {
            const statusMessage = data.online ? `Online with ${data.players} players` : "Offline";
            serverStatusDiv.innerHTML += `<p>${serverAddress}: ${statusMessage}</p>`;
        })
        .catch(error => console.error(error));
}

servers.forEach(server => {
    checkServerStatus(server);
});
