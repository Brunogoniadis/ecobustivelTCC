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

    .textContainer{
        text-align: center;
    }

    img{
        width: 200px;
        filter: invert(96%) sepia(100%) saturate(0%) hue-rotate(37deg) brightness(104%) contrast(104%);
    }
`
