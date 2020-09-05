import React, { useState,Fragment,useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import sticky from "../../data/stickyData";
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
const Sticky = (props) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(sticky);
  }, []);

  const addStickyNote = () => {
    setNotes([...notes, { id: notes.length + 1, isDeleted: false }]);
  };

  const deleteNote = (note) => {
    note.isDeleted = true;
  };
  
    return (
      <Fragment>
      <Breadcrumb parent="Bouns Ui" title="Sticky"/>
      <Container fluid={true}>
      <Row className="sticky-header-main">
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Sticky Note
                      <a href="#javascript" onClick={addStickyNote} className="btn btn-primary pull-right m-l-10">Add New Note</a>
                    </h5>
                  </CardHeader>
                  <CardBody>
                    <div className="sticky-note" id="board">
                      {notes.map((data, index) => (
                        <div className={`note ui-draggable ui-draggable-handle ${data.isDeleted ? "d-none" : ""}`} key={index}>
                          <a href="# "  onClick={() => deleteNote(data)} className="button remove" >X</a>
                          <div className="note_cnt">
                            <textarea className="title" placeholder="Enter note title" style={{ height: "64px" }}></textarea>
                            <textarea className="cnt" placeholder="Enter note description here" style={{ height: "200px" }}></textarea>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
      </Container>
      </Fragment>
);
}

export default Sticky;