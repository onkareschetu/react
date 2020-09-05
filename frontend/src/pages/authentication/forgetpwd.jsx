import React from 'react';
import {Container,Row,Col,Card,Form,FormGroup,Label,Input,Button} from 'reactstrap' 

const Forgetpwd = (props) => {
    return (
    <div className="page-wrapper">
      <Container fluid={true}>
        <div className="authentication-main mt-0">
          <Row>
            <Col md="12" className="p-0">
              <div className="auth-innerright auth-minibox">
                <div className="reset-password-box">
                  <Card className="mt-4 mb-0">
                    <h4>Reset Your Password</h4>
                    <Form className="theme-form">
                      <FormGroup>
                        <Label className="col-form-label">Enter Your Mobile Number</Label>
                        <Row form>
                          <Col md="2">
                            <Input className="form-control digits mb-1" type="text" defaultValue="+ 91"/>
                          </Col>
                          <Col md="7" xl="8">
                            <Input className="form-control digits mb-1" type="tel" defaultValue="000-000-0000"/>
                          </Col>
                          <Col md="2">
                            <Button color="primary m-0">Send</Button>
                          </Col>
                        </Row>
                      </FormGroup>
                      <div className="text-center mt-4 mb-4"><span className="reset-password-link">If don't receive OTP?  <a className="btn-link text-danger" href="#javascript">Resend</a></span></div>
                      <FormGroup className="rounded p-4 opt-box">
                        <Label className="col-form-label pt-0">Enter OTP</Label>
                        <Row form>
                          <Col>
                            <Input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                          </Col>
                          <Col>
                            <Input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                          </Col>
                          <Col>
                            <Input className="form-control digits text-center opt-text" type="text" defaultValue="00" maxLength="2"/>
                          </Col>
                        </Row>
                      </FormGroup>
                      <h6 className="f-14 mt-4 mb-3">CREATE YOUR PASSWORD</h6>
                      <FormGroup>
                        <Label className="col-form-label">New Password</Label>
                        <Input className="form-control" type="password"/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Retype Password</Label>
                        <Input className="form-control" type="password"/>
                      </FormGroup>
                      <FormGroup className="form-row mb-2">
                        <Col md="2">
                          <Button color="primary">Done</Button>
                        </Col>
                      </FormGroup>
                    </Form>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
    );
}

export default Forgetpwd;