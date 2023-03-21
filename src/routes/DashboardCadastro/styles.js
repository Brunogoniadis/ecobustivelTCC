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

    .stationName{
            height: 65%;
            width: 90%;
            border-radius: 5px;
            border: 1px solid;
            padding: 15px;
    }
    .saveStation{
        width: 50%;
        height: 100%;
    }
    .price{
            height: 65%;
            width: 30%;
            border-radius: 5px;
            border: 1px solid;
            padding: 15px;
    }
    


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

    .InputContainer{
        height: 50%;
        width: 100%;
        padding: 2%;

        display: flex;

        flex-direction: row;
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
        height: 5vh;

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
`
