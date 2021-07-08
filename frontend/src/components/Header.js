import React from 'react'
import {Navbar,Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

function Header() {
    return (
        <>
            <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>SHOPAHOLIC</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link href="#home"><img alt="cart" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTc0LjY2NyIgeDI9IjE3NC42NjciIHkxPSIzMCIgeTI9IjQzOC4wNzgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwZWZkMSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwYWNlYSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMzcyLjc4NiIgeDI9IjM3Mi43ODYiIHhsaW5rOmhyZWY9IiNhIiB5MT0iMzAiIHkyPSI0MzguMDc4Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMjU2IiB4Mj0iMjU2IiB4bGluazpocmVmPSIjYSIgeTE9IjMwIiB5Mj0iNDM4LjA3OCIvPjxwYXRoIGQ9Im0xNzQuNjY3IDM4MC43NzJhNDYuNSA0Ni41IDAgMSAwIDQ2LjUgNDYuNSA0Ni41NDkgNDYuNTQ5IDAgMCAwIC00Ni41LTQ2LjV6bTAgNzIuOTkyYTI2LjUgMjYuNSAwIDEgMSAyNi41LTI2LjUgMjYuNTI2IDI2LjUyNiAwIDAgMSAtMjYuNSAyNi41eiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Im0zNzIuNzg2IDM4MC43NzJhNDYuNSA0Ni41IDAgMSAwIDQ2LjUgNDYuNSA0Ni41NDkgNDYuNTQ5IDAgMCAwIC00Ni41LTQ2LjV6bTAgNzIuOTkyYTI2LjUgMjYuNSAwIDEgMSAyNi41LTI2LjUgMjYuNTI2IDI2LjUyNiAwIDAgMSAtMjYuNSAyNi41eiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Im00NzAuNDMzIDEwMy40MDctMzQwLjA4MS01LjEzNi05LjMyOS0yOC4yNzFhNDYuNTQyIDQ2LjU0MiAwIDAgMCAtNDQuMTY0LTMyaC0zNS4xNGExMCAxMCAwIDEgMCAwIDIwaDM1LjE0YTI2LjU3OCAyNi41NzggMCAwIDEgMjUuMTc5IDE4LjI4OWwxMS43ODEgMzUuNjExIDU0LjM1OSAxNjQuMjgtNC45IDExLjg2NWE0Ni4yOTMgNDYuMjkzIDAgMCAwIDQyLjk4NCA2My45NTVoMjAzLjAxOWExMCAxMCAwIDAgMCAwLTIwaC0yMDMuMDE5YTI2LjMxMiAyNi4zMTIgMCAwIDEgLTI0LjQ5LTM2LjM4NGwzLjg0NC05LjI3MiAyMTkuNzMzLTIyLjVhNTcgNTcgMCAwIDAgNDkuNTgtNDMuMzc2bDI1LjA3OC0xMDQuNzM4YTEwIDEwIDAgMCAwIC05LjU3NC0xMi4zMjN6bS0zNC45NTUgMTEyLjQxNWEzNi45ODggMzYuOTg4IDAgMCAxIC0zMi4xNjkgMjguMTQ0bC0yMTcuMzY1IDIyLjI3NC00OC45MzYtMTQ3Ljg2NiAzMjAuNjQxIDQuODQzeiIgZmlsbD0idXJsKCNjKSIvPjwvc3ZnPgo=" width="30px" height="30px" />
                            &nbsp; Cart
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/user">
                            <Nav.Link href="#link"><img alt="user" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNTYiIHkxPSI1MTQiIHgyPSIyNTYiIHkyPSIyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTE0KSI+DQoJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzJBRjU5OCIvPg0KCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDlFRkQiLz4NCjwvbGluZWFyR3JhZGllbnQ+DQo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTsiIGQ9Ik00MzcuMDIsMzMwLjk4Yy0yNy44ODMtMjcuODgyLTYxLjA3MS00OC41MjMtOTcuMjgxLTYxLjAxOA0KCUMzNzguNTIxLDI0My4yNTEsNDA0LDE5OC41NDgsNDA0LDE0OEM0MDQsNjYuMzkzLDMzNy42MDcsMCwyNTYsMFMxMDgsNjYuMzkzLDEwOCwxNDhjMCw1MC41NDgsMjUuNDc5LDk1LjI1MSw2NC4yNjIsMTIxLjk2Mg0KCWMtMzYuMjEsMTIuNDk1LTY5LjM5OCwzMy4xMzYtOTcuMjgxLDYxLjAxOEMyNi42MjksMzc5LjMzMywwLDQ0My42MiwwLDUxMmg0MGMwLTExOS4xMDMsOTYuODk3LTIxNiwyMTYtMjE2czIxNiw5Ni44OTcsMjE2LDIxNmg0MA0KCUM1MTIsNDQzLjYyLDQ4NS4zNzEsMzc5LjMzMyw0MzcuMDIsMzMwLjk4eiBNMTQ4LDE0OGMwLTU5LjU1Miw0OC40NDktMTA4LDEwOC0xMDhzMTA4LDQ4LjQ0OCwxMDgsMTA4cy00OC40NDksMTA4LTEwOCwxMDgNCglTMTQ4LDIwNy41NTIsMTQ4LDE0OHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" width="20px" height="20px" />
                            &nbsp; User
                            </Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
