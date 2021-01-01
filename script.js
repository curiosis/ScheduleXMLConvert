// autor Remigiusz Drobinski

var tableHeaderRowCount = 0;

let day = document.getElementById('day');
let xmlContent = '';
let labsTable = document.getElementById('labs');
let instrukcja = document.getElementById('instr');
let labsCount = 0;
let consultationsCount = 0;

let latinDayVer = 'piatek';
let plDayVer = 'piątek';

let lecturesCount = 0;

function fet(){
    labsCount = 0;
    lecturesCount = 0;
    consultationsCount = 0;
    fetch('plik.xml').then((response)=>{
    response.text().then((xml)=>{
        xmlContent = xml;
        let parser = new DOMParser();
        let xmlDOM = parser.parseFromString(xmlContent, 'application/xml')
        
        let labs = xmlDOM.querySelectorAll('lab');
        let lectures = xmlDOM.querySelectorAll('lecture');
        let consultations = xmlDOM.querySelectorAll('consultation');
        
        var table = document.getElementById('labs');
        var rowCount = table.rows.length;
        for (var i = tableHeaderRowCount; i < rowCount; i++) {
            table.deleteRow(tableHeaderRowCount);
        }
        
        lectures.forEach(lecturesXmlNode => {
            if(lecturesXmlNode.children[4].innerHTML == latinDayVer || lecturesXmlNode.children[4].innerHTML == plDayVer){
                lecturesCount += 1;
                
                let row = document.createElement('tr');
                row.setAttribute('class','line');
                labsTable.children[0].appendChild(row);
                let td = document.createElement('td');
                td.innerText = '\n';
                row.appendChild(td);
                
                row = document.createElement('tr');
                row.setAttribute('class','lect');
                labsTable.children[0].appendChild(row);

                //Pełna nazwa
                td = document.createElement('td');
                td.innerText = lecturesXmlNode.children[0].innerHTML;
                row.appendChild(td);

                //Nazwa skrócona
                row = document.createElement('tr');
                row.setAttribute('class','lect');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = lecturesXmlNode.children[1].innerHTML;
                row.appendChild(td);

                //Room
                row = document.createElement('tr');
                row.setAttribute('class','lect');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = lecturesXmlNode.children[2].innerHTML;
                row.appendChild(td);

                //Group
                row = document.createElement('tr');
                row.setAttribute('class','lect');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = lecturesXmlNode.children[3].innerHTML;
                row.appendChild(td);

                //Time
                row = document.createElement('tr');
                row.setAttribute('class','lect');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = lecturesXmlNode.children[5].innerHTML + " - " + lecturesXmlNode.children[6].innerHTML;
                row.appendChild(td); 

                row = document.createElement('tr');
                row.setAttribute('class','line');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = '\n';
                row.appendChild(td);
            }
            
        });
        
        labs.forEach(labXmlNode => {
            if(labXmlNode.children[4].innerHTML == latinDayVer || labXmlNode.children[4].innerHTML == plDayVer){
                labsCount += 1;
                
                let row = document.createElement('tr');
                row.setAttribute('class','line');
                labsTable.children[0].appendChild(row);
                let td = document.createElement('td');
                td.innerText = '\n';
                row.appendChild(td);
                
                row = document.createElement('tr');
                row.setAttribute('class','lab');
                labsTable.children[0].appendChild(row);

                //Pełna nazwa
                td = document.createElement('td');
                td.innerText = labXmlNode.children[0].innerHTML;
                row.appendChild(td);

                //Nazwa skrócona
                row = document.createElement('tr');
                row.setAttribute('class','lab');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = labXmlNode.children[1].innerHTML;
                row.appendChild(td);

                //Room
                row = document.createElement('tr');
                row.setAttribute('class','lab');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = labXmlNode.children[2].innerHTML;
                row.appendChild(td);

                //Group
                row = document.createElement('tr');
                row.setAttribute('class','lab');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = labXmlNode.children[3].innerHTML;
                row.appendChild(td);

                //Time
                row = document.createElement('tr');
                row.setAttribute('class','lab');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = labXmlNode.children[5].innerHTML + " - " + labXmlNode.children[6].innerHTML;
                row.appendChild(td); 

                row = document.createElement('tr');
                row.setAttribute('class','line');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = '\n';
                row.appendChild(td);
            }
            
        });
        
        
        consultations.forEach(consultationXmlNode => {
            if(consultationXmlNode.children[1].innerHTML == latinDayVer || consultationXmlNode.children[1].innerHTML == plDayVer){
                
                consultationsCount += 1;
                
                let row = document.createElement('tr');
                row.setAttribute('class','line');
                labsTable.children[0].appendChild(row);
                let td = document.createElement('td');
                td.innerText = '\n';
                row.appendChild(td);
                
                row = document.createElement('tr');
                row.setAttribute('class','cons');
                labsTable.children[0].appendChild(row);

                //Room
                td = document.createElement('td');
                td.innerText = consultationXmlNode.children[0].innerHTML;
                row.appendChild(td);

                //Time
                row = document.createElement('tr');
                row.setAttribute('class','cons');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = consultationXmlNode.children[2].innerHTML + " - " + consultationXmlNode.children[3].innerHTML;
                row.appendChild(td); 


                row = document.createElement('tr');
                row.setAttribute('class','line');
                labsTable.children[0].appendChild(row);
                td = document.createElement('td');
                td.innerText = '\n';
                row.appendChild(td);
        };
        
    })
        if((labsCount+consultationsCount+lecturesCount) == 0){
            let row = document.createElement('tr');
            row.innerText = "Brak";
            labsTable.children[0].appendChild(row);
            
            row = document.createElement('tr');
            row.innerText = "Zajęć w tym dniu!";
            labsTable.children[0].appendChild(row);
            
            console.log("Brak!");
        }
    })
})}

function changeDay(latin, polish){
    instrukcja.style.display = 'none';
    day.innerText = polish;
    latinDayVer = latin;
    plDayVer = polish;
    fet();
}