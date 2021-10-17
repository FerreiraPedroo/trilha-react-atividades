import styled from "styled-components";

export const ContainerNavBar = styled.nav`
    width:100%;
    height: 60px;
    display:flex;
    justify-content:space-between;
    align-items: flex-end;
    background-color: #144EB8;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 14%, rgba(7,12,130,1) 44%, rgba(10,26,108,1) 92%);
    z-index: 100;
`;
export const NavBarButton = styled.div`
    height: 59px;
    float: left;
    color: #091834;
    text-align: center;
    padding: 8px 16px;
    font-size: 18px
`;
export const NavBarButtonCart = styled(NavBarButton)`
    width: 96px;
    position: relative;
    display: inline-block;
    height: 60px;
    color: #144EB8;
    padding: 14px 0px;
    &:hover{
        cursor: pointer;
        background-color: rgba(0,0,102,1);
        color: white;
    }
    @media(max-width: 520px) {
        width: 48px;
        height: 32px;
        align-items: center;
      }
`;
export const NavBarButtonRight = styled.div`
    display:flex;
    float: right;
    height: 100%;
`;
export const NavBarButtonCartIcon = styled.span`
    position: absolute;
    top: 2px;
    right: 4px;
    width: 26px;
    height: 20px;
    font-size:18px;
    border-radius: 15px 15px 15px 0px;
    background-color: red;
    color: white;
`;
export const TextInfo = styled.span`
    font-size: 32px;
    ${props => (props.decoration === true ? "text-decoration: line-through;" : "")};
    overflow-wrap: break-word;
    user-select:none;
    text-decoration: undescore;
`;
export const TextTitle = styled.a`
    font-size: 40px;
    user-select:none;
    text-decoration: none;
    font-style: oblique;
    font-weight: bold;
    text-shadow: 2px 2px 3px navy;
    font-family:fantasy;
    // text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
    &:active, &:visited{
        color:#6395F2;
    }
    &:hover{
        cursor: pointer;   

    };
`;