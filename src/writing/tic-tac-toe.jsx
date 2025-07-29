import Navigation from '../navigation/Navigation';
import './writing.css';

export default function TicTacToeBlogPost() {
  return (
    <div id="main" className="main">
      <Navigation />
      <div id="blog" className="blog">
        <div id="writing" className="writing">
          <h1>
            WebRTC multiplayer <a href="/tic-tac-toe">Tic-Tac-Toe</a>
          </h1>
          <i>
            First published <time datetime="2025-01-30">Feb 4, 2025</time>.
          </i>
          <p>
            What if you could play a game online with a friend, peer-to-peer,
            without needing a backend server? Just two players connected
            directly through the magic of <strong>WebRTC</strong> and{' '}
            <strong>PeerJS</strong>. We are going to explore how this was
            accomplished in <a href="/tic-tac-toe">Tic-Tac-Toe</a>.
          </p>

          <h2>Peer-to-Peer: No Servers, No Problem</h2>
          <p>
            WebRTC is used to establish a direct connection between two players
            (the host and the guest). Here’s how it plays a crucial role:
            Peer-to-peer connection: Instead of sending requests to a server to
            fetch or update the game state, WebRTC establishes a direct
            connection between two browsers.
          </p>
          <p>
            This enables low-latency communication, which is ideal for real-time
            applications like games. WebRTC's data channel is key here. It’s a
            bi-directional communication channel between two peers, allowing
            them to send messages, like game moves, back and forth instantly.
            For example, when a player makes a move on their board, that move is
            transmitted via the data channel to the opponent, who updates their
            board state in real-time.
          </p>
          <p>
            Most multiplayer games rely on a server to shuttle messages back and
            forth. WebRTC skips all that. It lets two players
            <strong>connect directly</strong> and
            <strong>exchange data instantly</strong>. That means no need for an
            expensive backend.
          </p>

          <h2>PeerJS: Making WebRTC Easy</h2>
          <p>
            WebRTC is great, but setting it up can be a headache. Enter{' '}
            <strong>PeerJS</strong>, which simplifies everything. Instead of
            dealing with connection details, PeerJS assigns each player a{' '}
            <strong>unique ID</strong>. One player shares their ID, the other
            connects, and boom—game on.
          </p>
          <h3>Step 1: new Peer</h3>
          <p>
            Each player needs to have an instance of <code>new Peer()</code> to
            participate in PeerJs backed WebRTC. The peer object takes some time
            to be set up. So once a new Peer() is created, we must wait for the{' '}
            <code>peer.on('open', ...</code>) event handler to be triggered in
            order to guarantee the Peer object has been competely set up.
          </p>
          <h3>Step 2: Hosting</h3>
          <p>
            One player's <code>Peer</code> object will act as a host. After the
            open Event Handler is triggered on the host peer, its code can be
            shared to a client to create a data channel. Once that data channel
            is created, the host peer's <code>peer.on('connection', ...)</code>{' '}
            event handler is triggered. The event handler will pass a ready peer
            js <code>DataConnection</code> object to the callback triggered.
            This DataConnection is a data channel to send and recieve messages
            to the connected client.
          </p>
          <h3>Step 3: Joining</h3>
          <p>
            The other player's <code>Peer</code> object will connect to a host
            using the host's peer ID. This will be done via{' '}
            <code> const conn = peer.connect(hostPeerId)</code>
            conn in this code snippet is of type <code>DataConnection</code>.
            The <code>DataConnection</code> takes some time to set up once
            <code>connect</code> is called. We will listen to the{' '}
            <code>DataConnection</code>'s <code>conn.on("open", ...)</code>{' '}
            event handler to be triggered to ensure the DataConnection is done
            being set up.
          </p>
          <h3>Step 4: Sending and Recieving data</h3>
          <p>
            Both the host and the client should subscribe to the{' '}
            <code>conn.on("data", ...)</code> event handler. This event handler
            will trigger a callback and pass data recieved via the{' '}
            <code>DataConnection</code>. Both the host and the client can send
            data via <code>conn.send</code>
          </p>
        </div>
      </div>
    </div>
  );
}
