
import styled from "styled-components";

export const ContainerPage = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("../img/login-bg.jpg");
    background-size:auto;
`;
export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;  
    background:  linear-gradient(to right,rgba(0,0,25,1) 20%, transparent , transparent , rgba(0,0,25,1) 80%)
`;
export const ButtonLogin = styled.button`
    width: 320px;
    height: 36px;
    margin: 28px 0px 8px 0px;
    user-select: none;

    font-size: 1.0rem;
    font-weight: 900;
    color: #6395F2;
    background-color: navy;
    border: 0px;
    border-radius: 4px;

    &:hover{
        cursor: pointer;   
        border: 1px solid #6395F2;
    }
    &:active{
        font-size: 0.95rem;
    }
`;
export const TextLoginTitle = styled.p`
    color:#6395F2;
    width:100%;
    margin: 24px;
    font-size: 75px;;
    font-family:fantasy;
    margin: 20px 0px;
    text-align: center;
    user-select:none;
    text-decoration: none;
    font-style: oblique;
    font-weight: bolder;
    text-shadow: 2px 2px 3px navy;
`;
export const TextLoginEntrar = styled.p`
    color:white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 28px;
`;
export const TextLoginError = styled.p`
    color: tomato;
    font-size: 16px;
    margin: 5px 0px 10px 0px;
`;