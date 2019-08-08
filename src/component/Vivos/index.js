import React, { useState, useEffect } from 'react';
import { Badge } from 'reactstrap';
import api from '../servicesApi';

const Vivos = () => {
    const [modes, setStatus] = useState([]);

    useEffect(() => {
        api.get('/characters').then(res => {
            setStatus(res.data)
        })
    }, []);

    const renderStatus = (person) => {
        const { status, name, birthday, occupation, img } = person;
        const masterHeader = {
            minHeight: '100%',
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }
       
   

        const vivos = 
                <div style={masterHeader}>
                    <div className='text-right'>{status === 'Alive' && <Badge color='success' className='py-2 px-5 rounded-0' >Vivo</Badge>}</div>
                    <div className='text-right'>{status !== 'Alive' && <Badge color='warning' className='py-2 px-5 rounded-0 ' >Morto</Badge>}</div>
                    <div className='detalhes'>
                        <h5>{name}</h5>
                        <span><i className='fa fa-star text-warning'></i> {birthday}</span>
                        <span>{occupation}</span>
                    </div>
                </div>
            
        return (
           
           status === "Alive" && <div  className='personItem' key={person.char_id} >{vivos}</div>
            
        )

    }

    return (
        <div className='container'>
            <div className='flex'>{ modes.map(renderStatus)}</div>
        </div>
    )
}

export default Vivos;