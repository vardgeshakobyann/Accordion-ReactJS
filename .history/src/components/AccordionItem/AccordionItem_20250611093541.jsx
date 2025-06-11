import './accordionItem.css';

const AccordionItem = ({question, showItem}) => {
    return (
        <div className="accordionItem">
            <div className="header">
                <div className="block">
                    <i className="fa-solid fa-plus" onClick={showItem}></i>
                    <p>{question}</p>
                </div>
            </div>
            <div className="bottom">
                
            </div>
        </div>
    )
}

export default AccordionItem;