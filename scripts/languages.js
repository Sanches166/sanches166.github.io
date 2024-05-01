document.addEventListener('DOMContentLoaded', function() {
    // Получаем кнопки переключения языка
    const langBtns = document.querySelectorAll('.lang-btn');

    // Обработчик события для каждой кнопки
    langBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Получаем выбранный язык из атрибута data-lang
            const lang = this.getAttribute('data-lang');
            
            // Выполните соответствующие действия для каждого языка
            if (lang === 'en') {
                // Код для переключения на английский язык
                // Например, изменение текста на английский
                document.getElementById('home').querySelector('span').textContent = 'HOME';
                document.getElementById('about').querySelector('span').textContent = 'ABOUT';
                document.getElementById('projects').querySelector('span').textContent = 'PROJECTS';
                document.getElementById('contacts').querySelector('span').textContent = 'CONTACTS';
                // И так далее для остальных текстов на странице
            } else if (lang === 'ru') {
                // Код для переключения на русский язык
                // Например, изменение текста на русский
                document.getElementById('home').querySelector('span').textContent = 'ПРИВЕТ';
                document.getElementById('about').querySelector('span').textContent = 'ОБО МНЕ';
                document.getElementById('projects').querySelector('span').textContent = 'ПРОЕКТЫ';
                document.getElementById('contacts').querySelector('span').textContent = 'КОНТАКТЫ';
                // И так далее для остальных текстов на странице
            }
        });
    });
});
