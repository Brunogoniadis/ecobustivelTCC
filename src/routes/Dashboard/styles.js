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
        height: 260px;
        width: 100%;
    }
    .TableInfo{
        padding: 4%;
        height: 15vh;
        width: 100%;
        display: grid;
        grid-template-columns: 40% 20% 20% 20%;
        grid-template-rows: 33% 33% 33% ;
        row-gap:1px;
        vertical-align: middle;
        p{
            color: #fff;
            font-weight: normal;
            border: 1px solid black;
            font-size: 12px;
        }
    }
`
