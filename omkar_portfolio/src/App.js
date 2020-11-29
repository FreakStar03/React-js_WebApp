import React ,{ useLayoutEffect , useState  } from 'react';
import { Navbar , Tab , Row , Col  , ListGroup  , Nav , Jumbotron , Container  , NavDropdown , Form  , Button , Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scroll_bar.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import { IconButton } from '@material-ui/core'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import MailIcon from '@material-ui/icons/Mail';
import Testimonials from './Testimonials';
import IMAGES from './Images';
import Reviews from './review';
import { db } from './firebase';
import firebase from 'firebase';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
//import AwesomeComponent from './spinner';


  const useMediaQuery = () => {
  const [screenSize, setScreenSize] = useState([0, 0]);
  
  useLayoutEffect(() => {
    function updateScreenSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  
  return screenSize;
}

function App() {
  const [username , setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [text , setText] = useState('');

  const [width] = useMediaQuery();

  const message_save = (event) => {

    event.preventDefault();
    db.collection('messages').add({
      username: username,
      email: email,
      text: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setText('');
    setUsername('');
    setEmail('');
  }

  return (
    <div className="App">
      <header  >
        <div className='port__header' >
        <Navbar fixed="top" className='navbar_custom'  bg="light" expand="lg">
          <Navbar.Brand href="#home">Omkar-Daibhar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about_me">About</Nav.Link>
              <Nav.Link href="#project_by_me">Projects</Nav.Link>
              <NavDropdown title="Contact-me" id="basic-nav-dropdown">
                <NavDropdown.Item href="#message_me">Message-me</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Follow on Social media</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Other</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      </header>

      <div className='parallax'>

        <Testimonials />
      </div>
      <main id='home'>

        <div className='port__main'>
          <div className='port_start' >
              <Jumbotron fluid>
              <div className='port_main_col'>
                <div className='port_main_col_left'>
                  <h2>Myself Omkar Daibhar</h2>
                  <p>I have been doing ethical hacking since 2008 and always help other in cyber security and privacy improvement ! </p>
                </div>
                <div className='port_main_col_right'>
                    <img className='port_head_img' src='https://firebasestorage.googleapis.com/v0/b/omkar-port.appspot.com/o/IMG-20201007-WA0002.jpg?alt=media&token=34e9fc70-b9b8-48eb-88b0-b78804679e6c' alt='nothing' />
                </div>
              </div>

              </Jumbotron>
          </div>
          <spam id='about_me' ></spam>
          <div className='port_detail' >
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item  variant="light" action href="#link1">
                      What i know?
                    </ListGroup.Item>
                    <ListGroup.Item variant="light"  action href="#link2">
                      More about me?
                    </ListGroup.Item>
                    <ListGroup.Item variant="light"  action href="#link3">
                      My passions!
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <div className='port_detail_2'>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">
                      <p> I have done various course in hacking and also learned web development. </p>
                      <hr/>
                      <p> I also know phising and social hacking! </p>
                      <hr/>

                      <p> Codes wise, i am a linux terminal intermidate user mainly over kali linux destro!</p>
                      <hr/>
                      <p>I know about API fetching retriving Json from websites and other backend works!</p>

                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                      <ul>
                      <li><p> I was always passionated in hacking! </p></li>
                      <li><p> From the old sci-fi hacking movies to the running terminal codes, make me excited.</p></li>
                      <li><p>From pranking friends to helping and knowledging them about cyber security.</p></li>
                      </ul>
                      
                      
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">

                      <p> I am a goverment (police) certified ethical hacker </p>
                      <hr/>
                      <p> A.K.A ethical_hacker5917 over social media </p>
                      <hr/>
                      <p> I have Completed ceh v10 entrance exam at 2016 </p>
                      <hr/>
                      <p> I am persiving diploma in computer engineering at pk technical campus, Pune </p>
                      <hr/>
                      <p> Do follow me on instagram for cyber security help account link also listed down! (id ethical_hacker5917) </p>
                    </Tab.Pane>
                  </Tab.Content>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </div>

          <div className='port_scroll'>
          <Carousel>
            <Carousel.Item>
                <Jumbotron fluid>
                  <Container className='port_mover'>
                    <h1> Hackathon </h1>
                    <p>Completed hackathon course in 2012</p>
                  </Container>
                </Jumbotron>

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Jumbotron fluid>
                  <Container className='port_mover'>
                    <h1>Dark Web</h1>
                    <p>
                        Have some what experience in dark web!
                    </p>
                  </Container>
                </Jumbotron>


            </Carousel.Item>
            <Carousel.Item>
              <Jumbotron fluid>
                <Container className='port_mover'>
                  <h1>Something else</h1>
                  <p>
                    Participated in various event!
                  </p>
                </Container>
              </Jumbotron>


            </Carousel.Item>
          </Carousel>
          </div>
          <hr/>
          <div className='review__div'>
          <Reviews />
          </div>
          <hr/>
  
        </div>
      </main>
<div className='grouped_messge'>
{
  width < 769  ? 
  (
  <footer>
    <div className='port_footer' >
    <div className=' port_footer2_2'>
    <center>
        <FormatQuoteIcon fontSize="large" className='quote_left' />
        <h2 className='qoute_text' >Cyber Security is much more than a matter of IT! </h2> 
        <FormatQuoteIcon fontSize="large" className='quote_right'  />    
    </center>
    </div>

    <div className='port_footer1'>
    <Form className='port_form'>
      <h2 className='message_head'>Message me!</h2>
      <Form.Group>
        <Form.Label>User name</Form.Label>
        <Form.Control placeholder="User name" value={username}  onChange={event => setUsername(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}  onChange={event => setEmail(event.target.value)}  />
        <Form.Text className="text-muted">
           We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Put your message here!' value={text}  onChange={event => setText(event.target.value)}  />
      </Form.Group>
      <center>
      <Button onClick={message_save} className='message_but' variant="secondary" type="submit">
        Submit
      </Button>
      </center>
    </Form>
    </div>

    <div className='port_footer2' id='message_me'>
    <Container>
          <Row >
            <Col className='center'>
            <p>Follow me on!</p>
            </Col>
          </Row>
          <Row>
            <Col className='center'>

            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/omkar.dhaibar.30'>
            <IconButton>
            <FacebookIcon fontSize="large" /> 
            </IconButton>
            </a>

            </Col>

            <Col className='center'>

            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/ethical_hacker5917/?hl=en'>
            <IconButton>
            <InstagramIcon fontSize="large" />
            </IconButton>
            </a>

            </Col>
            <Col className='center'>

            <IconButton onClick={() => alert('omkardhaibar@gmail.com')}>
            <MailIcon fontSize="large" />
            </IconButton>


            </Col>

            <Col className='center'>

            <a target="_blank" rel="noopener noreferrer" href='https://in.linkedin.com/in/omkar-dhaibar-15772a19a?trk=people-guest_people_search-card'>
            <IconButton>
            <LinkedInIcon fontSize="large" />
            </IconButton>           
            </a>

            </Col>
          </Row>
    </Container>
    </div>


    </div>
  </footer>
  )
  :
  (
  <footer>
    <div className='port_footer' id='padd_spc' >
    <Row>
    <Col>
    <div className='port_footer1'>
    <Form className='port_form'>
      <h2 className='message_head'>Message me!</h2>
      <Form.Group>
        <Form.Label>User name</Form.Label>
          <Form.Control placeholder="User name" value={username}  onChange={event => setUsername(event.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email}  onChange={event => setEmail(event.target.value)}  />
          <Form.Text className="text-muted">
             We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder='Put your message here!' value={text}  onChange={event => setText(event.target.value)}  />
        </Form.Group>
        <center>
        <Button onClick={message_save} className='message_but' variant="secondary" type="submit">
        Submit
      </Button>
      </center>
    </Form>
    </div>
    </Col>

    <Col>

    <Col>
{/* export compo */}

    </Col>
    <div className='port_footer2' >
 <Container>
       <Row >
         <Col className='center'>
         <p>Follow me on!</p>
         </Col>
       </Row>
       <Row>
         <Col className='center'>

         <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/omkar.dhaibar.30'>
         <IconButton>
         <FacebookIcon fontSize="large" /> 
         </IconButton>
         </a>

         </Col>

         <Col className='center'>

         <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/ethical_hacker5917/?hl=en'>
         <IconButton>
         <InstagramIcon fontSize="large" />
         </IconButton>
         </a>

         </Col>
         <Col className='center'>

         <IconButton onClick={() => alert('omkardhaibar@gmail.com')}>
         <MailIcon fontSize="large" />
         </IconButton>


         </Col>

         <Col className='center'>

         <a target="_blank" rel="noopener noreferrer" href='https://in.linkedin.com/in/omkar-dhaibar-15772a19a?trk=people-guest_people_search-card'>
         <IconButton>
         <LinkedInIcon fontSize="large" />
         </IconButton>           
         </a>

         </Col>
       </Row>
 </Container>
            
    </div>
    <Col>
    <div className=' port_footer2_2'>
    <center>
        <FormatQuoteIcon fontSize="large" className='quote_left' />
        <h2 className='qoute_text' >Cyber Security is much more than a matter of IT! </h2> 
        <FormatQuoteIcon fontSize="large" className='quote_right'  />    
    </center>
    </div>
    </Col>

    </Col>
    </Row>
    </div>
  </footer>
  )
}
      
</div>
          <div className='image__div'>
              <hr/>
<div>
<center>
              <IMAGES />
</center>.
</div>

              <hr/>
          </div>
      <div className='credits'>
      <center >

        <p className='text__credits'>Crafted with Reactjs By @freakstar to @ethical_hacker5917</p>
      </center>

      </div>
    </div>
  );
}

export default App;
