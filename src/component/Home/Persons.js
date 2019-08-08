import React, { useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import api from '../servicesApi';



const Persons = () => {
   
    const [persons, setPerson] = useState([]);
    const [pages, setPages] = useState(0);


    useEffect(() => {
        api.get(`/characters?limit=9&offset=${pages}`).then(res => {
            setPerson(res.data);
        })
    }, [pages]);



    const mudaPg = val => (event) => {
        val = (event.target.value * 10);

        setPages(val);
        api.get(`/characters?limit=9&offset=${val}`).then(res => {
            setPerson(res.data);
        });
    }

    const renderiza = (person) => {
        const { name, img, birthday, occupation, status } = person;
        const masterHeader = {
            minHeight: '100%',
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
        return (
            <div className='personItem' key={person.char_id} >
                <div style={masterHeader}>
                    <div className='text-right'>{status === 'Alive' && <Badge color='success' className='py-2 px-5 rounded-0' >Vivo</Badge>}</div>
                    <div className='text-right'>{status !== 'Alive' && <Badge color='warning' className='py-2 px-5 rounded-0 ' >Morto</Badge>}</div>
                    <div className='detalhes'>
                        <h5>{name}</h5>
                        <span><i className='fa fa-star text-warning'></i> {birthday}</span>
                        <span>{occupation}</span>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className='container py-4' id='home'>
            { /** personagens */}
            <div className='flex'>{persons.map(renderiza)}</div>

            { /** Paginação */}
            <nav aria-label='Page navigation example'>
                <ul className='pagination'>
                    <li className='page-item'><input type='button' onClick={mudaPg()} className='page-link' value='0' /></li>
                    <li className='page-item'><input type='button' onClick={mudaPg()} className='page-link' value='1' /></li>
                    <li className='page-item'><input type='button' onClick={mudaPg()} className='page-link' value='2' /></li>
                    <li className='page-item'><input type='button' onClick={mudaPg()} className='page-link' value='3' /></li>
                    <li className='page-item'><input type='button' onClick={mudaPg()} className='page-link' value='4' /></li>
                    <li className='page-item'><input type='button' onClick={mudaPg()} className='page-link' value='5' /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Persons;