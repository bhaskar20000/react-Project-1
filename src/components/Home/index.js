import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  HomeMainContainer,
  Heading,
  Paragraph,
  Button,
  ImageElement,
} from './styledComponents'

import Header from '../Header'

class Home extends Component {
  render() {
    const name = Cookies.get('username')
    const course = Cookies.get('course')

    return (
      <>
        <Header />
        <HomeMainContainer>
          {name === undefined ? (
            <>
              <Heading>Welcome to Meetup</Heading>
              <Paragraph>Please register for the topic</Paragraph>
              <Link to="/register">
                <Button type="button">Register</Button>
              </Link>
            </>
          ) : (
            <>
              <Heading name>{`Hello ${name}`}</Heading>
              <Heading>{`Welcome to ${course}`}</Heading>
            </>
          )}
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeMainContainer>
      </>
    )
  }
}

export default Home
