import React from 'react';
import { Link } from 'react-router-dom';

const Filter = (props) => {
const {title} = props;
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <h2 className='text-white text-left'>{title}</h2>
            <div className='filter'>
                <strong className='text-white'>Filtrar por: </strong>
                <Link to='/vivos' color='success' className='py-2 px-4 rounded-0 badge-success' >Vivo</Link>
                <Link to='/mortos'  color='warning' className='py-2 px-4 mx-1 rounded-0 badge-warning' >Morto</Link>
                <Link to='/'  color='white' className='py-2 px-4 rounded-0 badge-light' >Todos</Link>
             </div>
        </div>
    )
}

export default Filter;