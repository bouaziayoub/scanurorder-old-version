import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // debug: true
    lng: localStorage.getItem("i18nextLng") || "es",
    fallbackLng: "es",
    resources: {
      es: {
        translation: {
          header: {
            language: "ES",
            es: "ESPAÑOL",
            en: "INGLÉS",
            cat: "CATALÁN",
            setting: {
              changeUser: "CAMBIAR USUARIO",
              infoSetting: "MI ESTABLECIMIENTO",
              changePassword: "CAMBIA CONTRASEÑA",
              generateQR: "GENERAR CÓDIGO QR",
              logout: "CERRAR SESIÓN",
            },
            menu: {
              logout: {
                home: "INICIO",
                points: "PUNTOS",
                contact: "CONTACTO",
              },
              login: {
                login: "INICIAR SESIÓN",
                setting: "AJUSTES",
                information: "INFORMACION",
                order: "PEDIDOS",
                table: "MESAS",
                kitchen: "COCINA",
                product: "PRODUCTOS",
                menuCArta: "CARTA",
                category: "CATEGORÍAS",
                users: "TRABAJADORES"

              },
            },
          },
          home: {
            buttonEmpeza: "¡EMPEZAR YA!",
            slide1: {
              h1: "Los clientes piden desde la mesa",
              h5Part1:
                "Con el sistema de escaneado de QR, los clientes tan solo necesitan su",
              h5Part2: "teléfono móvil para pedir desde la mesa.",
              pPart1:
                "¿Eres un cliente y quieres utilizar la aplicación? ¡No esperes más!",
              pPart2:
                "Descárgala ya en desde la playstore o desde la appstore.",
            },
            slide2: {
              h1: "Automatiza pedidos y reservas",
              h5Part1:
                "Automatiza los pedidos y reservas, así como también los pagos relacionados",
              h5Part2: "con las mismas y hazlo todo bajo un mismo sistema.",
              pPart1: "Si quieres saber más acerca de la automatización de los",
              pPart2: 'pedidos y reservas haz clic en "MAS INFO", donde',
              pPart3: "encontrarás más información al respecto.",
            },
            slide3: {
              h1: "Controla tu negocio",
              h5Part1:
                "Controla tu negocio desde cualquier lugar, con la aplicación de",
              h5Part2:
                "administración, podrás ver las estadísticas de tu negocio.",
              pPart1:
                "Si quieres saber más acerca de la aplicación de administración",
              pPart2:
                'haz clic en "MAS INFO", donde encontrarás más información al respecto.',
              pPart3: "",
            },
          },
          points: {
            h1: "¿Que son los puntos?",
            pPart1:
              "Los puntos son un sistema en el cual por cada compra recibes una cierta cantidad de puntos. Una vez acumulas los suficientes, ¡Puedes obtener descuentos y promociones en cualquier restaurante!",
            pPart2:
              "Cada 100 puntos equivalen a 1€, ¡Solo por descargarte la aplicacion ya obtienes 200!",
            LoginBtn:
              "Sino estas empezando a acumular puntos, es porque quizá no has iniciado sesion, si este es tu caso, ¿A que esperas?",
            LoginBtn2: "Empieza a ganar puntos ahora!",
          },
          contact: {
            h2: "Contacta con nosotros",
            name: "Nombre",
            surname: "Apellidos",
            email: "Email",
            message: "Por favor, escribe tu mensaje",
            send: "Enviar",
            msgSuccess: "¡Tu mensaje fue enviado con éxito!",
          },
          login: {
            h1: "Iniciar sesión, si ya tienes cuenta",
            email: "Email",
            password: "Contraseña",
            login: "Iniciar sesión",
            register: "¿No tienes cuenta?",
            registerA: "Registrate",
            forgot: "¿Has olvidado tu contraseña?",
            forgotA: "Recuperar contraseña",
            accessAdmin: "Acceder como Administrador",
            accessWorker: "Acceder como Trabajador",
          },
          register: {
            h4: "Registrate, si no tienes cuenta",
            h5: "Registrar nuevo trabajador",
            name: "Nombre",
            surname: "Apellidos",
            email: "Email",
            password: "Contraseña",
            repeatPassword: "Repite la contraseña",
            register: "Registrarse",
            login: "¿Ya tienes cuenta?",
            loginA: "Iniciar sesión",
          },
          modals: {
            welcome: {
              title: "¡Genial! Ya has creado tu cuenta",
              text: "Ahora puedes acceder al panel de control. Una vez estes en el panel de control te pedirá un usuario y contraseña. El usuario que debes seleccionar es admin y la contraseña es la que has puesto para registrarte. La podrás cambiar más adelante.",
              text2:
                "Recuerde que la contraseña que pone, es lo mismo para todos los usuarios, desde el panel puede cambiarlos",
              button: "¡ACCEDER AL PANEL DE CONTROL!",
            },
            forgotPassword: {
              h2: "¿HAS OLVIDADO TU CONTRASEÑA ?",
              label:
                "Introduce tu email y te enviaremos un correo electrónico para que cambies tu contraseña",
              btnSend: "ENVIAR",
              btnCancel: "CANCELAR",
            },
          },
          errors: {
            required: "Es obligatorio introducir ",
            email:
              "Formato de correo electrónico no válido. Ingrese una dirección de correo electrónico válida.",
            pass: "Formato de contraseña no válido",
            emailPass:
              "El correo electrónico no existe o la contraseña no es correcta.",
            request: "Ocurrió un error, inténtalo de nuevo más tarde",
            requestRegister:
              "¡Hay algo que no está bien o el correo electrónico ya existe!",
            passRegister:
              "Formato de contraseña no válido. La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.",
            confirm: "Las contraseñas no coinciden",
            name: "El nombre solo debe contener letras, y la primera letra debe estar en mayúsculas",
            surname:
              "El Apellido debe contener solo letras, y la primera letra debe estar en mayúsculas",
            passReq: "Contrasenya incorrecta!!",
            // new
            numTable: "Por favor ingrese un número de mesa válido",
            capacity: "Por favor, introduzca un número de capacidad válido",
            emptyFields: "Debes llenar todos los campos!",
            existe: "La acción no se puede completar porque ya existe.",
            price:
              "El precio ingresado no es válido. Asegúrate de ingresar un número decimal positivo.",
            description:
              "La descripción solo puede contener letras, números y algunos signos de puntuación",
            phone: "El número de teléfono no es válido",
            web: "Please enter a valid website URL in the format http://example.com or https://www.example.com",
          },
          msgSuccess: {
            title: "Éxito",
            text: "¡Excelente! La acción se ha realizado con éxito.",
          },
          msgDelete: {
            title: "Confirme eliminación ",
            text: "¿Está seguro que desea eliminar ? ",
          },
          button: {
            cancel: "Cancelar",
            edit: "Editar",
            save: "Guardad",
            show: "Mostrar",
            add: "Añadir ",
            cont: "continuar",
            del: "Eliminar",
            details: "Detalles",
            create: "Crear ",
            close: "Cerrar",
            print: "Imprimir QR",
            confirm: "Confirmar",
          },
          product: {
            product: " Producto",
            products: " Productos",
            toProd: "a producto",
            titleList: "Lista de Categoías",
            titleList2: "Lista de menús",
            uploadtile: "Subir imagen",
            selectCategory:
              "Selecciona la categoría en el que deseas añadir el producto.",
            selectMenu:
              "Selecciona el menú en el que deseas añadir el producto.",
            noProducts: "Aún no hay ninguna producto creado. ¡Añade algunos!",
          },
          category: {
            toCat: "a categoría",
            categories: "Categorías",
            category: " Categoría",
            noProducts:
              "Todavía no hay productos en esta categoría. ¡Agregue algunos!",
            noCategory:
              "Aún no se ha creado ninguna categoría. ¡Agregue alguna!",
          },
          menu: {
            toMenu: "a carta",
            menu: " Carta",
            otherProducts: "Otros productos",
            noProducts:
              "Aún no hay productos ni categoría en este menú. ¡Añada algunos!",
            menus: "Cartas",
            noMenu: "Aún no hay ninguna carta creada. ¡Añade algunas!",
          },
          table: {
            tables: "Mesas",
            table: " Mesa",
            capacity: "Capacidad",
            qr: "Generar QR",
            titleQr: "QR TABLE número",
            noProducts: "Aún no hay ninguna mesa creada. ¡Añade algunas!",
          },
          order: {
            toMake: "Pedidos por hacer",
            id: "ID del pedido",
            statusOrder: " Estado de Pedido",
            statusPayment: " Estado de Pago",
            manage: "Gestionar todo los pedidos",
            paid: "Esta Pagado",
            unPaid: "Sin Pagar",
            spinner: "cargando...",
          },

          form: {
            name: "Nombre",
            price: "Precio",
            description: "Descripción",
            status: "Estado",
            number: "número ",
            input: "Introduce ",
            available: " Disponible",
            notAvailable: " No disponible",
            availableQs: "¿Está disponible?",
            reservasQs: "¿Acepta reservas?",
            yes: "Sí",
            address: "dirección",
            tel: "número de telefono",
            web: "sitio web",
          },
          info: {
            establishment: " establecimiento",
            details: "Detalles",
            scan: "ESCANEA EL CÓDIGO",
            title1: "Editar informacion",
            subTitle1: " Información básica",
            subTitle2: " Redes sociales",
            title2: "Fotos",
            text1: "Foto",
            title3: " Horario",
            next: "siguiente",
            previous: "anterior",
            days: "Días",
            open: "Abierto",
            close: "Cerrado",
            selectTime: "Selecciona horario",
            active: "El horario activo es: ",
            activate: "Activar",
            logo: " Logo del Establecimiento",
            updateInfo: "Actualizar la información",
            allowReser: "Permite Reservas",
            noAllowReser: "No Acepta reservas",
            opnTime: "Hora de apertura ",
            clsTime: "Hora de cierre ",
            noActiveSchedules:
              "No hay horarios activos. Debes crear un horario asignándole un nombre para poder usarlo en tu establecimiento. Si ya lo has creado antes, selecciónalo para poder activarlo",
          },
          day: {
            mon: "Lunes",
            tue: "Martes",
            wed: "Miércoles",
            thu: "Jueves",
            fri: "Viernes",
            sat: "Sábado",
            sun: "Domingo",
          },
          reservation: {
            title: "Reservas",
            completeName: "Nombre completo",
            numPeople: "Número de personas",
            day: "Fecha",
            hour: "Hora",
            btnAdd: "Añadir reserva",
            btnBack: "Volver",
          },
        },
      },
      en: {
        translation: {
          header: {
            language: "EN",
            es: "SPANISH",
            en: "ENGLISH",
            cat: "CATALAN",
            setting: {
              changeUser: "CHANGE USER",
              changePassword: "CHANGE PASSWORD",
              generateQR: "GENERATE QR CODE",
              infoSetting: "MY ESTABLISHMENT",
              logout: "LOGOUT",
            },
            menu: {
              logout: {
                home: "HOME",
                points: "POINTS",
                contact: "CONTACT",
              },
              login: {
                login: "LOGIN",
                setting: "SETTINGS",
                information: "INFORMATION",
                order: "ORDERS",
                table: "TABLES",
                kitchen: "KICHEN",
                product: "PRODUCTS",
                menuCArta: "MENU",
                category: "CATEGORIES",
                users: "WORKERS"

              },
            },
          },
          home: {
            buttonEmpeza: `¡LET'S START!`,
            slide1: {
              h1: "The clients take from their table",
              h5Part1:
                "With the QR scanning system, the clients only need their",
              h5Part2: "movilephone to take the note from their table.",
              pPart1: `Are you a client and you want to use our App? ¡Don't whait more`,
              pPart2: "Doewnload right now from AppStore ore Google playstore",
            },
            slide2: {
              h1: "Automatize orders and reservations",
              h5Part1:
                "Automatize the orders and reservations, as well as the payments related",
              h5Part2: "with the same and do it all under a single system.",
              pPart1: "If you want to know more about the automation of the",
              pPart2: 'orders and reservations click on "MORE INFO", where',
              pPart3: "you will find more information about it.",
            },
            slide3: {
              h1: "Control your business",
              h5Part1:
                "Control your business from anywhere, with the administration application,",
              h5Part2: "you can see the statistics of your business.",
              pPart1:
                "If you want to know more about the administration application",
              pPart2:
                'click on "MORE INFO", where you will find more information about it.',
            },
          },
          points: {
            h1: "What are the points?",
            pPart1:
              "The points are a system in which for each purchase you receive a certain amount of points. Once you have accumulated enough, you can get discounts and promotions in any restaurant!",
            pPart2:
              "Each 100 points are equivalent to 1€, ¡Only by downloading the application you already get 200!",
            LoginBtn:
              "If you are not starting to accumulate points, it is because maybe you have not logged in, if this is your case, ¿What are you waiting for?",
            LoginBtn2: "Start earning points now!",
          },
          contact: {
            h2: "Contact us",
            name: "Name",
            surname: "Surname",
            email: "Email",
            message: "Please, write your message",
            send: "Send",
            msgSuccess: "Your message was successfully submitted!",
          },
          login: {
            h1: "Log in, if you already have an account",
            email: "Email",
            password: "Password",
            login: "Log in",
            register: "¿Do you have an account?",
            registerA: "Register",
            forgot: "¿Have you forgotten your password?",
            forgotA: "Recover password",
            accessAdmin: "Access as administrator",
            accessWorker: "Access as a worker",
          },
          register: {
            h4: "Register, if you don´t have an account",
            h5: "Register a new worker",
            name: "Name",
            surname: "Surname",
            email: "Email",
            password: "Password",
            repeatPassword: "Repeat the password",
            register: "Register",
            login: "¿Do you have an account?",
            loginA: "Log in",
          },
          modals: {
            welcome: {
              title: "¡Great! You have already created your account",
              text: "Now you can access the control panel. Once you are in the control panel it will ask you for a user and password. The user you should select is admin and the password is the one you put to register. You can change it later.",
              text2:
                "Remember that the password you put, it is the same for all users, from the panel you can change them",
              button: "¡ACCESS THE CONTROL PANEL!",
            },
            forgotPassword: {
              h2: "DID YOU FORGOT YOUR PASSWORD?",
              label:
                "Enter your email and we will send you an email to change your password",
              btnSend: "SEND",
              btnCancel: "CANCEL",
            },
          },
          errors: {
            required: "It is mandatory to enter ",
            email: "Invalid email format. Please enter a valid email address.",
            pass: "Invalid password format",
            emailPass:
              "The email does not exist or the password is not correct.",
            request: "An error occurred, please try again later",
            requestRegister:
              "There is something wrong or the email already exists!",
            passRegister:
              "Invalid password format. Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
            confirm: "Passwords do not match",
            name: "Name must only contain letters, and the first letter must be uppercase",
            surname:
              "LastName must contain only letters, and the first letter must be uppercase",
            passReq: "Wrong password!!",

            numTable: "Please enter a valid table number",
            capacity: "Please enter a valid capacity number",
            emptyFields: "You must fill all fields!",
            existe: "The action cannot be completed because it already exists.",
            price:
              "The price entered is not valid. Make sure to enter a positive decimal number.",
            description:
              "The description can only contain letters, numbers and some punctuation marks",
            phone: "The phone number is invalid",
            web: "Please enter a valid website URL in the format http://example.com or https://www.example.com",
          },
          msgSuccess: {
            title: "Success",
            text: "Great! Action completed successfully.",
          },
          msgDelete: {
            title: "Delete Confirmation",
            text: "Are you sure you want to delete ? ",
          },
          button: {
            cancel: "Cancel",
            edit: "Edit ",
            save: "Save",
            show: "Show",
            add: "Add ",
            cont: "continue",
            del: "Delete",
            details: "Details",
            create: "Create ",
            close: "Close",
            print: "Print QR",
            confirm: "Confirm",
          },
          product: {
            product: "Product",
            products: "Products",
            toProd: "to product",
            titleList: "Category List",
            titleList2: "Menu List",
            uploadtile: "Upload picture",
            selectCategory:
              "Select the category where you want to add the product.",
            selectMenu: "Select the menu where you want to add the product.",
            noProducts: "There is still no created product add some!",
          },
          category: {
            toCat: "to category",
            categories: "Categories",
            category: "Category",
            noProducts: "No products in this category yet. Please add some!",
            noCategory: "No category created yet. Add some!",
          },
          menu: {
            toMenu: "to menu",
            menu: "Menu",
            otherProducts: "Other Products",
            noProducts:
              "There are no products or categories in this menu yet. Add some!",
            menus: "Menus",
            noMenu: "No menu created yet. Add some!",
          },
          table: {
            tables: "Tables",
            table: "Table",
            capacity: "Capacity",
            qr: "Generate QR",
            titleQr: "QR TABLE number",
            noProducts: "There is still no table created add some!",
          },
          order: {
            toMake: "Orders to make",
            id: "Order ID",
            statusOrder: "Order Status",
            statusPayment: "Payment Status",
            manage: "Manage all orders",
            paid: "Paid",
            unPaid: "Unpaid",
            spinner: "loading...",
          },

          form: {
            name: "Name ",
            price: "Price",
            description: "Description",
            status: "Status",
            number: "number ",
            input: "Enter ",
            available: "Available",
            notAvailable: "Not available",
            availableQs: "Is it available?",
            reservasQs: "Do you accept reservations?",
            yes: "Yes",
            address: "Address",
            tel: "Phone number",
            web: "Website",
          },
          info: {
            establishment: "Establishment",
            details: "Details",
            scan: "SCAN THE CODE",
            title1: "Edit information",
            subTitle1: "Basic information",
            subTitle2: "Social Networks",
            title2: "Photos",
            text1: "Foto",
            title3: "Schedule",
            next: "Next",
            previous: "Previous",
            days: "Days",
            open: "Open",
            close: "Closed",
            selectTime: "Select time",
            active: "The active schedule is: ",
            activate: "Activate ",
            logo: "Logo of the Establishment",
            updateInfo: "Update information",
            allowReser: "Allow Reservations",
            noAllowReser: "Doesn't Accept Reservations",
            opnTime: "Opening time ",
            clsTime: "Closing time",
            noActiveSchedules:
              "There are no active hours. You must create a schedule by assigning a name to it in order to use it in your establishment. If you have already created it before, select it to activate it",
          },
          day: {
            mon: "Monday",
            tue: "Tuesday",
            wed: "Wednesday",
            thu: "Thursday",
            fri: "Friday",
            sat: "Saturday",
            sun: "Sunday",
          },
          reservation: {
            title: "Reservations",
            completeName: "Full Name",
            numPeople: "Number of people",
            day: "Date",
            hour: "Hour",
            btnAdd: "Add reservation",
            btnBack: "Back",
          },
        },
      },
      cat: {
        translation: {
          header: {
            language: "CAT",
            es: "ESPANYOL",
            en: "ANGLÉS",
            cat: "CATALÁ",
            setting: {
              changeUser: "CANVIAR D'USUARI",
              changePassword: "CANVIAR LA CONTRASENYA",
              generateQR: "GENERAR CODI QR",
              infoSetting: "EL MEU ESTABLIMENT",
              logout: "TANCAR SESSIÓ",
            },
            menu: {
              logout: {
                home: "INICI",
                points: "PUNTS",
                contact: "CONTACTE",
              },
              login: {
                login: "INICIAR SESSIÓ",
                setting: "CONFIGURACIONS",
                information: "INFORMACIÓ",
                order: "COMANDES",
                table: "TAULES",
                kitchen: "CUINA",
                product: "PRODUCTES",
                menuCArta: "CARTA",
                category: "CATEGORIES",
                users: "TREBALLADORS"
              },
            },
          },
          home: {
            buttonEmpeza: "¡COMENÇA JA!",
            slide1: {
              h1: "Els clients demanen des de la taula",
              h5Part1:
                "Amb el sistema d'escaneig de QR, els clients tan sols necessiten el seu",
              h5Part2: "telèfon mòbil per demanar des de la taula.",
              pPart1:
                "¿Ets un client i vols utilitzar l'aplicació? ¡No esperis més!",
              pPart2:
                "Descarrega ja en des de la playstore o des de la appstore.",
            },
            slide2: {
              h1: "Automatitza peticions i reserves",
              h5Part1:
                "Automatitza les peticions i reserves, així com també els pagaments relacionats",
              h5Part2: "amb les mateixes i fes-ho tot sota un mateix sistema.",
              pPart1: "Si vols saber més sobre l'automatització de les",
              pPart2: 'peticions i reserves fes clic a "MAS INFO", on',
              pPart3: "trobaràs més informació al respecte.",
            },
            slide3: {
              h1: "Controla el teu negoci",
              h5Part1:
                "Controla el teu negoci des de qualsevol lloc, amb l'aplicació de",
              h5Part2:
                "administració, podràs veure les estadístiques del teu negoci.",
              pPart1: "Si vols saber més sobre l'aplicació d'administració",
              pPart2:
                'fes clic a "MAS INFO", on trobaràs més informació al respecte.',
              pPart3: "",
            },
          },
          points: {
            h1: "¿Que son els punts?",
            pPart1:
              "Els punts son un sistema en el qual per cada compra rebes una certa quantitat de punts. Un cop acumules els suficients, ¡Pots obtenir descomptes i promocions en qualsevol restaurant!",
            pPart2:
              "Cada 100 punts equivalen a 1€, ¡Només per descarregar-te l'aplicació ja obtens 200!",
            LoginBtn:
              "Sino estas començant a acumular punts, és perquè potser no has iniciat sessió, si aquest és el teu cas, ¿A que esperes?",
            LoginBtn2: "Comença a guanyar punts ara!",
          },
          contact: {
            h2: "Contacta amb nosaltres",
            name: "Nom",
            surname: "Cognoms",
            email: "Email",
            message: "Si us plau, escriu el teu missatge",
            send: "Enviar",
            msgSuccess: "El vostre missatge s'ha enviat correctament!",
          },
          login: {
            h1: "Inicia sessió, si ja tens un compte",
            email: "Email",
            password: "Contrasenya",
            login: "Iniciar sessió",
            register: "¿Tens un compte?",
            registerA: "Registra't",
            forgot: "¿Has oblidat la teva contrasenya?",
            forgotA: "Recupera la contrasenya",
            accessAdmin: "Accedir com a Administrador",
            accessWorker: "Accedir com a Treballador",
          },
          register: {
            h4: "Registra't, si no tens un compte",
            h5: "registrar un nou treballador",
            name: "Nom",
            surname: "Cognoms",
            email: "Email",
            password: "Contrasenya",
            repeatPassword: "Repeteix la contrasenya",
            register: "Registrar",
            login: "¿Tens un compte?",
            loginA: "Iniciar sessió",
          },
          modals: {
            welcome: {
              title: "¡Genial! Ja has creat el teu compte",
              text: "Ara podeu accedir al tauler de control. Un cop estiguis al tauler de control et demanarà un usuari i contrasenya. L'usuari que has de seleccionar és admin i la contrasenya és la que has posat per registrar-te. Podràs canviar-la més endavant.",
              text2:
                "Recorda que la contrasenya que has posat, es la mateixa per a tots els usuaris, desde el panell les podras cambiar",
              button: "¡ACCEDIR AL TAULER DE CONTROL!",
            },
            forgotPassword: {
              h2: "HAS OBLIDAT LA TEVA CONTRASENYA?",
              label:
                "Introdueix el teu email i t'enviarem un correu electrònic perquè canviïs la teva contrasenya",
              btnSend: "ENVIAR",
              btnCancel: "CANCEL·LAR",
            },
          },
          errors: {
            required: "És obligatori introduir ",
            email:
              "Format de correu electrònic no vàlid. Introduïu una adreça de correu electrònic vàlida.",
            pass: "Format de contrasenya no vàlid",
            emailPass:
              "El correu electrònic no existeix o la contrasenya no és correcta.",
            request: "Va passar un error, intenta-ho de nou més tard",
            requestRegister:
              "Hi ha alguna cosa que no està bé o el correu electrònic ja existeix!",
            passRegister:
              "Format de contrasenya no vàlid. La contrasenya ha de tenir almenys 8 caràcters i contenir com a mínim una lletra majúscula, una lletra minúscula, un número i un caràcter especial.",
            confirm: "Les contrasenyes no coincideixen",
            name: "El nom només ha de contenir lletres, i la primera lletra ha d'estar en majúscules",
            surname:
              "L'cognom ha de contenir només lletres, i la primera lletra ha d'estar en majúscules",
            passReq: "Contrasenya incorrecta!!",

            numTable: "Si us plau introduïu un número de taula vàlid",
            capacity: "Si us plau, introduïu un nombre de capacitat vàlid",
            emptyFields: "Has d'omplir tots els camps!",
            existe: "L'acció no es pot completar perquè ja existeix.",
            price:
              "El preu ingressat no és vàlid. Assegureu-vos d'ingressar un nombre decimal positiu.",
            description:
              "La descripció només pot contenir lletres, números i alguns signes de puntuació",
            phone: "El número de telèfon no és vàlid",
            web: "Please enter a valid website URL en format http://example.com or https://www.example.com",
          },
          msgSuccess: {
            title: "Èxit",
            text: "Excel·lent! L'acció s'ha realitzat amb èxit.",
          },
          msgDelete: {
            title: "Confirmeu la supressió",
            text: "Esteu segur que voleu suprimir ? ",
          },
          button: {
            cancel: "Cancel·lar",
            edit: "Editar",
            save: "Guardeu",
            show: "Mostrar",
            add: "Afegir ",
            cont: "continuar",
            del: "Eliminar",
            details: "Detalls",
            create: "Crear ",
            close: "Tancar",
            print: "Imprimeix QR",
            confirm: "Confirmar",
          },
          product: {
            product: " Producte",
            products: " Productes",
            toProd: "a producte",
            titleList: "Llista de categories",
            titleList2: "Llista de menús",
            uploadtile: "Puja una imatge",
            selectCategory:
              "Selecciona la categoria en la qual desitges afegir el producte.",
            selectMenu:
              "Selecciona el menú en el qual desitges afegir el producte.",
            noProducts:
              "Encara no hi ha cap producte creat. Afegeix-ne alguns!",
          },
          category: {
            toCat: "a categoria",
            categories: "Categories",
            category: " Categoria",
            noProducts:
              "Encara no hi ha productes en aquesta categoria. Afegiu-ne alguns!",
            noCategory: "Encara no s'ha creat cap categoria. Afegeix-ne'n!",
          },
          menu: {
            toMenu: "a carta",
            menu: " Carta",
            otherProducts: "Altres productes",
            noProducts:
              "Encara no hi ha productes ni categoria en aquest menu. Afegiu-ne alguns!",
            menus: "Cartes",
            noMenu: "Encara no hi ha cap carta creada. Afegeix-ne algunes!",
          },
          table: {
            tables: "Taules",
            table: " Taula",
            capacity: "Capacitat",
            qr: "Generar QR",
            titleQr: "QR TAULA número",
            noProducts: "Encara no hi ha cap taula creada. Afegeix-ne algunes!",
          },
          order: {
            toMake: "Comandes per fer",
            id: "ID de la comanda",
            statusOrder: " Estat de la comanda",
            statusPayment: " Estat de pagament",
            manage: "Gestionar totes les comandes",
            paid: "Està pagat",
            unPaid: "Sense pagar",
            spinner: "carregant...",
          },

          form: {
            name: "Nom",
            price: "Preu",
            description: "Descripció",
            status: "Estat",
            number: "número ",
            input: "Introdueix ",
            available: " Disponible",
            notAvailable: " No disponible",
            availableQs: "Està disponible?",
            reservasQs: "Accepta reserves?",
            yes: "Sí",
            address: "adreça",
            tel: "número de telèfon",
            web: "lloc web",
          },
          info: {
            establishment: " establiment",
            details: "Detalls",
            scan: "ESCANEJA EL CÓDIG",
            title1: "Editar informació",
            subTitle1: " Informació bàsica",
            subTitle2: " Xarxes socials",
            title2: "Fotos",
            text1: "Foto",
            title3: " Horari",
            next: "següent",
            previous: "anterior",
            days: "Dies",
            open: "Obert",
            close: "Tancat",
            selectTime: "Selecciona horari ",
            active: "L'horari actiu és: ",
            activate: "Activar",
            logo: " Logo de l'Establiment",
            updateInfo: "Actualitzar la informació",
            allowReser: "Permet Reserves",
            noAllowReser: "No accepta reserves",
            opnTime: "Hora d'obertura ",
            clsTime: "Hora de tancament ",
            noActiveSchedules:
              "No hi ha horaris actius. Has de crear un horari assignant-li un nom per poder fer-lo servir al teu establiment. Si ja ho heu creat abans, seleccioneu-lo per poder activar-lo",
          },
          day: {
            mon: "Dilluns",
            tue: "Dimarts",
            wed: "Dimecres",
            thu: "Dijous",
            fri: "Divendres",
            sat: " Dissabte",
            sun: "Diumenge",
          },
          reservation: {
            title: "Reserves",
            completeName: "Nom complet",
            numPeople: "Nombre de persones",
            day: "Data",
            hour: "Hora",
            btnAdd: "Afegir reserva",
            btnBack: "Tornar",
          },
        },
      },
    },
  });
