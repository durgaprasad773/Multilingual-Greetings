import {Component} from 'react'
import './App.css'

import LanguageItems from './components/LanguageItems'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
    currentImgUrl: languageGreetingsList[0].imageUrl,
    altText: languageGreetingsList[0].imageAltText,
  }

  updateButton = (id, imageUrl, imageAltText) => {
    this.setState({
      activeId: id,
      currentImgUrl: imageUrl,
      altText: imageAltText,
    })
  }

  render() {
    const {activeId, currentImgUrl, altText} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="btn-container">
          {languageGreetingsList.map(each => (
            <LanguageItems
              languageDetails={each}
              key={each.id}
              updateButton={this.updateButton}
              isActive={activeId === each.id}
            />
          ))}
        </ul>
        <img src={currentImgUrl} alt={altText} className="image" />
      </div>
    )
  }
}

export default App
