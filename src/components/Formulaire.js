import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 0;
  }

  input {
    width: 100%;
    margin: 0px 0px 30px 0px;

    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: #fff;
    border-radius: 5px;

    font-size: 13px;

    letter-spacing: 1.4px;
    box-sizing: border-box;
    font-family: poppins;
    line-height: 1.6;
    padding: 10px !important;
    height: 44px;
    vertical-align: middle;
  }
`

const MessageArea = styled.textarea`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 120px;
  resize: none;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 13px;
  font-family: poppins;
  letter-spacing: 1.2px !important;
  line-height: 1.4;
  padding: 10px !important;
`

const SubmitBtn = styled.button`
  background-color: #e54b4b;
  display: block;
  text-align: center;
  border: 2px solid #e54b4b;
  padding: 10px 40px;
  border-radius: 5px;
  color: #fff;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e54b4b;
    background-color: transparent !important;
    color: #000;
  }
`

function Formulaire() {
  return (
    <React.Fragment>
      <Container>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-3">
            <MessageArea placeholder="Message" />
          </div>

          <div>
            <SubmitBtn type="submit">Send Message</SubmitBtn>
          </div>
        </form>
      </Container>
    </React.Fragment>
  )
}

export default Formulaire
