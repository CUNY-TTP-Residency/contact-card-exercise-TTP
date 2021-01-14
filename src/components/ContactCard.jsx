import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../App.css';

export default class ContactCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            name: props.name,
            email: props.email,
            phone_num: props.phone_num,
            work_num: props.work_num === undefined ? "000-000-0000" : props.work_num
        };
    }

    render(){
        return(
            <div className="card">
                <section>
                    <img alt="photo" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/>
                    <h4> {this.state.name} </h4>
                </section>
                <section>
                    <h4> <span>Email: </span> {this.state.email} </h4>
                    <h4> <span>Phone Number: </span> {this.state.phone_num} </h4>
                    <h4> <span>Work Phone Number: </span> {this.state.work_num} </h4>
                </section>
            </div>
        )
    }
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_num: PropTypes.string.isRequired,
    work_num: PropTypes.string
}