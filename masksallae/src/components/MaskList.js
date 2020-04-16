import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";


function NaverMapAPI({ mask }) {
    const navermaps = window.naver.maps;
    console.log(mask);
    return (
        <NaverMap
            mapDivId = {"maps-getting-started-uncontrolled"}
            style = {{
                width: "100%",
                height: "100vh",
            }}
            defaultCenter = {{ lat: 37.495430, lng: 126.982935}}
            defaultZoom = {13}>
              {mask.map(masks => (
                <Marker 
                  key = {masks.code}
                  position = {new navermaps.LatLng(masks.lat, masks.lng)}
                  animation = {2}
                  onClick={() => {
                    alert(
                      `${masks.name}의 남은 마스크 개수는${
                        masks.remain_stat === "plenty" ? "100개 이상" : ""
                      } ${masks.remain_stat === "some" ? "30개 이상" : ""}${
                        masks.remain_stat === "few" ? "10개 이상" : ""
                      }${masks.remain_stat === "empty" ? "품절" : ""}${
                        masks.remain_stat === null ? "확인 불가" : "" 
                      }입니다.
                      `
                    );
                  }}/>
              ))}
            </NaverMap>
    )
}

function MaskList({
    mask
}) {
    return (
        <RenderAfterNavermapsLoaded
          ncpClientId={""}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapAPI mask = {mask}/>
        </RenderAfterNavermapsLoaded>
        
    )
}
export default MaskList;