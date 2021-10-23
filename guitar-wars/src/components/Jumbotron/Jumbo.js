import { Jumbotron } from 'reactstrap';
import Container from 'react-bootstrap/Container';

const Jumbo = (props) => {

  return (
    <div>
      <Container >
        <Jumbotron >
          <hr className="my-2" />
          <h1 className="display-3">This is my JumbroTron</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to    featured content or information.</p>
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <hr className="my-2" />
        </Jumbotron>
      </Container>
    </div>

  )

}

export default Jumbo;