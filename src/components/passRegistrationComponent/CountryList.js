import axios from 'axios'
import style from '../../assets/commonAssets/comIdentity.module.css';
import React, {useEffect , useState} from 'react'

export default function CountryList() {

    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((res)=>{
                setList(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        
        return () => {
            
        }
    }, [])
    
 
    return (
        
        <div>
            
            <select  className={style.options} >
           
                {list.map(list=>(
                    <option key= {list.id} > {list.name} </option>
                    
                ))}
            </select>
            
        </div>
    )
}
