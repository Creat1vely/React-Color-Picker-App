import { useState } from "react"

// import creatively branding
import CreativelyTitle from "./creatively-branding/CreativelyTitle";
import CreativelyWebDevLinks from "./creatively-branding/CreativelyWebDevLinks";


function App() {
  const [ color, setColor ] = useState("#ffffff");

  function handleColorChange( e ) {
    setColor( e.target.value )
  }

  async function handleColorCopy() {
    await navigator.clipboard.writeText( color )
    alert(`color code: ${ color } was copied to the clipboard`);
  }

  return (
    <div className='app'>
      <CreativelyTitle title="React Color Picker App"/>

      <div className="color-preview" style={ { backgroundColor: color } }
        onClick={ () => { handleColorCopy() } }>
          <span>
            { color }
          </span>
          <span className="help-text">
            ( click to copy )
          </span>
      </div>

      <label htmlFor="colorInput">
        Choose an color and get the color code:
      </label>
 
      <input type="color" value={ color } onChange={ handleColorChange } className="color-input"
        id="colorInput"/>

      <CreativelyWebDevLinks/>
    </div>
  )
}

export default App
