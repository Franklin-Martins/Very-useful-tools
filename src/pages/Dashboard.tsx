import React from 'react'

import {
    Container,
    Content,
    Header,
    Navigation,
    Card,
} from './styles'

const Dashboard:React.FC = () => {
    return(
        <Container>
            <Content>
            <Header>
                <h1>VUTTR</h1>
                <h3>Very useful tools to remenber</h3>
            </Header>
            <Navigation>
                <div>
                    <input placeholder="search" type="text"/>
                    <input type="checkbox" name="check" id="check"/>
                    <label htmlFor="">search in tags only</label>
                </div>
                <button> + add</button>
            </Navigation>
            <Card>
                <header>
                    <a href=""><h1>Notion</h1></a>
                    <button>x remove</button>
                </header>
                <div>
                    <p>
                    All in one project to organizes teams and ideas. Write plan
                    and get organizated.
                    </p>
                </div>
                <footer>
                    <strong>#organization</strong>
                    <strong>#planing</strong>
                    <strong>#collaboration</strong>
                    <strong>#calendar</strong>
                    <strong>#writing</strong>
                </footer>
            </Card>

            <Card>
                <header>
                    <a href=""><h1>Notion</h1></a>
                    <button>x remove</button>
                </header>
                <div>
                    <p>
                    All in one project to organizes teams and ideas. Write plan
                    and get organizated.
                    </p>
                </div>
                <footer>
                    <strong>#organization</strong>
                    <strong>#planing</strong>
                    <strong>#collaboration</strong>
                    <strong>#calendar</strong>
                    <strong>#writing</strong>
                </footer>
            </Card>
            
            </Content>
        </Container>
    )
}

export default Dashboard