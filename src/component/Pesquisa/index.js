
import React, { useState, useEffect } from 'react';
import api from '../servicesApi';
import { Badge } from 'reactstrap';

const Pesquisa = (props) => {

    const { name } = props;
    const [result, setResult] = useState([]);

    useEffect(() => {
        api.get(`/characters?name=${name}`).then(res => {
            setResult(res.data);
        })
    }, [name])


    const exiberesult = (person) => {
        const { name, img, birthday, occupation, status } = person;
        const masterHeader = {
            width: '320px',
            position: 'relative',
            minHeight: '100%',
            backgroundImage: `url('${img}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }

        return (
            <div className='personItem' key={person.char_id} >
                <h1>Você pesquisou por "{name}"</h1>
                <div  style={masterHeader}>
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
        <div className='container'>
            <div className='flex'> {result.map(exiberesult)}</div>
        </div>
    )

}

export default Pesquisa