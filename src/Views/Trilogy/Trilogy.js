import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {Fragment} from "react";
import Card from "reactstrap/es/Card";

class Trilogy extends React.Component {

    render() {

        return <Fragment>
           <h3>Choose an album...</h3>
            <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "50px"}}>
                {this.renderTrilogyAlbum("House of balloons", '/hob.jpg', '/hob')}
                {this.renderTrilogyAlbum("Thursday", '/thursday.jpg', '/thursday')}
                {this.renderTrilogyAlbum("Echoes of silence",'/eos.jpg', '/eos')}
            </div>
        </Fragment>
    }

    renderTrilogyAlbum(name, file, link) {

        return <Fragment>
            <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
                <Link to={link}>
                    <Card style={{margin: "25px auto", border: "2px solid black", borderRadius: "15px", height: "250px", width: "250px", overflow: "hidden"}}>
                        <img src={file} style={{height: "auto", width: "250px", overflow: "hidden", position: "relative"}} />
                    </Card>
                </Link>
                <div>{name}</div>
            </div>
        </Fragment>
    }
}

export default withRouter(Trilogy);