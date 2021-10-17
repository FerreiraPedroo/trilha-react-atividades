import styled from "styled-components";

export const text = {
    red: "tomato",
    white: "white",
    silver: "gray",
}
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const TextCart = styled.p`
    display: flex;
    font-size: 40px;
    font-weight: bold;
    align-self:flex-start;
    color: white;
    padding: 10px 10px;
`;
export const ContainerCheckOut = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    width:100%;
    margin: 0px 6px 0px 6px;
`;
export const ContainerListCard = styled.div`
    display:flex
    flex-direction: column;
    max-width: 1100px;
    width:100%;
    margin-bottom: 10px;
`;
export const CheckOutCard = styled.div`
    display:flex;
    padding:10px;
    margin-bottom: 10px;
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
    width: 40%;
    flex-direction: column;
    justify-content:center;
    padding-left: 10px;
`;
export const ContainerMovieInfoRight = styled.div`
    display:flex;
    flex-direction: column;
    padding-left: 10px;
    @media(max-width: 720px) {
        padding-left: 0px;
      }
`;
export const ImgPoster = styled.img`
    margin-right: 10px;
    width: 92px;
    height: 132px;
    @media(max-width: 520px) {
        width: 60px;
        height: 96px; 
      }
`;
export const Text = styled.span`
    color: ${(props) => props.color ? props.color : "white"};
    font-size:${(props) => props.F ? props.F+"px" : "16px"};  
    ${props => (props.center === true ? "text-align: center;" : "")};
    ${props => (props.decoration === true ? "text-decoration: line-through;" : "")};
    margin-bottom:${props => (props.nomargin === true ? "0px" : "6px")};
    width:100%;
    @media(max-width: 640px) {
        font-size:${(props) => props.F ? (props.F-6)+"px" : "16px"};  
      }    
`;
export const ContainerCart = styled.div`
    display:flex;
    flex-direction: column;
    max-width: 1100px;
    width:100%;
    align-self: center;
    margin-bottom: 10px;
    padding:10px 50px 10px 50px;
    border: 1px solid #144EB8;

    @media(max-width: 720px) {
        padding:10px;
      }
`;
export const ContainerCartValue = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0px 10px 30px 10px;
    white-space: nowrap;
`;
export const ContainerCartValueCenter = styled.div`
    display: flex;
    flex-direction:column;
`;
