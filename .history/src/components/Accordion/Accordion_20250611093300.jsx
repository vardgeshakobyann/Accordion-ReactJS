import './accordion.css';
import { data } from '../../DB';
import AccordionItem from '../AccordionItem/AccordionItem';
import { useState } from 'react';

const Accordion = () => {
    const [accordionData, setAccordionData] = useState(data);
    
    const showItem = (id) => {
        const update = accordionData.map(elm => {
            return {...elm, isComplited: elm.id === id};
        })

        setAccordionData(update);
    }

    return (
        <div className="accordion">
            {
                accordionData.map((el) => {
                    return (
                        <AccordionItem 
                            key={el.id}
                            question={el.question}
                            showItem={() => showItem(el.id)}
                        />
                    )
                })
            }
        </div>
    )
}

export default Accordion;