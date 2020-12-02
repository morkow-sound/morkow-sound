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
	//Управление через стрелки клавиатуры
	keyboard: {
		enabled: true, //включение функции управления с клавиатуры
		onlyInViewport: true, // будет работать только в пределах viewport нашего slider
		pageUpDown: true, //будет работать с клавишами PgUp PgDn на клавиатуре
	},
	//Управление с помощью колёсика мышки
	mousewheel: {
		sensitivity: 1, // чувствительность мыши
		eventsTarget: ".image-slider", // настройка класса срабатывания - однако будет срабатывать везде где указан этот класс
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
	//slidesPerView: 2.5,
	
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
	
	//Бесконечный слайдер - зацикливание ВНИМАНИЕ - не будет работать с праматером Мультирядность - slidesPerColumn: 1 - не должно быть больше 1, И так же не будет работать с scrollbar 
	loop: true,
	
	//loopedSlides: 2.5, // если slidesPerView: auto, - то нужно добавить, если slidesPerView: 2.5 то выставляем тоже значение
	
	//Свободный режим без фиксации картинки на месте
	//freeMode: true,
	
	//Автопрокрутка
	//autoplay: {
		//delay: 1000, //пауза между слайдами в милисекундах
		//stopOnLastSlide: true, // не сработает если включён праметр loop: true,
		//disableOnInteraction: false // даёт возможность слайдеру после ручного переключения начать заново автопрокрутку
	//},
	
	//Скорость прокрутки слайдов
	speed: 500, // в милисекундах чем больше тем медленее
	
	//Вертикальный или Горизонтальный Слайдер 
	direction: 'horizontal', // vertical - вертикально
	
	
	//ЭФФЕКТЫ ПЕРЕКЛЮЧЕНИЯ СЛАЙДОВ
	//effect: 'slide', // slide - стандартный способ переключения , 
	//effect: 'fade', // при такой настройке нужно чтобы выводился всегда 1 слайд и закоментированны breakpoints
	//effect: 'flip',   // эффект поворота при такой настройке нужно чтобы выводился всегда 1 слайд и закоментированны breakpoints
	//effect: 'cube',     // эффект 3D куба ВАЖНО ограничить ширину слайдера при такой настройке нужно чтобы выводился всегда 1 слайд и закоментированны breakpoints
	effect: 'coverflow',  // обложки как в iTunse
	
	//настройки эффекта fade
	//fadeEffect: {
	//	crossFade: true, //параллельная смена прозрачности
	//},
	
	//настройки эффекта flip
	//flipEffect: {
	//slideShasows: true, //тень
	//limitRotation: true, //показ только актиного слайда
	//},
	
	//настройки эффекта cube
	//cubeEffect: {
	//slideShasows: true, //тень
	//shadow: true,
	//shadowOffset: 20,
	//shadowScale: 0.94,	
	//},
	
	//настройки эффекта coverflow
	coverflowEffect: {
	rotate: 20, // угол поворота
	stretch: 50, // наложение
	slideShadows: true, // тень
	},
	
	
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// Адаптация под Ширину Экрана
breakpoints: {		
	320: {
		slidesPerView: 1,
		loopedSlides: 1,
	},
	480: {
		slidesPerView: 1.5,
		loopedSlides: 1.5,
	},
	768: {
		slidesPerView: 2,
		loopedSlides: 2,
	},
	1024: {
		slidesPerView: 3,
		loopedSlides: 3,
	}
},
	
  });