import React, { useEffect, useState } from 'react'
import api from '../services/api'

import {
    Container,
    Content,
    Header,
    Navigation,
    Card,
} from './styles'

interface Tool{
    id: number;
    title: string;
    description: string;
    link: string;
    tags: string[];
}

const Dashboard:React.FC = () => {
    const [tools, setTools] = useState<Tool[]>([])
    const [filterSearch, setFilterSearch] = useState(false)
    useEffect(()=> {
        async function loadTools() {
             const response = await api.get('/tools')

             setTools(response.data)
        }

        loadTools()
    }, [])
    return(
        <Container>
            <Content>
            <Header>
                <h1>VUTTR</h1>
                <h3>Very useful tools to remember</h3>
            </Header>
            <Navigation>
                <div>
                    <input placeholder="search" type="text"/>
                    <label className="switch" htmlFor="filterByTag">
                        <input 
                            type="checkbox" 
                            id="filterByTag"
                            checked={filterSearch}
                            onChange={()=>{setFilterSearch(!filterSearch)}}
                        />
                        <span className="slider" />
                    </label>
                    <span >search in tags only</span>
                </div>
                <button> + add</button>
            </Navigation>
            
            {tools && tools.map((tool)=>{
                return(
                    <Card key={tool.id}>
                    <header>
                        <a href={tool.link}><h1> {tool.title} </h1></a>
                        <button>remove</button>
                    </header>
                    <div>
                        <p>
                            {tool.description}
                        </p>
                    </div>
                    <footer>
                        {tool.tags.map((tag)=>{
                            return(
                                <strong key={tag}> #{tag} </strong>
                            )
                        })}
                    </footer>
                </Card>)
            })}

            </Content>
        </Container>
    )
}

export default Dashboard