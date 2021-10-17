import styled from "styled-components";

export const TextTrailer = styled.p`
    color:white;
    font-size: 40px;
    font-weight: bold;
    padding:10px 0px 10px 0px;
    margin: 20px 0px 10px 0px;
    background-color: #003;
    user-select:none;
`;
export const ContainerImagens = styled.div`
    display:flex;
    flex-flow: row no-wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 10px 20px;
    margin-bottom: 10px;
`;
export const ImgPoster = styled.img.attrs(props =>({
    src: props.src
}))`
    border: 2px solid white;
    border-radius: 6px;
    background-color: white;
`;
export const ImgPosterAll = styled(ImgPoster)`
    margin: 5px;
    border: 1px solid white;
    &:hover{
        transform: scale(1.02);
        cursor: pointer;
    }
`;