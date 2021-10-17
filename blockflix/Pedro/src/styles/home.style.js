import styled from "styled-components";

export const ContainerPage = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
`;
export const ContainerTop = styled.div`
    max-width: 1100px;
    width:100%;
    margin: 0px 20px 10px 20px;
`;
export const ContainerTopCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
    overflow: hidden;
`;
export const TextTop = styled.p`
    display: flex;
    width:100%;
    max-width:1100px;
    font-size: 34px;
    font-weight:bold;
    color: white;
    padding: 10px 20px;
`;
export const TextMiddle = styled.p`
    font-size: 34px;
    font-weight:bold;
    color: white;
    padding: 10px 20px;
`;
export const ContainerMiddleBar = styled.div`
    height: 54px;
    display: flex;
    max-width:1100px;
    width:100%;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px 10px 20px;

    @media(max-width: 760px) {
        flex-direction:column;
        align-items: center;
        height: 120px;
      }
`;
export const SelectMovieGenreEspecific = styled.select`
    width: ${props => props.w ? props.w : "160px;"};
    height: 32px;
    margin: 2px 5px;
    font-size: 20px;
    border:0px;
    border-radius: 4px;
    padding: 0px 8px;
    outline: none;
    color:#6395F2;
    background-color: #007;
    &:hover{
        cursor: pointer;   
        border: 1px solid #6395F2;
        box-shadow: 0px 0px 1px rgba(255,255,255,0.4), 0px 0px 5px rgba(0,0,255,1.5);
    };
`;
export const SelectOptions = styled.option`
    font-size: 20px;
`;
export const ContainerCenter = styled.main`
    margin: 5px;
    max-width: 1100px;
`;
export const ContainerCenterCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: center;
`;