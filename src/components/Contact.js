import {useState, useRef} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import contactImg from '../assets/images/contact-img.svg';
import 'animate.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const validateFormFields = ({firstName, lastName, email, phone, message}) => {
    if (!firstName || !lastName || !email || !phone || !message) {
      setStatus({success: false, message: 'The fields mustn\'t be empty.'})
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormFields(formDetails)) return null
    setButtonText('Sending...');
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID,
      );
      if (result.status === 200)
        setStatus({success: true, message: 'Message sent successfully'});
    } catch (error) {
      setStatus({
        success: false,
        message: 'Something went wrong, please try again later.',
      });
    } finally {
      setButtonText('Send');
      setFormDetails(formInitialDetails);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({isVisible}) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__bounceInDown' : ''
                  }
                >
                  <img src={contactImg} alt="Contact me" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    name="firstName"
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="lastName"
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="email"
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="phone"
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    name="message"
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <button style={{borderRadius: '10px'}} type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <h3>
                      <p
                        className={
                          status.success === false ? 'danger' : 'success'
                        }
                      >
                        {status.message}
                      </p>
                    </h3>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
