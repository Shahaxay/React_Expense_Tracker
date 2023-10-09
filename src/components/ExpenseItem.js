import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate=new Date(2022,9,18);
    const expenseTitle='Car Insurance';
    const expenseAmount='Rs.10000';
    const locationOfExpenditure='Banglore'
    return (
        <div className="expense-item">
            <div>{expenseDate.toDateString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <h2>{locationOfExpenditure}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;