//= wrapped
/**
 * Created by shardik on 21/01/18.
 */
angular.module('streama.translations').config(function ($translateProvider) {
	$translateProvider.translations('ru', {
		LOGIN: {
			TITLE: 'Пожалуйста, авторизуйтесь',
			USERNAME: 'Логин',
			PASSWORD: 'Пароль',
			FIRST_TIME_HINT: 'Впервые? Используйте \'admin\' в качестве логина и пароля для входа.',
			SUBMIT: 'Войти',
      SESSION_EXPIRED: 'Ваша сессия истекла. Пожалуйста, войдите снова.'
		},
		DASHBOARD: {
			TITLE: 'Главная',
			RECOMMENDATIONS: 'Рекомендовано для вас',
			NEW_RELEASES: 'Новое на сайте',
			CONTINUE_WATCHING: 'Продолжить просмотр',
			DISCOVER_SHOWS: 'Обзор тв-шоу',
			DISCOVER_MOVIES: 'Обзор кино',
			DISCOVER_OTHER_VIDEOS: 'Обзор остального видео',
			SORT: 'Сортировать по:',
			SEARCH_BY_NAME: 'имени...',
			FILTER_BY_TAG: 'тегу...',
			BROWSE_GENRES: 'Обзор',
			LOOKING_AT_GENRE: 'Вы смотрите по жанру:',
			MARK_COMPLETED: 'Уже просмотрено!',
			NO_TVSHOWS_FOUND: 'ТВ-шоу пока недоступно',
			NO_MOVIES_FOUND: 'Кино пока недоступно',
      WATCHLIST: 'Посмотреть позже'
		},
		VIDEO: {
			RELEASED: 'Дата выхода',
			IMDB: 'IMDB',
			RATING: 'Рейтинг',
			VOTES: 'Голосов',
			OVERVIEW: 'Описание',
			GENRE: 'Жанр',
			TRAILER: 'Трейлер',
			SEASON: 'Сезон',
      NO_SUBTITLE: 'без субтитров'
		},

		MESSAGES: {
			SHARE_SOCKET: 'Создавая новую сессию, вы будете перенаправлены обратно на этот плеер, но на этот раз у вас будет уникальный идентификатор сессии в URL-адресе. Поделитесь этим видео с друзьями, чтобы синхронизировать их с ними!',
			FILE_MISSING: 'Существует проблема с этим контентом. Кажется, вы удалили из него связанный видеофайл.',
			CODEC_PROBLEM: 'Кажется, что проблема связана с добавлением видеофайла в плеер. Это, скорее всего, связано с проблемой кодека. Попробуйте преобразовать его в совместимый кодек HTML5, удалите прикрепленный файл и снова добавьте его. Если кодеки в порядке, проверьте данные об ошибках сервера и базового URL в настройках.',
			WRONG_BASEPATH: 'Вы пытаетесь просмотреть видео с использованием неправильного базового пути, но просматриваете страницу через переменную «{{basePath}}». Убедитесь, что вы установили правильный базовый путь в настройках и используете его для просмотра приложения.',
			FILE_IN_FS_NOT_FOUND: 'Ваше видео не может быть найдено ни в одном из мест, доступных для приложения. Проверьте свои настройки и файловую систему, чтобы убедиться, что файлы доступны для приложения.'
		},
		MANAGE_CONTENT: 'Управление',
    MANAGE_SUB_PROFILES: 'Управление профилями',
    WHOS_WATCHING: 'Кто будет смотреть?',
    ADD_SUB_PROFILE: 'Добавить профайл',
    EDIT_BTN: 'Изменить',
    DONE_BTN: 'Сделано',
    SAVE_BTN: 'Сохранить',
    CREATE_BTN: 'Создать',
    CANCEL_BTN: 'Отменить',
    DELETE_BTN: 'Удалить',
    ENTER_NAME: 'Введите имя',
    EDIT_PROFILE: 'Редактировать профиль',
    CREATE_PROFILE: 'Создать профиль',
		ADMIN: 'Админка',
		HELP: 'Помощь',
		HELP_FAQ: 'ПОМОЩЬ / ЧаВО',
		PROFILE_SETTINGS: 'Настройки',
		LOGOUT: 'Выйти',
		CHANGE_PASSWORD: 'Изменить пароль',
    LANGUAGE_en: 'English/английский',
    LANGUAGE_ru: 'Русский',
    LANGUAGE_de: 'Deutsch/Немецкий',
    LANGUAGE_fr: 'Français/Французский',
    LANGUAGE_es: 'Español/испанский',
    LANGUAGE_kr: '한국어/корейский язык',
    LANGUAGE_nl: 'Nederlands/Голландский',
    LANGUAGE_pt: 'Português/португальский',
    LANGUAGE_ja: '日本語/японский язык',
    LANGUAGE_it: 'Italiano/итальянский',
    LANGUAGE_da: 'Dansk/датский',
    LANGUAGE_ar: 'عربى/арабский',
		PROFIlE: {
			USERNAME: 'Логин',
			FULL_NAME: 'Имя',
			LANGUAGE: 'Язык',
			PAUSE_ON_CLICK: 'Поставить на паузу при клике',
			FAVORITE_GENRES: 'Любимые жанры',
      AMOUNT_OF_MEDIA_ENTRIES: 'Количество видео на главной странице (до ссылки «Загрузить больше»)',
			SAVE: 'Сохранить профиль',
			PASS: 'Пароль',
			OLD_PASS: 'Старый пароль',
			NEW_PASS: 'Новый пароль',
			NEW_PASS_PLACEHOLDER: 'Новый пароль (минимум 6 символов)',
			REPEAT_PASS: 'Повоторите пароль',
			PASS_ERROR_EMPTY: 'Пароль не должен быть пустым',
			PASS_ERROR_LENGTH: 'Пароль должен быть не менее 6 символов',
			PASS_ERROR_REPEAT: 'Пароли не совпадают',
			SAVE_PASS: 'Установить новый пароль'
		},

		SORT_OPTIONS: {
			AZ: 'A-Z',
			ZA: 'Z-A',
			NEWEST_ADDED: 'Самые последние',
			OLDEST_ADDED: 'Самые новые',
			NEWEST_RELEASED: 'Последние поступления',
			OLDEST_RELEASED: 'Старые поступления',
			NEWEST_AIRED: 'Самые новые',
			OLDEST_AIRED: 'Самые старые',
      NEWEST_REPORTED: 'Самые последние сообщения',
      OLDEST_REPORTED: 'Старое сообщение',
      NEWEST_UPDATED: 'Самые последние обновления',
      OLDEST_UPDATED: 'Последнее обновление'
		},

		FAQ: {
			UPLOAD_VIDEO: {
				TITLE: 'Как я могу загрузить видео?',
				TEXT: "Вы можете загружать видео, перейдя в меню «Управление». Выберите, что вы хотите загрузить: фильм, телешоу или другое видео. Выберите соответствующее подменю "+
               "в левой части экрана. Вы можете загрузить видео, нажав кнопку «Создать новый фильм / ТВ-шоу / другое видео или набрав" +
               "название видео, которое вы хотите загрузить в панель поиска, и выбрать соответствующий фильм из результатов поиска. После этого вы можете выбрать, как удобно добавить видео:" +
               "вводя всю информацию вручную, либо загружая свою информацию из базы TheMovieDB (автоматически), после чего вы можете загрузить видео и файлы субтитров, нажав кнопку «Управление»."
			},
			DELETE_VIDEO: {
				TITLE: 'Как мне удалить видео?',
				TEXT: "Вы можете удалить видео, перейдя на страницу информации о видео и нажав «Управление файлами» и выбрав красную иконку со значком мусорной корзины. Нажав «Изменить фильм» и выбрав "+
"Удалить фильм - это еще один способ сделать так. Вы также можете использовать Диспетчер файлов, который находится в меню «Управление». Вы можете увидеть все файлы, которые вы там загрузили. Нажмите" +
"красную иконку со значком мусорной корзины, чтобы удалить файл."
			},
			VIDEO_FORMATS: {
				TITLE: 'Какие форматы видео поддерживаются?',
				TEXT: "Streama поддерживает в настоящее время только те форматы видеофайлов, поддерживаемые проигрывателем стандарта HTML5. Вы можете проверить, совместим ли ваш видеофайл с HTML5-плеером,"+
				" перетащив ваш файл на пустую закладку в вашем браузере. Если видео откроется и начнет воспроизводиться, значит формат поддерживается."
			},
			SUBTITLES: {
				TITLE: 'Как добавить субтитры к видео?',
				TEXT: "Вы можете добавить субтитры к видео, нажав кнопку «Управление», которая находится на странице информации о видео. Вы можете перетащить туда файлы субтитров. "+
"Раньше вам приходилось вручную преобразовывать их в совместимый формат файла (WebVTT), мучаясь с перекодированием! Теперь приложение обрабатывает за вас весь рутинный процесс."
			},
			INVITE_USERS: {
				TITLE: 'Как я могу пригласить друзей посмотреть мои размещенные видео?',
				TEXT:"Вы можете поделиться своими видео с друзьями, предложив им просмотр на размещенном вами сайте с использованием Streama. Перейдите в меню «Пользователи» и нажмите «Пригласить пользователя». Заполните форму приглашения и "+
"выберите роль приглашенного пользователя. Пользователи с ролью Admin могут редактировать пункт «Пользователи и настройки». Пользователи с ролью Content Manager могут редактировать контент. Ваш друг будет извещен о" +
"приглашении по электронной почте. Вы также можете обмениваться видеосессиями с друзьями, нажав кнопку «Поделиться» видеопроигрывателя, связав URL-адрес сессии с ними."
			},
			BASE_URL: {
				TITLE: "Какой базовый URL-адрес Streama и как его настроить?",
				TEXT: "Базовый URL-адрес используется для воспроизведения видео и ссылки в приглашении по электронной почте."
			},
			NOTIFICATIONS: {
				TITLE: "Что такое уведомления?",
				TEXT: "Вы можете уведомить своих приглашенных друзей о новых загруженных видео, отправив им уведомления. Вы можете отправить их, добавляя в очередь уведомлений, нажав на кнопку "+
"«Добавить уведомлениe», которая находится на странице информации вашего видео, и перейти в меню «Уведомления», нажав кнопку «Отправить в очередь»."
			},
			VIDEO_PLAYER_SHORTCUTS: {
				TITLE: "Имеет ли видеоплеер сочетания клавиш?",
				TEXT: "Да. Пауза/Воспроизведение: пробел. Управление звуком: клавиши со стрелками вверх и вниз. Промотать видео вперед/назад: клавиши со стрелками влево и вправо. Длинная промотка:" +
				" Клавиша Ctrl  + клавиши со стрелками влево и вправо. Выключение/выключение полноэкранного режима: Клавиши Alt + Enter. Включение/выключение субтитров: клавиша S(«Ы»), Приглушение звука: M(«Ь»), Вернуться" +
				" к предыдущему экрану: клавиши Delete или Backspace."
			},
			FAVORITE_GENRES: {
				TITLE: "Как любимые жанры пользователя влияют на потоки?",
				TEXT: "В процессе..."
			},
			USEFUL_LINKS: {
				TITLE: "Полезные ссылки",
				TEXT: "Тоже в процессе..."
			}
		}
	});
});
