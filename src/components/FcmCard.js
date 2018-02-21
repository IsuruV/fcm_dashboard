import React, { Component } from 'react';
import { Button, Card, CardTitle, CardActions, Icon } from 'react-mdl';

class FcmCard extends Component{
    render(){
        return(
            <Card shadow={0} style={{width: '256px', height: '256px', background: '#3E4EB8', paddingTop:'10'}}>
                 <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
                     <h4 style={{marginTop: '0'}}>
                             MTA Delays:<br />
                             +9,000<br />
                             
                    </h4>
                </CardTitle>
                <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                    <Button colored style={{color: '#fff'}}>Last Year</Button>
                    <div className="mdl-layout-spacer"></div>
                    <Icon name="" />
                </CardActions>
            </Card>
            )
    }
}

export default FcmCard;