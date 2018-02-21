import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';

class FcmNavigation extends Component{
    render(){
        return(
            <div style={{position: 'absolut'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}></span><strong>FCM Indicators</strong></span>}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Sign Out</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            {this.props.children}
        </Content>
    </Layout>
</div>
            )
    }
}


export default FcmNavigation;