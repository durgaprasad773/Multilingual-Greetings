import './index.css'

const LanguageItems = props => {
  const {languageDetails, updateButton, isActive} = props

  const {id, imageUrl, buttonText, imageAltText} = languageDetails

  const activeBtn = isActive ? 'active-btn' : 'inactive-btn'

  const sendActiveId = () => {
    updateButton(id, imageUrl, imageAltText)
  }

  return (
    <li className="list-item">
      <button type="button" className={activeBtn} onClick={sendActiveId}>
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageItems
