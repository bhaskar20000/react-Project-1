import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.name ? '#2563eb' : '#334155')};
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  color: #475569;
`

export const Button = styled.button`
  width: 100px;
  height: 40px;
  color: #ffffff;
  font-weight: 600;
  background-color: #2563eb;
  border: 0px;
  border-radius: 8px;
`

export const ImageElement = styled.img`
  height: 50%;
  width: 80vw;
`
