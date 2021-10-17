import styled from "styled-components";

export const Toast = styled.div`
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: navy;
    color:white;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 28px;
    border:4px solid #6395F2;
  }
  
  &.show {
    visibility: visible;
    animation: fadein 0.3s, fadeout 0.3s 0.8s;
  }
  
  @keyframes fadein {
    from {bottom: 0; opacity: 0;}
    to {bottom: 30px; opacity: 1;}
  }
  
  @keyframes fadeout {
    from {bottom: 30px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
  }
`;