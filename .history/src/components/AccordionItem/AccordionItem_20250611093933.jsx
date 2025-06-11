import './accordionItem.css';

const AccordionItem = ({question, el, showItem}) => {
    return (
        <div className="accordionItem">
            <div className="header" onClick={showItem}>
                <div className="block">
                    {
                        el.isComplited 
                        ?
                        <i className="fa-solid fa-minus"></i>
                        :
                        <i className="fa-solid fa-plus"></i>
                    }
                    <p>{question}</p>
                </div>
            </div>
            <div className="bottom">
                
            </div>
        </div>
    )
}

export default AccordionItem;