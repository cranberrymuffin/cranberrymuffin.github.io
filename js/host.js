var self = null; // Own self object
var connections = [];
var hostId = document.getElementById("host-id");
var connection_status = document.getElementById("connection-status");

/**
 * Create the Peer object for our end of the connection.
 *
 * Sets up callbacks that handle any events related to our
 * self object.
 */
function initialize() {
    // Create own self object with connection to shared PeerJS server
    self = new Peer();

    self.on('open', function (id) {
        // Workaround for self.reconnect deleting previous id
        console.log('ID: ' + self.id);
        hostId.innerText = self.id;
        connection_status.innerText = "Awaiting connection...";
    });
    self.on('connection', function (c) {
        connections.push(c);
        console.log("Connected to: " + connections.map(connection => connection.self));
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
        initBoard();
    }));
}
initialize();