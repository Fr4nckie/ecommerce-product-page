import styled from 'styled-components'
import Navbar from './components/Navbar/index.jsx'
import Product from './components/Product/index.jsx'

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    height: 100vh;
    overflow: hidden;
    margin: 0 auto;

    @media screen and (max-height: 800px) and (max-width: 768px) {
        overflow-y: scroll;
    }
`

function App() {
    return (
        <StyledApp>
            <Navbar />
            <Product />
        </StyledApp>
    )
}

export default App
