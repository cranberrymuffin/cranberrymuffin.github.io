
var lastPeerId = null;
var peer = null; // own peer object
var conn = null;
var connection_status = document.getElementById("connection-status");
var connectButton = document.getElementById("connect-button");
var cueString = "<span class=\"cueMsg\">Cue: </span>";

/**
 * Create the Peer object for our end of the connection.
 *
 * Sets up callbacks that handle any events related to our
 * peer object.
 */
function initialize() {
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
    });
    peer.on('connection', function (c) {
        // Disallow incoming connections
        c.on('open', function () {
            c.send("Sender does not accept incoming connections");
            setTimeout(function () { c.close(); }, 500);
        });
    });
    peer.on('disconnected', function () {
        connection_status.innerHTML = "Connection lost. Please reconnect";
        console.log('Connection lost. Please reconnect');

        // Workaround for peer.reconnect deleting previous id
        peer.id = lastPeerId;
        peer._lastServerId = lastPeerId;
        peer.reconnect();
    });
    peer.on('close', function () {
        conn = null;
        connection_status.innerHTML = "Connection destroyed. Please refresh";
        console.log('Connection destroyed');
    });
    peer.on('error', function (err) {
        console.log(err);
        alert('' + err);
    });
};

/**
 * Create the connection between the two Peers.
 *
 * Sets up callbacks that handle any events related to the
 * connection and data received on it.
 */
function join() {
    initBoard();
    // Close old connection
    if (conn) {
        conn.close();
    }

    // Create connection to destination peer specified in the input field
    var recvIdInput = document.getElementById("receiver-id");
    conn = peer.connect(recvIdInput.value, {
        reliable: true
    });

    conn.on('open', function () {
        connection_status.innerHTML = "Connected to: " + conn.peer;
        console.log("Connected to: " + conn.peer);
        screenname = document.getElementById("screen-name").value;

        conn.send(screenname);
    });
    // Handle incoming data (messages only since this is the signal sender)
    conn.on('data', function (data) {
        console.log("Player Recieved: " + data)
    });
    conn.on('close', function () {
        connection_status.innerHTML = "Connection closed";
    });
};

// Since all our callbacks are setup, start the process of obtaining an ID
initialize();