import styled from "styled-components";

export const ContainerActors = styled.div`
    display:flex;
    align-items: flex-start;
`;
export const ContainerImagens = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    &:hover{
        transform: scale(1.02);
    }
    user-select: none;
`;
export const TextActors = styled.p`
    color:white;
    font-size: 40px;
    font-weight: bold;
    padding: 10px 0px 10px 0px;
    margin: 20px 0px 10px 0px;
    background-color: #003;
    user-select:none;
`;
export const TextInfo = styled.p`
    color : ${props => props.grey ? "grey" : "white" }; // #6395F2
    padding: 2px;
    font-size: ${props => props.F ? props.F+"px;" : "20px" };
    font-weight: ${props => props.bold ? "bold" : "normal" };
    ${props => props.nohover ? "" : "&:hover{cursor:pointer;color:white;}"};
    user-select:none;
`;
export const ImgActorPhoto = styled.img`
    padding: 4px 0px;
    border-radius: 100px;
    user-select: none;
`;
