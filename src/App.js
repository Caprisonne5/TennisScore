import './styles/App.css';
import {Card, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import Home from "./pages/Home";
import {Link, Route, Routes} from "react-router-dom";
import AddPlayer from "./pages/AddPlayer";

function App() {


    return (
    <Container>
        <Card style={{marginTop: "1rem"}}>
            <Navbar color="light" expand="md" light>
                <NavbarBrand>
                    Something Cool
                </NavbarBrand>
                <Nav className="mr-auto" pills>
                    <NavItem >
                        <NavLink style={{background:"#95b67f"}} tag={Link} to={"/addPlayer"} active>
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
