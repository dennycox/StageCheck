import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Container className="pt-3">
                <h3>Vind je ideale stage!</h3>
                <Link to={"/internships"}>
                    <Button variant="primary">Klik hier om te beginnen met zoeken</Button>
                </Link>
            </Container>
        </div>
    )
}

export default Home;