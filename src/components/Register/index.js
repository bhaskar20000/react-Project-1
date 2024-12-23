import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {
    activeOption: 'Arts and Culture',
    isFail: false,
    failText: '',
    typedText: '',
  }

  onSubmit = event => {
    event.preventDefault()
    const {activeOption, typedText} = this.state

    if (typedText === '') {
      this.setState({
        isFail: true,
        failText: 'Please enter your name',
      })
    } else {
      Cookies.set('username', typedText)
      Cookies.set('course', activeOption)
      this.setState({
        isFail: false,
      })
      const {history} = this.props
      history.replace('/')
    }
  }

  onSelect = event => {
    this.setState({
      activeOption: event.target.value,
    })
  }

  onInput = event => {
    this.setState({
      typedText: event.target.value,
    })
  }

  render() {
    const {activeOption, isFail, failText} = this.state

    return (
      <>
        <Header />
        <div className="register-body-container">
          <div className="left-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="website-image"
            />
          </div>
          <form onSubmit={this.onSubmit} className="right-continer">
            <h1 className="let-us-heading">Let us join</h1>
            <label htmlFor="typedId" className="label-ele">
              NAME
            </label>
            <input
              onChange={this.onInput}
              placeholder="Your name"
              className="input-ele"
              id="typedId"
            />
            <label htmlFor="selectIds" className="label-ele">
              TOPICS
            </label>
            <select
              id="selectId"
              onChange={this.onSelect}
              value={activeOption}
              className="input-ele"
            >
              {topicsList.map(eachitem => (
                <option key={eachitem.id} value={eachitem.displayText}>
                  {eachitem.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="register-now">
              Register Now
            </button>
            {isFail && <p className="fail-para">{failText}</p>}
          </form>
        </div>
      </>
    )
  }
}

export default Register
