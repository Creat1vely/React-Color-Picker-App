import { useState } from "react"

// import creatively branding
import CreativelyTitle from "./creatively-branding/CreativelyTitle";
import CreativelyWebDevLinks from "./creatively-branding/CreativelyWebDevLinks";


function App() {
  // define color stateful value to hold color code
  const [ color, setColor ] = useState("#ffffff");

  // handleColorChange()
  // used to update color state on changes made in 
  // the color input
  function handleColorChange( e ) {
    setColor( e.target.value )
  }

  // handleColorCopy()
  // used to copy color state as text to clipboard
  // and then alert the user about it
  async function handleColorCopy() {
    // copy text to clipboard
    await navigator.clipboard.writeText( color )

    // alert user about copy
    alert(`color code: ${ color } was copied to the clipboard`);
  }

  return (
    <div className='app'>
      <CreativelyTitle title="React Color Picker App"/>

      {/* color preview box */}
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
 
      {/* color input */}
      <input type="color" value={ color } onChange={ handleColorChange } className="color-input"
        id="colorInput"/>

      <CreativelyWebDevLinks/>
    </div>
  )
}

export default App
