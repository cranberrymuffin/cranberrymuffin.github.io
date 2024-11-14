
var lastPeerId = null;
var self = null; // own self object
var host = null;
var connection_status = document.getElementById("connection-status");
var connectButton = document.getElementById("connect-button");
var cueString = "<span class=\"cueMsg\">Cue: </span>";
var connections = [];
/**
 * Create the Peer object for our end of the connection.
 *
 * Sets up callbacks that handle any events related to our
 * self object.
 */
function initialize() {
    // Create own self object with connection to shared PeerJS server
    self = new Peer();

    self.on('connection', function (c) {
        connections.push(c);
        if(connections.length >= 2) {
            initBoard();
        }
        ready(c);
    });
};

function ready(c) {
    c.on('data', function (data) {
        console.log("player recieved " + data)
    });
}

/**
 * Create the connection between the two Peers.
 *
 * Sets up callbacks that handle any events related to the
 * connection and data received on it.
 */
function join() {
    initBoard();
    // Close old connection
    if (host) {
        host.close();
    }

    // Create connection to destination self specified in the input field
    var recvIdInput = document.getElementById("receiver-id");
    host = connectTo(recvIdInput.value);
};

function connectTo(id) {
    var conn = self.connect(id);

    conn.on('open', function () {
        screenname = document.getElementById("screen-name").value;
        conn.send(screenname);
    });
    return conn;
}
// Since all our callbacks are setup, start the process of obtaining an ID
initialize();