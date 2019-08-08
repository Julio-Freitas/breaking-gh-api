import React, { useState } from 'react';
import logo from '../../breaking-bad-logo.png';
import Filter from '../Filter';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import Pesquisa from '../Pesquisa';
import './style.css';

const Header = () => {

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('Personagens');
    const [show, setShow] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }
    const namePage = name => () => {
        setName(name);
        setShow(false);
    }
    const [pesquisa, setPesquisa] = useState('');
    const [person, setPerson] = useState([])

    const search = value => (event) => {
        value = event.target.value
        setPesquisa(value);
    }

    const buscar = value => (event) => {
        if (value === '') {
            document.querySelector('input[type=search]').placeholder = 'Campo vazio não é permitido';
            document.querySelector('input[type=search]').style.borderBottom = '1px solid red';
            document.querySelector('input[type=search]').style.color = 'red !important'
            setShow(false);

        } else {
            document.querySelector('input[type=search]').style.borderBottom = '1px solid #fff';
            value = pesquisa;
            let array = value.split(" ").join('+');
            setPerson(array);
            setShow(true);
        }
    }


    return (
        <div>
            <Navbar className='container' light expand='md'>
                <NavbarBrand tag={Link} to='/' className='logo-header'><img src={logo} /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={open} navbar >
                    <Nav className='ml-5 ml-sm-0 text-sm-center navbar-nav' navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/' className=' text-white mx-2' onClick={namePage('Personagens')}>Personagens</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to='/episodios' className='text-white mx-2' onClick={namePage('Episódios')}>Episódios</NavLink>
                        </NavItem>
                    </Nav>
                    <div className='search-group ml-auto'>
                        <input onChange={search()} value={pesquisa} className='search-custom' type='search' placeholder='Pesquise por personagens nome e sobrenome' />
                        <NavLink tag={Link} to='/pesquisa' className='icon-search' onClick={buscar(pesquisa)}><i className="fa fa-search"></i></NavLink>
                    </div>
                </Collapse>
            </Navbar>

            <div className='container my-4'>
                <Filter title={name} />
            </div>
            {show === true && <Pesquisa name={person} />}
        </div>
    )
}

export default Header;