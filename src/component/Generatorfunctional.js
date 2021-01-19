import React, { useEffect, useState } from 'react';

export default function Generator() {
    // States
    const [name, setName] = useState('keqing');
    const [templateData, setTemplateData] = useState([]);
    const [currentTemplate, setCurrentTemplate] = useState('wangy');
    const [rawCopypasta, setRawCopypasta] = useState('${nameCaps} ${nameCaps} ${nameCaps} ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut ${name} wangi aku mau nyiumin aroma wanginya ${name} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~ AAAAAH ${name} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${name} AAAAA LUCCUUUUUUUUUUUUUUU............${name} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${name} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${name} gw ...${name} di laptop ngeliatin gw, ${name} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${name} aku gak mau merelakan ${name} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${name} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH');
    const [copypasta, setCopypasta] = useState('');

    // Variables
    let nameCaps = name.toUpperCase();

    // Functions
    let changeCopyPasta = copyPastaContent => {
        setRawCopypasta(copyPastaContent);
        setCopypasta(eval('`' + copyPastaContent + '`'));
    }

    let handleNameChange = e => {
        setName(e.target.value.toLowerCase());
    }

    // changes copypasta if the name state changes
    useEffect(() => {
        changeCopyPasta(rawCopypasta);
    }, [name])

    // Fetch JSON data
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/SheezChill/stress/master/src/Templates.json')
            .then(res => res.json())
            .then(data => setTemplateData(data))
    }, [])

    return (
        <div className="main-container">
            <div className="container">
                <span className="title">Name</span>
                <input type="text" value={name} onChange={handleNameChange}></input>
            </div>
            <div className="container">
                <span className="title">Templates</span>
                <div className="button-container">
                    {templateData.map((templates, index) => { return <button key={index} className={currentTemplate === templates.templateName ? "current-active" : ''} onClick={() => {setCurrentTemplate(templates.templateName); changeCopyPasta(templates.copypasta)}}>{templates.templateName}</button> })}
                </div>
            </div>
            <div className="output">{name === '' ? 'input name' : copypasta}</div>
        </div>
    )
}