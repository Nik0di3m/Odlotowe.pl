import styled from "styled-components";


export const WorkCardContainer = styled.div`
    height: 200%;
    min-width: 100%;
    padding: 25px;
    display: flex;
    overflow-x: scroll;
    justify-content: space-between;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    transition: all 0.3s ease-in-out;


    &::-webkit-scrollbar{
        height: 10px;
    }
    &::-webkit-scrollbar-track{
        box-shadow: inset 0 0 5px grey; 
        border-radius: 30px;
    }
    &::-webkit-scrollbar-thumb{
        background: white;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb:hover{
        background: #4db2ff;
        transition: all 0.3s ease-in-out;
    }
    

`

export const WorkCardInfoContainer = styled.div`
    width: 200%;
    min-height: 100%;
    display: flex;
`

export const WorkCardInfo = styled.div`
    width: 300px;
    margin-left: 50px;
    margin-right: 20px;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    box-shadow: 12px 12px 10px 0px rgba(50, 50, 50, 0.75);
    padding: 10px;
    display: flex;
    color: white;
    flex-direction: column;
    word-wrap: break-word;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 2.5vw;
    }
`

export const WorkCardImg = styled.div`

    width: auto;

`

export const WorkCardDescription = styled.div`
    height: 55%;
    width: 100%;
`

