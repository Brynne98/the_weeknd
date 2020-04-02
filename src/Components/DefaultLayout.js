import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";
import RoutingComponent from "./RoutingComponent";
import defaultLayout from './DefaultLayout.css';

class DefaultLayout extends React.Component {

    render() {

        return <Fragment>
            {this.renderHeader()}
            {this.renderSideBar()}
            {this.renderBody()}
        </Fragment>
    }

    renderHeader() {

        return <Fragment>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 0,
                    width: "100%",
                    height: "10%",
                    backgroundColor: "black",
                    position: "fixed",
                    float: "top",
                    overflow: "hidden"
                }}
            >
                <Link to={"/home"}>
                    <img style={{height: "90%"}} src={'/theweeknd.gif'}/>
                </Link>
                {/*<div style={{fontSize: "20px", marginRight: "15px"}}>*/}
                {/*    Hi, Brynne Prince*/}
                {/*</div>*/}
            </div>
        </Fragment>
    }

    renderSideBar() {

        return <Fragment>
            <div
                style={{
                    height: "90%",
                    width: "15%",
                    bottom: "0",
                    position: "fixed",
                    backgroundColor: "black"
                }}
            >
                {this.renderSideBarItem("Trilogy", '/trilogy.jpg', "/trilogy")}
                {this.renderSideBarItem("Kissland", '/kissland.png', "/kissland")}
                {this.renderSideBarItem("Beauty behind the madness", '/BBTM.jpg', "/bbtm")}
                {this.renderSideBarItem("Starboy", '/starboy.png', "/starboy")}
                {this.renderSideBarItem("My dear melancholy", '/MDM.png', "/mdm")}
                {this.renderSideBarItem("After hours", '/afterhours.jpg', "/afterhours")}
                {this.renderSideBarItem("After hours (Deluxe)", '/afterhoursdeluxe.jpg', "/afterhours")}

                {/*<div style={{height: "110px", width: "15%", bottom: "-5px", position: "fixed", overflow: "hidden"}}>*/}
                {/*    <img src={'/xo.png'} style={{height: "auto", width: "100%", overflow: "hidden"}}/>*/}
                {/*</div>*/}
            </div>
        </Fragment>

    }

    renderSideBarItem(name, file, link) {

        return <Link to={link}>
            <div className={defaultLayout.sideBarImageDiv}>
                <img src={file} className={defaultLayout.sideBarImage}/>
                {/*<p style={{position: "fixed", color: "purple", fontSize: "28px"}}>{name}</p>*/}
            </div>
        </Link>
    }

    renderBody() {

        return <Fragment>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", position: "fixed", bottom: "0", right: "0", height: "90%", width: "85%"}}>
                <div style={{margin: "25px", padding: "25px", height: "88%", width: "95%", backgroundColor: "white", border: "5px solid black", overflowY: "scroll"}}>
                    <RoutingComponent/>
                </div>
            </div>
        </Fragment>
    }

}

export default withRouter(DefaultLayout);