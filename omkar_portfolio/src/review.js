import React from 'react';
import { CardDeck , Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Reviews() {

return(
    <div>
    <center>
    <h1>~Reviews~</h1>
    </center>
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>Password Security</Card.Title>
          <Card.Text>
                " Very helpful and polite helped me in my previous account password recover! "
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">~ Sanjay Kapur</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Cyber Security Improvement</Card.Title>
          <Card.Text>
            " I was thinking of starting a blog and was confused about ssl and whoisguard certificate as should i buy it or not, omkaar helped me and explain the importance of it.
                        Thanks for the help! "
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">~ Ganesh Bhat </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Android Rooting and bootware</Card.Title>
          <Card.Text>
            " ately my older device was become practically impossible to use because of android updates, omkar helped me my booting a older android version now it run smooth! "
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">~ Amit pawar</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    </div>
);
}

export default Reviews