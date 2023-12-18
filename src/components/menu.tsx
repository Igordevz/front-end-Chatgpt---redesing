"use client"
import Image from "next/image"
import styled from "styled-components"
import menuimg from "@/assets/menu-aberto.png"
export default function MenuItem({state}:any){

    return (
        <Container>
            <Image src={menuimg} alt="menu"   onClick={() => {
                state.setMenu(false)
            }}/>
        </Container>
    )
} 

const Container = styled.div`
    z-index: 2;
    position: absolute;
    left: 20px;
    top: 30px;

`