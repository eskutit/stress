import React, { Component } from 'react';
let templateData = [];

export default class Templates extends Component {
    constructor() {
        super()

        this.state = {
            isLoaded: false,
            name: "keqing",
            nameCaps: "KEQING",
            rawCopypasta: '',
            currentTemplate: '',
            copypasta: `Pilih template [Choose a template]`
        }
    }
    handleNameChange = (e) => {
        this.setState({
            name: e.target.value.toLowerCase(),
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

    componentWillMount() {
        fetch('https://raw.githubusercontent.com/SheezChill/stress/master/src/Templates.json')
            .then(resp => resp.json())
            .then(data => templateData = data)
            .then(() => {
                this.setState({
                    isLoaded: true
                })
            })
    }

    componentDidMount() {
        this.setState({
            rawCopypasta: "${this.state.nameCaps} ${this.state.nameCaps} ${this.state.nameCaps} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${this.state.name} wangi aku mau nyiumin aroma wanginya ${this.state.name} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~ AAAAAH ${name} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${this.state.name} AAAAA LUCCUUUUUUUUUUUUUUU............${this.state.name} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${this.state.name} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${this.state.name} gw ...${this.state.name} di laptop ngeliatin gw, ${this.state.name} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${this.state.name} aku gak mau merelakan ${this.state.name} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${this.state.name} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH",
            copypasta: eval('`' + "${this.state.nameCaps} ${this.state.nameCaps} ${this.state.nameCaps} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${this.state.name} wangi aku mau nyiumin aroma wanginya ${this.state.name} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~ AAAAAH ${name} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${this.state.name} AAAAA LUCCUUUUUUUUUUUUUUU............${this.state.name} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${this.state.name} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${this.state.name} gw ...${this.state.name} di laptop ngeliatin gw, ${this.state.name} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${this.state.name} aku gak mau merelakan ${this.state.name} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${this.state.name} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH" + '`'),
            currentTemplate: 'wangy'
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