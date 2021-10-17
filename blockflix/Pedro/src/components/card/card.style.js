import styled from "styled-components";
import {ButtonDetails} from "../button/button.style"


export const CardContainer = styled.div`
    width: 185px;
    min-height: 450px;    
    display: flex;
    flex-direction: column;
    aling-items: center;

    border-radius: 6px;
    margin:8px 8px 8px 8px;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.8);

    &:hover{
        transform: scale(1.01);
        box-shadow: 0 0 8px rgba(255,255,255,0.5);
    }
`;
export const CardImg = styled.img`
    height: 278px;
    width: 185px;
    border-radius: 4px 4px 0px 0px;
`;
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    width: 100%;
    height: 100%;
    min-height: 168px;
    
    padding: 2px 2px;
    background: rgba(3, 4, 34, 1);
    border-radius: 0px 0px 4px 4px;
`;
export const CardTextTitle = styled.a`
    padding: 6px 2px 4px 2px;
    min-height:48px;
    margin: 0px 0px 2px 0px;

    color:#6395F2;
    font-size: 18px;
    text-align: center;
    text-decoration: none;

    transition: 0.5s;
    &:hover{
        color:white;
    }
`;
export const CardGroupButton = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`;
export const CardButtonAddCart = styled(ButtonDetails)`
    align-items: center;
    margin: 4px;
    padding:5px;
`;
export const CardTextValue = styled.p`
    font-size: 20px;
    color:white;//#6395F2
    height:40px;
`;
export const Text = styled.span`
    color: grey;
    font-size:18px;
    text-decoration: line-through;
`;
export const CardTextDate = styled.p`
    text-align: center;
    padding: 4px;
    font-size: 17px;
    color:grey;
    height:30px;
`;