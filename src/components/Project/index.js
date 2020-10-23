import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'
const Project = () => (
    <Card.Group itemsPerRow={3}>
        <Card color='orange'>
            <Image link src='./covid.png' wrapped ui={false} />
            <b style={{ marginBottom: '1em' }}>#covidTracker</b>
            <Card.Content extra>
                <Icon link name='github' />
                <Icon link name='external alternate' />
            </Card.Content>
        </Card>
        <Card color='teal'>
            <Image link src='./pet.png' wrapped ui={false} />
            <b style={{ marginBottom: '1em' }}>#petFinder</b>
            <Card.Content extra>
                <Icon link name='github' />
                <Icon link name='external alternate' />
            </Card.Content>
        </Card>
        <Card color='pink'>
            <Image link src='./password.png' wrapped ui={false} />
            <b style={{ marginBottom: '1em' }}>#santaRegistry</b>
            <Card.Content extra>
                <Icon link name='github' />
                <Icon link name='external alternate' />
            </Card.Content>
        </Card>
        <Card color='purple'>
            <Image link src='./quiz.png' wrapped ui={false} />
            <b style={{ marginBottom: '1em' }}>#codeQuiz</b>
            <Card.Content extra>
                <Icon link name='github' />
                <Icon link name='external alternate' />
            </Card.Content>
        </Card>
        <Card color='yellow'>
            <Image link src='./scheduler.png' wrapped ui={false} />
            <b style={{ marginBottom: '1em' }}>#dayPlanner</b>
            <Card.Content extra>
                <Icon link name='github' />
                <Icon link name='external alternate' />
            </Card.Content>
        </Card>
        <Card color='green'>
            <Image link src='./weather.png' wrapped ui={false} />
            <b style={{ marginBottom: '1em' }}>#weatherDashboard</b>
            <Card.Content extra>
                <Icon link name='github' />
                <Icon link name='external alternate' />
            </Card.Content>
        </Card>
    </Card.Group>
)
export default Project