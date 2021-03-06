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
            {masks.map((mask, index)=> (
                <MaskList 
                    key = {index}
                    addr = {mask.addr}
                    code = {mask.code}ㅇ
                    create_at = {mask.create_at}
                    lat = {mask.lat}
                    lng = {mask.lng}
                    name = {mask.name}
                    remain_stat = {mask.remain_stat}
                    stock_at = {mask.stock_at}
                    type = {mask.type}
                />
            ))}
        </div>
    )
}

export default MaskItem;