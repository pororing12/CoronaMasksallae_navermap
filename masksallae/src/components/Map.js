import React from "react";
import styled from "styled-components";
import { RenderAfterNvaermapsLoaded, NaverMap, Marker } from "react-naver-maps";
import MaskItem from "./MaskItem"


function NaverMapAPI() {
    return (
        <NaverMap
            mapDivId = {"maps-getting-started-uncontrolled"}
            style = {{
                width: "100%",
                height: "100vh",
            }}
            defaultCenter = {{ lat: 37.495430, lng: 126.982935}}
            defaultZoom = {13}/>
    )
}
function Map() {
    return (
        <RenderAfterNavermapsLoaded
          ncpClientId={"안알려줌"}
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMapAPI />
        </RenderAfterNavermapsLoaded>
      );
    }
export default Map;