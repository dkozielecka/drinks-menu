import * as React from 'react';

import styled from 'styled-components';

import DrinkCards from 'components/DrinkCards/DrinkCards';

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    aligni-tems: center;

    background-color: rgb(32, 38, 45);
`;

const App = () => (
    <Wrapper>
        <DrinkCards />
    </Wrapper>
);

export default App;
