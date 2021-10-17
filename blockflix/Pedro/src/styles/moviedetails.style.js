import styled from "styled-components";
import { ButtonDetails } from "../components/button/button.style";

export const ContainerPage = styled.div`

`;
export const ContainerCenter = styled.div`
    display: flex;
    flex-direction: row;
    min-height:720px;
    background-color: #002;//#091534;
    background: linear-gradient(to top, rgba(0, 0, 36,1), rgba(9, 21, 52,0.1),transparent,transparent,transparent,transparent,transparent,transparent),linear-gradient(to right, rgba(1,1,1,1), rgba(10,10,10,0.8),transparent,transparent),url(${props => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;

    @media(max-width: 720px) {
        flex-direction: column;
        align-items: center;
      }
`;
export const ContainerLeft = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    padding: 20px 6px;
    @media(max-width: 720px) {
        width: 100%;
      }
`;
export const TextTitle = styled.span`
    font-size: 44px;
    font-weight: 600;
    color:white;
    margin-bottom: 10px;
`;
export const TextTagLine = styled.span`
    color : white;
    font-size: 24px;
    margin: 0px 0px 30px 0px;
`;
export const TextInfo = styled.span`
    color : ${props => props.grey ? "grey" : "white" };
    font-size: ${props => props.F ? props.F+"px;" : "16px" };
    ${props => (props.decoration === true ? "text-decoration: line-through;" : "")};

    margin: 8px 0px;
    text-align: justify;
    overflow-wrap: break-word;
    user-select:none;
    text-decoration: undescore;
`;
export const ContainerRight = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-end;
    width: 45%;
    padding: 20px;

    @media(max-width: 720px) {
        width: 100%;
        align-items: center;
      }
`;
export const ImgPoster = styled.img`
    border: 2px solid white;
    border-radius: 6px;
    background-color: white;
`;
export const ButtonAddCart = styled(ButtonDetails)`
    display: flex;
    justify-content: center;
    align-content: center;
    column-gap: 24px;;
    align-items: center;
    width: 300px;
    height: 64px;
    margin:20px 0px;
`;
export const ContainerMiddle = styled.div`
    display:flex;
    flex-direction:column;
    text-align: center;
`;
export const TextTrailer = styled.p`
    color:white;
    font-size: 40px;
    font-weight: bold;
    padding:10px 0px 10px 0px;
    margin: 20px 0px 10px 0px;
    background-color: #003;
    user-select:none;
`;
export const ImgPosterAll = styled(ImgPoster)`
    margin: 5px;
    border: 1px solid white;
    &:hover{
        transform: scale(1.02);
        cursor: pointer;
    }
`;
export const CartIcon = styled.span`
    font-size: 40px;
`;
