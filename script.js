function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
}
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const openLink = document.getElementById('openBooking');

openLink.addEventListener('click', function(event) {
  event.preventDefault(); // чтобы ссылка не прыгала наверх страницы
  overlay.style.display = 'block';
  modal.style.display = 'block';
});

function closeModal() {
  overlay.style.display = 'none';
  modal.style.display = 'none';
}

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо за запись!');
  closeModal();
});

    // Находим контейнер со слайдами
    const slides = document.querySelector('.slides');

    // Определяем количество слайдов
    const slideCount = document.querySelectorAll('.slide').length;

    // Находим кнопки «Назад» и «Вперёд»
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Находим сам слайдер (нужен для остановки автопрокрутки при наведении)
    const slider = document.querySelector('.slider');

    let currentIndex = 0; // Переменная для хранения текущего индекса слайда
    let autoPlayInterval; // Переменная для хранения интервала автопрокрутки

    /**
     * Функция для смены слайдов
     * @param {number} index — индекс слайда, на который нужно перейти
     */
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1; // Если текущий слайд первый, переходим на последний
        } else if (index >= slideCount) {
            index = 0; // Если текущий слайд последний, переходим на первый
        }

        currentIndex = index; // Запоминаем текущий индекс
        slides.style.transform = `translateX(${-index * 100}%)`; // Смещаем контейнер слайдов
    }

    // Добавляем обработчик клика для кнопки «Назад»
    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    // Добавляем обработчик клика для кнопки «Вперёд»
    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    /**
     * Функция запуска автоматического перелистывания слайдов
     * Устанавливает интервал на три секунды
     */
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }

    /**
     * Функция остановки автопрокрутки
     * Останавливает заданный ранее интервал
     */
    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Запускаем автопрокрутку при загрузке страницы
    startAutoPlay();

    // Останавливаем автопрокрутку, если пользователь навёл курсор на слайдер
    slider.addEventListener('mouseenter', stopAutoPlay);

    // Возобновляем автопрокрутку, когда пользователь убирает курсор
    slider.addEventListener('mouseleave', startAutoPlay);

function openBooking() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Клик по кнопке "Онлайн запись"
    const openLink = document.getElementById('openBooking');
    if (openLink) {
        openLink.addEventListener('click', function(event) {
            event.preventDefault();
            openBooking();
        });
    }

    // Клик по цене
    document.querySelectorAll('.price').forEach(function(priceEl) {
        priceEl.addEventListener('click', function() {
            const serviceName = priceEl.getAttribute('data-service');
            openBooking();
            // Подставить услугу в select
            const serviceSelect = document.getElementById('service');
            if (serviceSelect) {
                for (let i = 0; i < serviceSelect.options.length; i++) {
                    if (serviceSelect.options[i].text === serviceName) {
                        serviceSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        });
    });

    // Клик по кнопке закрытия
    document.querySelectorAll('.close-modal').forEach(function(btn) {
        btn.addEventListener('click', closeModal);
    });

    // Клик по overlay для закрытия
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Отправка формы
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за запись!');
            closeModal();
        });
    }
});