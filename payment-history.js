function filterPayments() {
    let input = document.getElementById("search").value.toLowerCase();
    let tableRows = document.querySelectorAll("#payment-history tr");

    tableRows.forEach(row => {
        let carName = row.cells[1].textContent.toLowerCase();
        let status = row.cells[3].textContent.toLowerCase();

        if (carName.includes(input) || status.includes(input)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}
