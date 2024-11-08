var lastPeerId = null;
var peer = null; // Own peer object
var peerId = null;
var connections = [];
var recvId = document.getElementById("host-id");
var connection_status = document.getElementById("connection-status");

/**
 * Create the Peer object for our end of the connection.
 *
 * Sets up callbacks that handle any events related to our
 * peer object.
 */
function initialize() {
    initBoard();
    // Create own peer object with connection to shared PeerJS server
    peer = new Peer(null, {
        debug: 2
    });

    peer.on('open', function (id) {
        // Workaround for peer.reconnect deleting previous id
        if (peer.id === null) {
            console.log('Received null id from peer open');
            peer.id = lastPeerId;
        } else {
            lastPeerId = peer.id;
        }

        console.log('ID: ' + peer.id);
        recvId.innerHTML = "<text>ID: " + peer.id + "</text>";
        connection_status.innerHTML = "<text>Awaiting connection...</text>";
    });
    peer.on('connection', function (c) {
        // Allow only a single connection
        connections.push(c);
        console.log("Connected to: " + connections.map(connection => connection.peer));
        connection_status.innerHTML = "<text>Connected</text>";
        ready();
    });
};

/**
 * Triggered once a connection has been achieved.
 * Defines callbacks to handle incoming data and connection events.
 */
function ready() {
    connections.map(connection => connection.on('data', function (data) {
        console.log("Data recieved " + data);
    }));
}
initialize();