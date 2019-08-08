import React, {useState, useEffect} from 'react';
import api from '../servicesApi';

const Epsodios = () => {
    const [totalEp, setTotalEp] = useState();
    const [eps, setEps] = useState([]);
    

useEffect(()=>{
    api.get('/episodes').then(res => {
        
        setTotalEp(res.data.length);
        setEps(res.data);
        console.log(res.data)
    })
},[]);
var arr = [];
for (let index = 0; index < Number(totalEp); index++) {
    arr.push(index); 
     
}

const episodios = (ep)=>{
    const {episode_id, title, season, episode, air_date, characters} = ep;
    const data = air_date.split('-');
    const newDate = [];
    newDate.push(data[1], data[0], data[2])

    return (
        <div className='flex border-b-gray py-2 text-white' key={episode_id}>
            <div className='flex-ep'>
                <h2 className='text-white'>{title}</h2>
                <span>Season {season} - Episódio {episode}</span>
            </div>
            <div className='flex-ep'>
                <p className='mb-0' >Data de estréia</p>
                <span>{newDate.join('/')}</span>
            </div>
            <div className='flex-ep'>
                <p className='mb-0'>Personagens</p>
                <span>{characters}</span>
            </div>
        </div>
    )
}

    return(
        <div className='container'>
            {eps.map(episodios)}
        </div>
    )
}

export default Epsodios;