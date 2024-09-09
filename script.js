const expenseForm = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');
const clearExpenses = document.getElementById('clearExpenses');

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if (description && category && !isNaN(amount) && amount.trim() !== '') {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td>
                            <td>${category}</td>
                            <td>${amount}</td>`;
        expenseList.appendChild(newRow);

       
        document.getElementById('description').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter valid data');
    }
});


clearExpenses.addEventListener('click', function() {
    expenseList.innerHTML = '';  
});
