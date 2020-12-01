// Инициализируем Swiper
 new Swiper('.image-slider', {
  //стрелки управления
  navigation : {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
    },
	// Навигация
	// Буллеты, текущее место положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',
		//Буллеты
		clickable: true,
		//динамические буллеты
		dynamicBullets: true,
		//кастомные буллеты
		renderBullet: function(index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		//фракция показывает кол-во изображений всего и номер показываемого
		type: 'fraction',
		//кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
			' из ' +
			'<span class="' + totalClass + '"></span>';
		},
		//Прогрессбар
		type: 'progressbar'
	},
	
	
	//Скроллбар
	scrollbar: {
		el: '.swiper-scrollbar',
		//Возможность перетаскивать скроолбар
		draggable: true
	},
	
	
	// Включение/отключение перетаскивания на ПК
	simulateTouch: true,
	// Чувствительность свайпа по умолчания 1, если хотим увеличить скорость переключения то ставим большую цифру 2.3.4.5 Если поставить 0 то ОТКЛЮЧИМ НА ВСЕХ УСТРОЙСТВАХ
	touchRaito: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	
	//переключения при клике на слайд
	slideToClickedSlide: true,
	
	// АВТОВЫСОТА подстройка под размер картинки всего слайдера !!!! Для корректной работы нужно Мультирядность slidesPerColumn: 1,
	autoHeight: true,
	
	//Колличество слайдов для показа, значение по умолчанию 1 , можно указвать 2,5 или 0,5, ТАК ЖЕ можно указать 'auto'
	slidesPerView: 2.5,
	
	//Колличество пролистываемых слайдов
	slidesPerGroup: 1,
	
	//Отключение Функционала слайдера если колличество слайдов меньше 2х
	watchOverflow: true,
	
	//Отступ между слайдами
	spaceBetween: 0,
	
	// Активный слайд по центру
	centeredSlides: true,
	
	//Выбор номера слайда для показа первым - НУЖНО УЧИТЫВАТЬ ЧТО ПЕРВЫЙ СЛАЙД ИМЕЕТ НОМЕР - 0
	initialSlide: 0,
	
	//Мультирядность слайдов !!!! Для корректной работы нужно отключать АВТОВЫСОТА - autoHeight: false,
	slidesPerColumn: 1,
  });