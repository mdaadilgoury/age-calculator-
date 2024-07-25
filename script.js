document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateAge();
});

function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = `You are ${age} years old.`;
    resultDiv.classList.remove('hidden');
    resultDiv.classList.add('visible');
}