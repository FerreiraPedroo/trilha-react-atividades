import styled from "styled-components";
import { ButtonDetails } from "../components/button/button.style";

export const config = {
    red: "tomato",
    white: "white",
    silver: "gray",
    "16": "16px",
    "18": "18px",
    "20": "20px",
    "28": "28px",
    "32": "32px",
    "40": "40px",
    "48": "48px",
    "64": "64px",
    "96": "96px",
    "128": "128px",
    "160": "160px",
    "0": ""
}
export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const OrdersContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    max-width:1100px;
    width: 100%;
    height: 100%;
    padding: 0px 6px;
`;
export const TextCart = styled.p`
    display: flex;
    font-size: 38px;
    font-weight:bold;
    color: white;
    padding: 10px 14px;
    align-self: flex-start;
    @media(max-width: 520px) {
        font-size: 34px; 
      }
`;
export const ContainerOrders = styled.div`
    display:flex;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
`;
export const CheckOutCard = styled.div`
    display:flex;
    padding:10px;
    margin-bottom: 5px;
    border: 1px solid #144EB8;
`;
export const ContainerMovieInfoLeft = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
    padding-left: 10px;
`;
export const ContainerMovieInfoCenter = styled.div`
    display:flex;
    width: 60%;
    flex-direction: column;
    padding-left: 20px;
`;
export const ContainerMovieInfoRight = styled.div`
    display:flex;
    width: 25%;
    flex-direction: column;
    padding-left: 20px;
`;
export const ImgPoster = styled.img`
    width: 92px;
    height: 132px;

    @media(max-width: 520px) {
        width: 60px;
        height: 96px; 
      } 
`;
export const Text = styled.span`
    color: ${(props) => config[props.color] !== undefined ? config[props.color] : "white"};
    font-size:${(props) => props.F ? props.F+"px;" : "16px;"};  
    ${props => (props.center === true ? "text-align: center;" : "")};
    margin-bottom:6px;
    width:100%;
    @media(max-width: 640px) {
        font-size:${(props) => props.F ? (props.F-8)+"px" : "16px"};  
      } 
`;
export const Button = styled(ButtonDetails)`
    display:flex;
    padding: 5px;
    width:100%;
    align-items: center;
    font-size:${(props) => props.F ? props.F+"px;" : "16px;"};
    margin-bottom: 2px;
    box-sizing: border-box;
    border: 1px solid navy;
    transition: border-radius 0.5s;
    border-radius:10px;

    @media(max-width: 640px) {
        font-size:${(props) => props.F ? (props.F-8)+"px" : "16px"};  
        &:active{
            font-size:${(props) => props.F ? (props.F-8)+"px;" : "16px;"};
        };
        &:before {
            font-size:${(props) => props.F ? (props.F-18)+"px;" : "16px;"};
        };
    } 
    @media(min-width: 720px) {
        &:active{
            font-size:${(props) => props.F ? props.F+"px;" : "16px;"};
        };        
    }
    &.act{
        transition: border-radius 0.5s;  
        ${props =>(props.active === false ? "border-radius:8px 8px 0px 0px" : "border-radius:8px 8px 0px 0px;")} 
        &:before {
            content: "▽";
        };
    };
    &:hover{
        cursor: pointer;   
        border: 1px solid #144EB8;
        color:white;
        background-color: #144EB8;
    };
    &:before {
        content:"▷";
        font-size:${(props) => props.F ? props.F+"px;" : "16px;"};
        margin: 0px 10px 0px 10px;
    };
`;
export const Accordion = styled.div`
    display:flex;
    width: 100%;
    flex-direction: column;
`;
export const ContainerOrder = styled.div`
    display:flex;
    justify-content: center;
`;