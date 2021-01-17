import React, { Component } from 'react';
import templateData from '../Templates.json';

export default class Templates extends Component {
    constructor() {
        super()

        this.state = {
            name: "keqing",
            nameCaps: "KEQING",
            rawCopypasta: '',
            currentTemplate: '',
            copypasta: `Pilih template [Choose a template]`
        }
    }
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value,
            nameCaps: e.target.value.toUpperCase()
        }, () => {
            this.changeCopypasta(this.state.rawCopypasta);})
    }

    forceUpdateHandler() {
        this.forceUpdate();
    }

    changeCopypasta(copypastaContent) {
        this.setState({
            rawCopypasta: copypastaContent,
            copypasta: eval('`' + copypastaContent + '`')
        })
    }

    changeCurrentTemplate(name) {
        this.setState({
            currentTemplate: name
        })
    }

    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <span className="title">Name</span>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                </div>
                <div className="container">
                    <span className="title">Template</span>
                    <div className="button-container">
                        {templateData.map((templates) => {
                            return <button className={this.state.currentTemplate === templates.templateName ? "current-active" : ''} onClick={() => {this.changeCopypasta(templates.copypasta); this.changeCurrentTemplate(templates.templateName)}}>{templates.templateName}</button>
                        })}
                    </div>
                </div>
                <p className="output">{this.state.name === '' ? "input name" : this.state.copypasta}</p>
            </div>
        )
    }
}