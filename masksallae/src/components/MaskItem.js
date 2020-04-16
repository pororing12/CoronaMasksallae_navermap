import React, {useEffect, useState} from 'react';
import axios from 'axios'
import MaskList from './MaskList'

const BASE_URL = "https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByAddr/json?"

function MaskItem() {
    const [masks, setMask] = useState([]);
    useEffect(() => {
        const fetchApi = async() => {
            const response = await axios.get(BASE_URL, {
                params: { address: "서울특별시 서초구 방배동"}
            });
            console.log(response.data.stores);
            setMask(response.data.stores)
        }
        fetchApi();
    }, [])
    return (
        <div>
            <MaskList mask = {masks}/>
        </div>
    )
}

export default MaskItem;