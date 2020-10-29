import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Project from '../Project'
import { Hashlink } from 'react-router-hash-link';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

const HomepageHeading = ({ mobile }) => (
    <Container>
        {
            <Header as='h2'>
                <p style={{ marginTop: '1.5em', marginBottom: '1em' }}><Image size='mediumlarge' src='./home.png' centered /></p>
            </Header>
        }
        <Header
            as='h2'
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '2em',
            }}
        >
        </Header>
    </Container>
)
HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
    state = {}
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
    render() {
        const { children } = this.props
        const { fixed } = this.state
        return (
            <Media greaterThan='mobile'>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        textAlign='center'
                        style={{ minHeight: 700, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item text='teal' as='a' active>
                                    Catalina Patel
                </Menu.Item>
                                <Menu.Item as={Hashlink} to="aboutMe" >About Me</Menu.Item>
                                <Menu.Item as={Hashlink} to="#portfolio" >Portfolio</Menu.Item>
                                <Menu.Item as={Hashlink} to="#contact" >Contact</Menu.Item>

                                <Menu.Item position='right'>
                                    <Icon link name='linkedin' />
                                    <Icon link style={{ marginLeft: '0.5em' }} name='github' />
                                    <Icon link style={{ marginLeft: '0.5em' }} name='instagram' />
                                </Menu.Item>
                            </Container>
                        </Menu>
                        <HomepageHeading />
                    </Segment>
                </Visibility>
                {children}
            </Media>
        )
    }
}
DesktopContainer.propTypes = {
    children: PropTypes.node,
}
class MobileContainer extends Component {
    state = {}
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
    handleToggle = () => this.setState({ sidebarOpened: true })
    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state
        return (
            <Media as={Sidebar.Pushable} at='mobile'>
                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        inverted
                        onHide={this.handleSidebarHide}
                        vertical
                        visible={sidebarOpened}
                    >
                        <Menu.Item color='teal' as='a' active>
                            Catalina Patel
            </Menu.Item>
                        <Menu.Item color='teal' as='a'>About Me</Menu.Item>
                        <Menu.Item color='teal' as='a'>Portfolio</Menu.Item>
                        <Menu.Item color='teal' as='a'>Contact</Menu.Item>

                    </Sidebar>
                    <Sidebar.Pusher dimmed={sidebarOpened}>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 350, padding: '1em 0em' }}
                            vertical
                        >
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>
                                            Log in
                    </Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                    </Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>
                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Media>
        )
    }
}
MobileContainer.propTypes = {
    children: PropTypes.node,
}
const ResponsiveContainer = ({ children }) => (

    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)
ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}
const Homepage = () => (
    <ResponsiveContainer>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header href="Aboutme" as='h3' style={{ fontSize: '2em', color: 'purple' }}>
                            #aboutMe
            </Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Passionate, driven, and diversity and inclusion advocate. I am applying my Bachelor's degree in Industrial Design, a Lean Six Sigma Yellow Belt, and experience over the last 7 years in the everchanging Healthcare Industry, I enjoy developing simple, yet practical applications. I hope to continue to use my experience to create accesible (I am fluent in English and Spanish) and innovative applications to continue my legacy as an entrepreneur in a new industry.
            </p>
                        <Grid.Row >
                            <Grid.Column textAlign='center'>
                                <Icon link size='large' color='grey' name='file alternate outline' style={{ marginTop: '1em' }} />
                                <p style={{ marginTop: '.5em' }}><i>Resume</i></p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image size='medium' important src='./me.jpeg' bordered />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment style={{ padding: '2em 0em' }} vertical>
            <Container>
                <Divider className='header' horizontal style={{ margin: '3em 0em', color: 'limegreen', fontSize: '2em' }}>
                    <h2>#portfolio</h2>
                </Divider>
                <Grid.Row verticalAlign='middle' columns={4} centered>
                    <Grid.Column>
                        <Project />
                    </Grid.Column>
                </Grid.Row>
            </Container>
        </Segment>
        <Segment style={{ padding: '2em 0em' }} vertical>
            <Container>
                <Divider className='header' horizontal style={{ margin: '1em 0em', color: 'pink', fontSize: '2em' }}>
                    <h2>#contactMe</h2>
                </Divider>
                <Grid.Row centered>
                    <Grid.Column>
                        <p style={{ margin: '2em 0em' }}><i>Interested in learning more?</i></p>
                    </Grid.Column>
                </Grid.Row>
            </Container>
            <Container>
                <Grid.Row columns={4}>
                    <Icon link color='teal' size='massive' name='mail' />
                    <Icon link color='orange' size='massive' name='linkedin' to='www.linkedin.com/in/catalina-patel' />
                    <Icon link color='purple' size='massive' name='github' to='https://github.com/CatalinaPatel' />
                    <Icon link color='pink' size='massive' name='instagram' />
                </Grid.Row>
            </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '1em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Header inverted as='h4' content='Catalina Patel ' />
                            <List link inverted>
                                <List.Item as='a'>#Visionary</List.Item>
                                <List.Item as='a'>#Balanced</List.Item>
                                <List.Item as='a'>#Consious</List.Item>
                                <List.Item as='a'>#Determined</List.Item>
                                <List.Item as='a'>#Change Leader</List.Item>
                                <List.Item as='a'>#Innovative</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer >
)
export default Homepage