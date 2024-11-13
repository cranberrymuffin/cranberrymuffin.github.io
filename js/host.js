window.onload = init;

var self;
var connections;
var hostId;
var connection_status;
var screen_name;

function screenNameEntered() {
    return screen_name.value.trim().length;
}

function init() {
    self=null;
    connections=[];
    screen_name = document.getElementById("screen-name")
    shareCode = document.getElementById("share-code");
    connection_status = document.getElementById("connection-status");
}

function updateConnectionStatus() {
    if(connections.length <= 1 ) {
        connection_status.textContent = "Awaiting players...";
    } else {
        connection_status.textContent = connections.length + " players connected.";
    }
}

/**
 * Create the Peer object for our end of the connection.
 *
 * Sets up callbacks that handle any events related to our
 * self object.
 */
function openGameConnection() {
    if(!screenNameEntered()) {
        return;
    }
    // Create own self object with connection to shared PeerJS server
    self = new Peer();
    self.on('open', function (id) {
        document.getElementById("welcome").remove();
        connections.push(self.id)
        shareCode.textContent = "Share code: \n" + self.id
        updateConnectionStatus()

    });
    self.on('connection', function (c) {
        connections.push(c);
        console.log(connections)
        if(connections.length >= 2) {
            initBoard();
        }
        updateConnectionStatus()
        ready(c);
    });
}

/**
 * Triggered once a connection has been achieved.
 * Defines callbacks to handle incoming data and connection events.
 */
function ready(c) {
    c.on('data', function (data) {
        console.log("Host recieved " + data);
    });
}