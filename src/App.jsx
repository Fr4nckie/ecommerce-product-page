import styled from 'styled-components'
import Navbar from './components/Navbar/index.jsx'

const StyledApp = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 10%;

    @media screen and (max-width: 640px) {
        padding: 0 5%;
    }
`

function App() {
    return (
        <StyledApp>
            <Navbar />
        </StyledApp>
    )
}

export default App
