import React from "react";
import { Button, Container, Dropdown } from "react-bootstrap";
import "../../scss/wallets.scss"

import KeyKedgesCards from "../../components/ProductCards/KeyKedgesCards";

import KeyBanner from "../../Img/Banners/KeyBanner.png"

function KeyKedgesCatalog () {

    return (

        <>
            <Container fluid style={{padding: "0px"}}>
                <div className="banner-style">
                    <div className="img-container">
                       <img className="img-banner" src={KeyBanner}/> 
                    </div>
                    <div className="overlay-container">
                        <div className="txt-container">
                            <h1 className="txt-overlay">Key Kedges</h1>
                        </div>
                    </div>
                </div> 
            </Container>
            <Container fluid style={{paddingTop: "30px"}}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-between px-5">
                        <div className="px-1" style={{border: "solid 1px", borderColor: "#828C76", borderRadius: "3px"}}>
                          <p className="m-0">Lorem X</p>  
                        </div>
                        <Button className="" style={{background: "none", color: "#828C76"}}>Clear All</Button>
                    </div> 
                    <Dropdown>
                        <Dropdown.Toggle style={{background: "none", color: "#828C76"}} id="dropdown-autoclose-true">
                            Featured
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{backgroundColor: "#2A1D18", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)"}}>
                            <Dropdown.Item style={{color: "#828C76"}}>BEST SELLING</Dropdown.Item>
                            <Dropdown.Item style={{color: "#828C76"}}>PRICE, HIGH TO LOW</Dropdown.Item>
                            <Dropdown.Item style={{color: "#828C76"}}>PRICE, LOW TO HIGH</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <hr className="px-5" style={{height: "2px", width: "100%", color: "#828C76"}} />
            </Container>
            <Container fluid className="px-5 d-flex">
                <KeyKedgesCards/>
            </Container>
            
        </>
        
    )

}

export default KeyKedgesCatalog