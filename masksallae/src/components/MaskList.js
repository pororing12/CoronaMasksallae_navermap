import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";


function NaverMapAPI({ lat, lng, name, remain_stat }) {
    const navermaps = window.naver.maps;
    return (
        <NaverMap
            mapDivId = {"maps-getting-started-uncontrolled"}
            style = {{
                width: "100%",
                height: "100vh",
            }}
            defaultCenter = {{ lat: 37.495430, lng: 126.982935}}
            defaultZoom = {13}>
                <Marker 
                    position = {new navermaps.LatLng(lat, lng)}
                    animation = {2}
                    onClick ={() => {
                        alert(
                            `${name}의 남은 마스크 개수는${
                                remain_stat === "plenty" ? "100개 이상" : ""
                              } ${remain_stat === "some" ? "30개 이상" : ""}${
                                remain_stat === "few" ? "10개 이상" : ""
                              }${remain_stat === "empty" ? "품절" : ""}${
                                remain_stat === null ? "확인 불가" : ""
                              }입니다.`
                        )
                    }}/>
            </NaverMap>
    )
}

function MaskList({
    addr,
    code,
    create_at,
    lat,
    lng,
    name,
    remain_stat,
    stock_at,
    type,
}) {
    return (
        <RenderAfterNavermapsLoaded
          ncpClientId={"안알려줌"}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapAPI lat = {lat} lng = {lng} name = {name} remain_stat = {remain_stat}/>
        </RenderAfterNavermapsLoaded>
        
    )
}
export default MaskList;