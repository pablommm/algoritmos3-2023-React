import { useState } from 'react'
import './ToggleButton.css'

export const Toggle = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled)

  const callback = () => {
    toggle(!isToggled)
    onClick(!isToggled)
  }

  return (
    <label className="toggle-label">
      <input
        type="checkbox"
        defaultChecked={isToggled}
        onClick={callback}
        className="toggle-input"
      />
      <span className="toggle-span" />
      <strong>{label}</strong>
    </label>
  )
}

export default Toggle
