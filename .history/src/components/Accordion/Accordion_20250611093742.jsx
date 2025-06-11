import './accordion.css';
import { data } from '../../DB';
import AccordionItem from '../AccordionItem/AccordionItem';
import { useState } from 'react';

const Accordion = () => {
    const [accordionData, setAccordionData] = useState(data);
    console.log(accordionData);
    
    const showItem = (index) => {
        const update = accordionData.map((elm, idx) => {
            return {...elm, isComplited: idx === index};
        })

        setAccordionData(update);
    }

    return (
        <div className="accordion">
            {
                accordionData.map((el, index) => {
                    return (
                        <AccordionItem 
                            key={el.id}
                            question={el.question}
                            el={el}
                            showItem={() => showItem(index)}
                        />
                    )
                })
            }
        </div>
    )
}

export default Accordion;