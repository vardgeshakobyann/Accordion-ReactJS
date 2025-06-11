import './accordion.css';
import { data } from '../../DB';
import AccordionItem from '../AccordionItem/AccordionItem';

const Accordion = () => {
    return (
        <div className="accordion">
            {
                data.map((el) => {
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