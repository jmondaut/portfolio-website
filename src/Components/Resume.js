import React from 'react'
import { Timeline, Divider } from 'antd'

function Resume(){
    const experiences = [
        {place:"CNRS", job:"Assistant de Recherche", year:2020, color:"green"},
        {place:"Université Bordeaux Montaigne", job:"Enseignant Tuteur Python", year:2015, color:"red"},
        {place:"Marlogic Villenave d'Ornon", job:"Développeur VBA", year:2013, color:"red"},
    ]

    const timelineItems = experiences.map((item) => 
        <Timeline.Item color={item.color}>{item.place} - {item.job} {item.year}</Timeline.Item>
    );
    return(
        <div>
            <Divider>Resume</Divider>
            <Timeline>
                {timelineItems}
            </Timeline>
        </div>
    );
}

export default Resume