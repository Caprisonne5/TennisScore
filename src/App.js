import './styles/App.css';
import {Button, Card, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import Home from "./pages/Home";
import {BrowserRouter, Link, Route, Routes, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import AddPlayer from "./pages/AddPlayer";

function App() {

    /*const [pathName, setPathName] = useState(null);
    let location = useLocation();

    useEffect(() => {
        setPathName(location.pathname);
    }, [location]);*/


    return (
    <Container>
        <Card style={{marginTop: "1rem"}}>
            <Navbar color="light" expand="md" light>
                <NavbarBrand>
                    Something Cool
                </NavbarBrand>
                <Nav className="mr-auto" pills>
                    <NavItem>
                        <NavLink tag={Link} to={"/addPlayer"} active>
                            Add Player
                        </NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        </Card>
        <Routes>
            <Route path={'/TennisScore'} element={<Home/>}/>
            <Route path={'/addPlayer'} element={<AddPlayer/>}/>

        </Routes>
    </Container>

  );
}

export default App;
