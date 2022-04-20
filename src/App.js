import React from "react";
import { MdAdd } from "react-icons/md";
import "./App.css";
import firebase from "firebase/app"


function App() {
  return (
    <div 
    className="genelyapi">
      <div className="tab">
        <h1>New Title</h1>
      </div>

      <form 
      id="form_id">
        <input
          onChange={toggleButton}
          type="text" 
          name="title"
          id="title"
          className="title"
          defaultValue="New Title">
        </input> 
   
        <textarea
          onChange={toggleButton}
          name="description"
          id="description"
          className="description"
          placeholder="New description">
        </textarea>
      </form>

      <div>
        <div className="image">
          <button 
          className="mdadd">
            <MdAdd />
          </button>
          <br></br><br></br><br></br>
          
          <label>GÖRSEL</label>

          <input hidden
          onChange={toggleButton} 
          type="file" 
          id="img" />
        </div>
      </div>

      <div>
        <input disabled 
        type="submit" 
        value=""
        className="mdstop" 
        id="mdstop" />
      </div>
      <br/> <br/><br/><br/>
      
      <hr width="100%" color="grey" size="10" />
      <br/><br/><br/><br/>
      
      <div 
      className="genel-yapi" 
      id="genelyyapi">
          <p>

          </p>
          <div className="tab">
            <h1>New Title</h1>
          </div>
          <div className="box"></div>
        <br /><br /><br /><br />
      </div>
    </div>
  );
}

export default App;

function toggleButton() {
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var img = document.getElementById("img").value;

  if (title && description && img) {
    document.getElementById("mdstop").disabled = false;
  } else {
    document.getElementById("mdstop").disabled = true;
  }
}

