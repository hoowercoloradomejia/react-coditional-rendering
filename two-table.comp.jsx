import React from 'react';

import './two-table.style.css';
import TableCourse from '../table-course/table-course.comp';
import TableStudent from '../table-students/table-students.comp';

const TwoTable = () => {
    return (
        <div className="two-table-container">
            <div>
             <TableCourse categoryName="Programacion1"/>
             <TableStudent student={{
                 name:"hoower",
                 grade:5,
                 gerder:"Man",
             }}/>
             <TableStudent student={{
                 name:"Luisa",
                 grade:5,
                 gerder:"Female",
             }}/>
             <TableStudent student={{
                 name:"Claudia",
                 grade:5,
                 gerder:"Female",
             }}/>
             <TableStudent student={{
                 name:"Luis",
                 grade:5,
                 gerder:"Man",
             }}/>
             <h><TableStudent student={{
                 name:"Julia",
                 grade:2,
                 gerder:"Female",
             }}/></h>
             <TableStudent student={{
                 name:"Andrea",
                 grade:5,
                 gerder:"Female",
             }}/>
             
             <TableCourse categoryName="Programacion2"/>
             <TableStudent students={{
                 name:"Lana",
                 grade:5,
                 gerder:"Female",
             }}/>
             <TableStudent students={{
                 name:"Jorge",
                 grade:4,
                 gerder:"Man",
             }}/>
             <TableStudent students={{
                 name:"Lorena",
                 grade:5,
                 gerder:"Female",
             }}/>
             <TableStudent students={{
                 name:"Fernando",
                 grade:3,
                 gerder:"Man",
             }}/>
             <h><TableStudent students={{
                 name:"Leyder",
                 grade:2,
                 gerder:"Man",
             }}/></h>
             <TableCourse categoryName="Programacion3"/>
             <TableStudent studen={{
                 name:"Alvaro",
                 grade:3,
                 gerder:"Man",
             }}/>
             <TableStudent studen={{
                 name:"Andres",
                 grade:5,
                 gerder:"Man",
             }}/>
             <TableStudent studen={{
                 name:"Karen",
                 grade:5,
                 gerder:"Female",
             }}/>
             <TableStudent studen={{
                 name:"Dilan",
                 grade:3,
                 gerder:"Man",
             }}/>
             <h><TableStudent studen={{
                 name:"Diana",
                 grade:2,
                 gerder:"Female",
             }}/></h>
             <TableStudent studen={{
                 name:"Jhoseft",
                 grade:5,
                 gerder:"Man",
             }}/>
                       
                       
        </div>
        </div>
    );
    
}

export default TwoTable;