import React, { Component } from 'react'

export default class Celeb extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td><img src = {this.props.pictureUrl} alt=" "/></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.popularity}</td>
                    <td><button className='delete-btn' onClick={this.props.clickToDelete}>Delete</button></td>
                </tr>
            </tbody>
        )
    }
}