import { useState } from 'react'
import './ToggleButton.css'

export const Toggle = ({ label, toggled, onClick, setVisualizar }) => {
  /* const [isToggled, toggle] = useState(toggled) */

  const callback = () => {
    setVisualizar(!toggled)
    onClick(!toggled)
  }

  return (
    <div className="toggle-container">
      <label className="toggle-label">
        <input
          type="checkbox"
          defaultChecked={toggled}
          onClick={callback}
          className="toggle-input"
        />
        <span className="toggle-span" />
        <strong>{label}</strong>p
      </label>
    </div>
  )
}

export default Toggle
