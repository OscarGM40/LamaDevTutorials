
import { useEffect, useState } from 'react';
import './app.css'
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar';
import { posts } from './data'
import { io } from 'socket.io-client';



function App() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState("")
  // let user = true;
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    // puedo usar http | ws indistintamente y tendré que usar https ó wss cuando tenga SSL
    setSocket(io("ws://localhost:5000"));

  }, [])

  // al entrar a la app el usuario se mete al array de usuarios automáticamente
  useEffect(() => {
    socket?.emit("newUser", user)
  }, [socket, user])

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar socket={socket} />
          {posts.map(post =>
            (<Card post={post} 
              key={post.id} 
              socket={socket}
              user={user}/>) //fijate que el user es solo el nombre del usuario
          )}
          <span className="username">{username}</span>
        </>
      ) : (
        <div className="login">
          <input type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            onClick={() => setUser(username)}
          >Login</button>
        </div>

      )}
    </div>
  );
}

export default App;
