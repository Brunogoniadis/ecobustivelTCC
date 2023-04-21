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
        display: flex;
        width: 100%;

        flex-direction: row;


        justify-content: space-between;

        padding: 10px;

        .cadastro{
            width: 80px;
            height: 30px;
            background-color: #C8C8C8;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;

            text-decoration: none;
            border-radius: 4px;
            color: black;
        }
    }

    .TitleText{
        text-align: center;
        background-color: #fff;
        width: 100%;
        height: 20%;

        padding: 5%;
    }
    .SliderBackground{
        color: white;
        height: 60px;
        width: 100%;
    }
    .MapDiv{
        height: 260px;
        width: 100%;
    }
    .marker-label {
        background-color: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
        font-weight: bold;
    }
    .TableInfo{
        padding: 4%;
        height: 4vh;

        width: 100%;
        display: grid;
        grid-template-columns: 40% 20% 20% 20%;
        vertical-align: middle;
        p{
            color: #fff;
            font-weight: normal;
            border: 1px solid white;
            font-size: 12px;
        }
    }
    .TableContainer{

        margin: -0.6vw;
    }
    .TableInfoName{
        padding: 4%;
        height: 4vh;

        width: 100%;
        display: grid;
        grid-template-columns: 40% 20% 20% 20%;
        
        vertical-align: middle;
        margin-bottom: -1vw;
        p{
            color: #fff;
            font-weight: normal;
            
        border-color: transparent;
            font-size: 12px;
        }
    }
`
