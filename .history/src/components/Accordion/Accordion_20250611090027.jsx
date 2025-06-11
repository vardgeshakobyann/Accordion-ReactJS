import './accordion.css';
import { data } from '../../DB';

const Accordion = () => {
    return (
        <div className="accordion">
            {
                data.map((el) => {
                    return (
                        <div className="item">
                            <h1>{el.answer}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordion;