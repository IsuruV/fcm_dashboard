import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'; 
 
 class FcmGrid extends Component{
     render(){
         return(
                
                 <Grid className="demo-grid-1">
                    {this.props.children.map((item) => <Cell col={4}>{item}</Cell>)}
                 </Grid>
             )
     }
 }

export default FcmGrid;