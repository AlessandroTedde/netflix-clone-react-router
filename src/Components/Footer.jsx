import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";

const Footer = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={6}>
          <Row>
            <Col className="mb-2 text-start fs-4">
              <BiLogoFacebookCircle className="footer-icon me-2 text-secondary" />
              <BiLogoInstagram className="footer-icon me-2 text-secondary" />
              <BiLogoTwitter className="footer-icon me-2 text-secondary" />
              <BiLogoYoutube className="footer-icon text-secondary" />
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 g-5" style={{ fontSize: "13px" }}>
            <Col className="text-start">
              <Row>
                <Col className="footer-links">
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="text-start">
              <Row>
                <Col className="footer-links">
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="text-start">
              <Row>
                <Col className="footer-links">
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="text-start">
              <Row>
                <Col className="footer-links">
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a class="App-link" href="#" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Row>
              <Col className="mb-2">
                <Button variant="outline-secondary" size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
