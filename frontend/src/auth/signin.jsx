import React, { useState, useEffect } from 'react';
import man from '../assets/images/dashboard/profile.jpg';
import { Container, Row, Col, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import app, { googleProvider, facebookProvider, twitterProvider, githubProvider } from '../data/base'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import axios from  'axios';

const Login = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [loading, setLoading] = useState(false)

  const [value, setValue] = useState(
    localStorage.getItem('profileURL' || man)
  );
  const [name, setName] = useState(
    localStorage.getItem('Name')
  );

  useEffect(() => {
    localStorage.setItem('profileURL', value);
    localStorage.setItem('Name', name);
  }, [value, name]);

  const loginAuth = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      await app
          .auth()
          .signInWithEmailAndPassword(email, password).then(function () {
            setValue(man);
            setName("Emay Walter");
            setTimeout(() => {
              console.log(history, 'history')
              debugger
              history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
              window.location.reload()
            }, 200);
            })

      // await axios.post('http://localhost:8097/v1/auth/login', {
      //   email: email,
      //   password: password
      // })
      //   .then(function (response) {
      //     setValue(man);
      //     setName("Emay Walter");
      //     setTimeout(() => {
      //       window.location = "/dashboard/default"
      //       history.push(`${process.env.PUBLIC_URL}/dashboard/default`);
      //       window.location.reload()
      //     }, 200);
      //   });



    } catch (error) {
      setTimeout(() => {
        toast.error("Oppss.. The password is invalid or the user does not have a password.");
      }, 200);
    }
  }
  return (
    <div className="page-wrapper">
      <Container fluid={true} className="p-0">
        <div className="authentication-main m-0">
          <Row>
            <Col md="12">
              <div className="auth-innerright">
                <div className="authentication-box">
                  <CardBody className="h-100-d-center">
                    <div className="cont  b-light">
                      <div>
                        <Form className="theme-form">
                          <h4>LOGIN</h4>
                          <h6>Enter your Email and Password</h6>
                          <FormGroup>
                            <Label className="col-form-label pt-0">Email</Label>
                            <Input className="form-control" type="text" onChange={e => setEmail(e.target.value)} defaultValue={email} required="" />
                          </FormGroup>
                          <FormGroup>
                            <Label className="col-form-label">Password</Label>
                            <Input className="form-control" type="password" onChange={e => setPassword(e.target.value)} defaultValue={password} required="" />
                          </FormGroup>
                          <div className="checkbox p-0">
                            <Input id="checkbox1" type="checkbox" />
                            <Label for="checkbox1">Remember me</Label>
                          </div>
                          <FormGroup className="form-row mt-3 mb-0">
                            {loading ?
                              <Button color="primary btn-block" disabled={loading}>
                                LOADING...
                              </Button>
                              :
                              <Button color="primary btn-block" onClick={(event) => loginAuth(event)}>
                                LOGIN
                              </Button>
                            }

                          </FormGroup>
                        </Form>
                      </div>
                    </div>
                  </CardBody>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Login;
