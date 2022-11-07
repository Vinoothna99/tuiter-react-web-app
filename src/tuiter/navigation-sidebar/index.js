import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./index.css";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return(
        <>
            <div className="list-group">

                <Link to="/" className="list-group-item list-group-item-action">
                    <Container>
                        <Row>
                            <Col xs={2}> <i className="bi bi-twitter col-xs-12"></i></Col>
                            <Col>Labs</Col>
                        </Row>
                    </Container>

                </Link>
                <Link to="/tuiter/home"
                   className={`list-group-item list-group-item-action ${active==='home' ? 'active' : ''}`} >
                    <Container>
                        <Row>
                            <Col xs={12} xl={2}> <i className="bi bi-house-door-fill col-xs-12 col-xl-2"></i></Col>
                            <Col> <span className="d-none d-xl-block">Home</span></Col>
                        </Row>
                    </Container>


                </Link>
                <Link to="/tuiter/explores"
                   className={`list-group-item list-group-item-action ${active==='explores' ? 'active' : ''}`}>
                    <Container>
                        <Row>
                            <Col xs={12} xl={2}><i className="bi bi-hash col-xs-12 col-xl-2"></i></Col>
                            <Col><span className="d-none d-xl-block">Explore</span></Col>
                        </Row>
                    </Container>


                </Link>
                <a href="#"
                   className={`list-group-item list-group-item-action ${active==='notifications' ? 'active' : ''}`}>
                    <Container>
                        <Row>
                            <Col xs={12} xl={2}><i className="bi bi-bell-fill col-xs-12 col-xl-2"></i></Col>
                            <Col>
                                <span className="d-none d-xl-block">Notifications</span></Col>
                        </Row>
                    </Container>

                </a>
                <a href="#"
                   className={`list-group-item list-group-item-action ${active==='messages' ? 'active' : ''}`}>
                    <Container>
                        <Row>
                            <Col xs={12} xl={2}><i className="bi bi-envelope-fill col-xs-12 col-xl-2"></i></Col>
                            <Col>
                                <span className="d-none d-xl-block">Messages</span></Col>
                        </Row>
                    </Container>

                </a>
                <a href="#"
                   className={`list-group-item list-group-item-action ${active==='bookmarks' ? 'active' : ''}`}>
                    <Container>
                        <Row>
                            <Col xs={12} xl={2}><i className="bi bi-bookmark-fill col-xs-12 col-xl-2"></i></Col>
                            <Col>
                                <span className="d-none d-xl-block">Bookmarks</span></Col>
                        </Row>
                    </Container>

                </a>
                <a href="#"
                   className={`list-group-item list-group-item-action ${active==='lists' ? 'active' : ''}`}>
                    <Container>
                        <Row>
                            <Col xs={12} xl={2}><i className="bi bi-list-ul col-xs-12 col-xl-2"></i></Col>
                            <Col> <span className="d-none d-xl-block">Lists</span></Col>
                        </Row>
                    </Container>


                </a>
                <Link to="/tuiter/profile"
                   className={`list-group-item list-group-item-action ${active==='profile' ? 'active' : ''}`}>
                    <Container>
                        <Row>
                            <Col xs={12} xl={2}> <i className="bi bi-person-fill col-xs-12 col-xl-2"></i></Col>
                            <Col> <span className="d-none d-xl-block">Profile</span></Col>
                        </Row>
                    </Container>


                </Link>
                <a href="#" className="list-group-item list-group-item-action ">
                    <Container>
                        <Row>
                            <Col xs={12} xl={2}><i className="bi bi-three-dots col-xs-12 col-xl-2"></i></Col>
                            <Col>
                                <span className="d-none d-xl-block">More</span></Col>
                        </Row>
                    </Container>

                </a>

            </div>
            <button className="btn btn-primary tweet">Tweet</button>

        </>
    );
}

export default NavigationSidebar;

