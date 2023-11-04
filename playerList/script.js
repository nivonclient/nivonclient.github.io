function check() {

    if (window.location.href.indexOf('?addplayer=') > -1) {
        var player = window.location.href.split('?addplayer=')[1].split('%3Cbr%3E');
        var storedPlayers = JSON.parse(localStorage.getItem('players')) || [];

        if (!isPlayerInArray(player, storedPlayers)) {
            storedPlayers = storedPlayers.concat(player);
            localStorage.setItem('players', JSON.stringify(storedPlayers));
        }

        var cleanURL = window.location.href.split('?')[0];
        window.location.href = cleanURL;
    }

    if (window.location.href.indexOf('?removeplayer=') > -1) {
        var playerToRemove = window.location.href.split('?removeplayer=')[1];
        var storedPlayers = JSON.parse(localStorage.getItem('players')) || [];

        storedPlayers = storedPlayers.filter(function (player) {
            return player !== playerToRemove;
        });

        localStorage.setItem('players', JSON.stringify(storedPlayers));

        var cleanURL = window.location.href.split('?')[0];
        window.location.href = cleanURL;
    }

    var storedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    if (storedPlayers.length > 0) {
        document.body.innerHTML += '<p>' + storedPlayers.join('<br>') + '</p>';
    }
}

function isPlayerInArray(player, array) {
    var playerString = player.join('<br>');
    return array.includes(playerString);
}
