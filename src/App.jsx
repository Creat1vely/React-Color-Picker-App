import { useState } from "react"


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
      <h1 className="app-title">
        color picker
      </h1>

      <div className="color-preview" style={ { backgroundColor: color } }
        onClick={ () => { handleColorCopy() } }>
          <span>
            { color }
          </span>
      </div>

      <label htmlFor="colorInput">
        Choose an color:
      </label>
 
      <input type="color" value={ color } onChange={ handleColorChange } className="color-input"
        id="colorInput"/>
    </div>
  )
}

export default App
