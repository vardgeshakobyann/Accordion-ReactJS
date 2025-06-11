import './accordion.css';
import { data } from '../../DB';
import AccordionItem from '../AccordionItem/AccordionItem';
import { useState } from 'react';

const Accordion = () => {
    const [accordionData, setAccordionData] = useState(data);
    
    return (
        <div className="accordion">
            {
                accordionData.map((el) => {
                    return (
                        <AccordionItem 
                            key={el.id}
                            question={el.question}
                        />
                    )
                })
            }
        </div>
    )
}

export default Accordion;