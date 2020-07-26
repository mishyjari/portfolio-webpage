import React from 'react';
import { Form, Button } from 'react-bootstrap';


class EmailForm extends React.Component {

  state = {
    contactName: '',
    contactEmail: '',
    heading: '',
    content: ''
  }

  handleChange = e => {
    e.persist();
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    console.log(this.state)
    var service_id = "default_service";
    var template_id = "contact";
    window.emailjs.send(service_id, template_id, this.state)
      .then(res => {
        this.setState({
          contactName: '',
          contactEmail: '',
          heading: '',
          content: ''
        }, () => alert('Email Sent!'))
      })
      .catch(err => alert(JSON.stringify(err)))
  }

  render() {
    return (
      <Form
        className='mailer'
        onChange={this.handleChange}
        style={{
          background: "#eee",
          borderRadius: '2rem',
          padding: '20px'
        }}
        >

        <Form.Group>
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type='text'
            placeholder='Your Name'
            name='contactName'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type='email'
            placeholder='Your Email Address'
            name='contactEmail'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Heading: </Form.Label>
          <Form.Control
            type='text'
            placeholder='What is your message about?'
            name='heading'
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Message: </Form.Label>
          <Form.Control
            as='textarea'
            name='content'
          />
        </Form.Group>

        <Button onClick={this.handleSubmit}>Submit</Button>

      </Form>
    )
  }
}

export default EmailForm
