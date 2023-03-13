import styled from "styled-components";

export const MainWindow = styled.main`
    height: 667px;
    width: 375px;
    background-color: var(--color-backgroundWindow);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 35px;

    .inputContainer{
        text-align: center;

        height: 50%;
        width: 75%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 25px;

        border-radius: 10px;
        border: 1px solid rgba(0, 128, 6, 0.4);

        input{
            height: 12%;
            width: 90%;

            border-radius: 5px;
            border: none;

            padding: 15px;
        }
        button{
            height: 15%;
            width: 90%;
            border-radius: 5px;
            border: none;
        }
    }

    img{
        width: 100px;
        filter: invert(96%) sepia(100%) saturate(0%) hue-rotate(37deg) brightness(104%) contrast(104%);
    }
`
