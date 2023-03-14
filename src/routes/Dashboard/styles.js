import styled from "styled-components";

export const MainWindow = styled.main`
    height: 667px;
    width: 375px;
    background-color: var(--color-backgroundWindow);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    gap: 35px;

    color: black;

    .Topbar{
        color: white;
        text-align: center;
    
    }

    .TitleText{
        text-align: center;
        background-color: #fff;
        width: 100%;
        height: 20%;

        padding: 5%;
    }
    .MapDiv{
        height: 250px;
        width: 100%;

        background-color: red;
    }
`
