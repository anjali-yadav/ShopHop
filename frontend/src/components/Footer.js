import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <span>
                                Copyright &copy; Shopaholic.com
                            </span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
