document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('calculator-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Получаем данные из формы
    var quantity = document.getElementById('quantity').value;
    var distance = document.getElementById('distance').value;

    // Базовая стоимость за единицу и стоимость доставки за км
    var costPerUnit = 100; // Стоимость за единицу, например, 100 рублей за штуку
    var deliveryCostPerKm = 5; // Стоимость доставки за км, например, 5 рублей за км

    // Рассчитываем общую стоимость
    var totalCost = (quantity * costPerUnit) + (distance * deliveryCostPerKm);

    // Отображаем результат
    document.getElementById('total-cost').textContent = totalCost;
});
