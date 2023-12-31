import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import { Image } from 'react-bootstrap';

export default function MyNavBar() {

    const links = [
        {
            to:"",
            title:"Home"
        },
        {
            to:"books",
            title: "Books"
        },
        {
            to:"authors",
            title: "Authors"
        }
    ]

    return(
        <Navbar style={{ backgroundImage: 'linear-gradient(to left, #80ced6, #7d7ff3)' }}>            
            <Container>
                
                <LinkContainer to="/" style={{ cursor: 'pointer' }}>
                    <Navbar.Brand className='fs-2'>
                        <Image src="https://static.vecteezy.com/system/resources/previews/024/044/212/original/book-icon-clipart-transparent-background-free-png.png" alt="Logo" style={{ maxHeight: '3rem' }} />
                    </Navbar.Brand>
                </LinkContainer>

                <Nav className='me-auto fs-4'>
                    {links.map((link) => (
                        <LinkContainer to={`/${link.to}`} key={link.to}>
                            <Nav.Link>{link.title}</Nav.Link>
                        </LinkContainer>
                    ))}
                </Nav>

            </Container>
        </Navbar>
    )
}