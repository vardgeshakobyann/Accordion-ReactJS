import './accordionItem.css';

const AccordionItem = ({question}) => {
    return (
        <div className="accordionItem">
            <div className="header">
                <div className="leftBlock">
                    <i className="fa-solid fa-plus"></i>
                    <p></p>
                </div>
                <div className="rightBlock"></div>
            </div>
        </div>
    )
}

export default AccordionItem;