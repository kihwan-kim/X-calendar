document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const yearElement = document.getElementById('year');
    const monthElement = document.getElementById('month');
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // 월은 0부터 시작하므로 +1

    yearElement.textContent = currentYear;
    monthElement.textContent = currentMonth;

    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate(); // 해당 월의 일 수 계산

    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;

        dayElement.addEventListener('click', function() {
            const existingXMark = dayElement.querySelector('.x-mark');
            if (existingXMark) {
                existingXMark.remove();
            } else {
                const xMark = document.createElement('span');
                xMark.classList.add('x-mark');
                xMark.textContent = 'X';
                dayElement.appendChild(xMark);
            }
        });

        calendar.appendChild(dayElement);
    }
});
