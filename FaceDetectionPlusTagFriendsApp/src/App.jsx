import { useEffect, useState } from 'react';
import './app.css';
import { Navbar } from './components/Navbar';
import NewPost from './components/NewPost';

function App() {

  const [ file,setFile ] = useState();
  const [ image,setImage ] = useState();
  
  // este efecto se dispara cada vez que haya un file.No tiene nada que ver con el submit.Fijate que necesito la altura y ancho de la imagen para el canvas
  useEffect(() => {

    const getImage = () => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      // en el onload porque hay que esperar a que la imagen este cargada(mejor lo hubieran llamado onFinishingLoad)
      img.onload = () => {
      setImage({
        url: img.src,
        width: img.width,
        height: img.height
      });
    }}
    file && getImage();    
  },[file]);

  console.log(image);
  
  return (
    <div className="app">
      <Navbar />
      { image ? (
        <NewPost image={image} />
      ) : (

        <div className="newPostCard">
        <div className="addPost">
          <img
            src="https://images.pexels.com/photos/9371782/pexels-photo-9371782.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="avatar"
            />
          <div className="postForm">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="postInput"
              />
            <input
              onChange={(e) => setFile(e.target.files[0])}
              id="file"
              style={{ display: "none" }}
              type="file"
              /> 
            <label htmlFor="file">
            
              <img
                className="addImg"
                src="https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png"
                alt=""
                />
              <img
                className="addImg"
                src="https://icon-library.com/images/maps-icon-png/maps-icon-png-5.jpg"
                alt=""
                />
              <img
                className="addImg"
                src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
                alt=""
                /> 
              <button>Send</button>
            </label>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default App;
