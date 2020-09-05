import React, { Fragment } from 'react';
import LeftHeader from './leftbar'
import RightHeader from './rightbar'
import {Row} from 'reactstrap'

const Header = (props) => {
  return (
      <Fragment>
      <div className="page-main-header">
      <Row className="main-header-right m-0">
        <LeftHeader/>
        <RightHeader/>
      </Row>
    </div>
    </Fragment>
  );
}

export default Header;