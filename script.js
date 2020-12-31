// autor Remigiusz Drobinski

let xmlContent = '';
let labsTable = document.getElementById('labs');

fetch('plik.xml').then((response)=>{
    response.text().then((xml)=>{
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml')
        let labs = xmlDOM.querySelectorAll('lab');
        
        labs.forEach(labXmlNode => {
            let row = document.createElement('tr');
            
            //name
            let td = document.createElement('td');
            td.innerText = labXmlNode.children[0].innerHTML;
        });
    })
})