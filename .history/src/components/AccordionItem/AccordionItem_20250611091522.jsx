import './accordionItem.css';

const AccordionItem = () => {
    return (
        <div className="accordionItem">
            <div className="header">
                <div className="leftBlock">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="rightBlock"></div>
            </div>
        </div>
    )
}

export default AccordionItem;