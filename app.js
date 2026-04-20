const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

const TOPICS = {
  verduras: {
    label: "Verduras",
    visual: ["T", "Z", "P", "A"],
    words: {
      easy: ["TOMATE", "PAPA", "CEBOLLA", "PEPINO", "LECHUGA", "AJO", "MAIZ", "COL", "NABO", "APIO"],
      medium: ["TOMATE", "PIMIENTO", "CEBOLLA", "ZANAHORIA", "LECHUGA", "PEPINO", "CALABAZA", "ESPINACA", "BROCOLI", "GUISANTE"],
      hard: ["BERENJENA", "PIMIENTO", "ZANAHORIA", "ALCACHOFA", "ESPINACA", "REMOLACHA", "CALABACIN", "CHAMPIÑON", "COLIFLOR", "ESPARRAGO"]
    }
  },
  colores: {
    label: "Colores",
    visual: ["R", "A", "V", "N"],
    words: {
      easy: ["ROJO", "AZUL", "VERDE", "NEGRO", "BLANCO", "ROSA", "GRIS", "LILA", "MARRON", "NARANJA"],
      medium: ["ROJO", "AZUL", "VERDE", "NEGRO", "BLANCO", "AMARILLO", "MORADO", "VIOLETA", "CELESTE", "DORADO"],
      hard: ["AMARILLO", "TURQUESA", "PLATEADO", "VIOLETA", "GRANATE", "CELESTE", "DORADO", "BEIGE", "NARANJA", "MARRON"]
    }
  },
  transporte: {
    label: "Transporte",
    visual: ["B", "T", "A", "M"],
    words: {
      easy: ["BUS", "TREN", "TAXI", "BARCO", "AVION", "MOTO", "METRO", "AUTO", "BICI", "CAMION"],
      medium: ["AUTOBUS", "BICICLETA", "AVION", "BARCO", "METRO", "CAMION", "TREN", "TAXI", "COCHE", "TRANVIA"],
      hard: ["HELICOPTERO", "AMBULANCIA", "BICICLETA", "TRANVIA", "CAMIONETA", "SUBMARINO", "FERROCARRIL", "MOTOCICLETA", "AEROPUERTO", "ESTACION"]
    }
  },
  animales: {
    label: "Animales",
    visual: ["G", "P", "L", "R"],
    words: {
      easy: ["GATO", "PERRO", "VACA", "PATO", "LOBO", "RANA", "PEZ", "OSO", "LEON", "MONO"],
      medium: ["CABALLO", "CONEJO", "OVEJA", "JIRAFA", "TIGRE", "DELFIN", "MONO", "CERDO", "BURRO", "PANDA"],
      hard: ["MARIPOSA", "ELEFANTE", "COCODRILO", "RINOCERONTE", "MURCIELAGO", "TORTUGA", "PINGÜINO", "SERPIENTE", "CANGURO", "BALLENA"]
    }
  },
  comida: {
    label: "Comida",
    visual: ["P", "A", "Q", "S"],
    words: {
      easy: ["PAN", "QUESO", "SOPA", "ARROZ", "HUEVO", "FRUTA", "PASTA", "POLLO", "CARNE", "YOGUR"],
      medium: ["ENSALADA", "PESCADO", "POLLO", "GALLETAS", "MANZANA", "YOGUR", "CARNE", "PASTA", "TORTILLA", "ACEITUNA"],
      hard: ["HAMBURGUESA", "CHOCOLATE", "TORTILLA", "ACEITUNA", "MERMELADA", "SANDWICH", "ALBONDIGA", "MACARRONES", "DESAYUNO", "CENA"]
    }
  },
  frutas: {
    label: "Frutas",
    visual: ["M", "P", "U", "L"],
    words: {
      easy: ["MANZANA", "PERA", "UVA", "MELON", "LIMON", "KIWI", "PLATANO", "NARANJA", "FRESA", "MANGO"],
      medium: ["MANZANA", "NARANJA", "PLATANO", "CEREZA", "SANDIA", "MELOCOTON", "PIÑA", "PAPAYA", "COCO", "CIRUELA"],
      hard: ["MELOCOTON", "ALBARICOQUE", "GRANADA", "MANDARINA", "FRAMBUESA", "ARANDANO", "AGUACATE", "MARACUYA", "CHIRIMOYA", "POMELO"]
    }
  },
  cuerpo: {
    label: "Partes del cuerpo",
    visual: ["M", "O", "P", "N"],
    words: {
      easy: ["MANO", "PIE", "OJO", "BOCA", "NARIZ", "CARA", "DEDO", "BRAZO", "PIERNA", "CABEZA"],
      medium: ["CABEZA", "HOMBRO", "RODILLA", "ESPALDA", "CUELLO", "PECHO", "CODO", "MUÑECA", "TOBILLO", "OREJA"],
      hard: ["ESTOMAGO", "GARGANTA", "CORAZON", "CEREBRO", "PULMON", "LENGUA", "MEJILLA", "PESTAÑA", "CINTURA", "ESPALDA"]
    }
  },
  caracter: {
    label: "Carácter",
    visual: ["A", "S", "T", "C"],
    words: {
      easy: ["BUENO", "MALO", "ALEGRE", "SERIO", "TIMIDO", "AMABLE", "LISTO", "CALMO", "DURO", "DULCE"],
      medium: ["SIMPATICO", "TIMIDO", "AMABLE", "SERIO", "ALEGRE", "ACTIVO", "TRANQUILO", "VALIENTE", "ORDENADO", "CURIOSO"],
      hard: ["RESPONSABLE", "GENEROSO", "PACIENTE", "TRABAJADOR", "CREATIVO", "SOCIABLE", "OPTIMISTA", "PUNTUAL", "SINCERO", "NERVIOSO"]
    }
  },
  animo: {
    label: "Estado de ánimo",
    visual: ["F", "T", "C", "N"],
    words: {
      easy: ["FELIZ", "TRISTE", "CANSADO", "BIEN", "MAL", "CALMO", "ENOJADO", "CONTENTO", "SOLO", "NERVIOSO"],
      medium: ["CONTENTO", "TRISTE", "CANSADO", "ENFERMO", "NERVIOSO", "ABURRIDO", "TRANQUILO", "ENFADADO", "ASUSTADO", "ALEGRE"],
      hard: ["EMOCIONADO", "PREOCUPADO", "SORPRENDIDO", "ABURRIDO", "AGOTADO", "ORGULLOSO", "CONFUNDIDO", "RELAJADO", "ENFADADO", "ASUSTADO"]
    }
  },
  ciudad: {
    label: "Ciudad",
    visual: ["C", "P", "M", "T"],
    words: {
      easy: ["CALLE", "PLAZA", "CASA", "BANCO", "PARQUE", "TIENDA", "CINE", "METRO", "PUENTE", "HOTEL"],
      medium: ["MERCADO", "MUSEO", "IGLESIA", "TEATRO", "FARMACIA", "HOSPITAL", "COLEGIO", "ESTACION", "OFICINA", "BARRIO"],
      hard: ["AYUNTAMIENTO", "RESTAURANTE", "BIBLIOTECA", "SUPERMERCADO", "AEROPUERTO", "COMISARIA", "APARTAMENTO", "PANADERIA", "CAFETERIA", "GASOLINERA"]
    }
  },
  viaje: {
    label: "Viaje",
    visual: ["M", "P", "H", "R"],
    words: {
      easy: ["MAPA", "HOTEL", "PLAYA", "TREN", "AVION", "TAXI", "BOLSA", "RUTA", "VISA", "MALETA"],
      medium: ["MALETA", "PASAPORTE", "BILLETE", "RESERVA", "HOTEL", "VUELO", "PLAYA", "MUSEO", "TAXI", "EQUIPAJE"],
      hard: ["AEROPUERTO", "PASAPORTE", "EXCURSION", "RECEPCION", "ITINERARIO", "TURISTA", "ALOJAMIENTO", "FRONTERA", "RESERVACION", "EQUIPAJE"]
    }
  },
  hospital: {
    label: "Hospital",
    visual: ["M", "D", "C", "S"],
    words: {
      easy: ["MEDICO", "DOLOR", "CAMA", "SALA", "TOS", "FIEBRE", "CURA", "PASTILLA", "BRAZO", "PIE"],
      medium: ["MEDICO", "ENFERMERA", "PACIENTE", "HOSPITAL", "FARMACIA", "PASTILLA", "FIEBRE", "DOLOR", "RECETA", "VACUNA"],
      hard: ["AMBULANCIA", "EMERGENCIA", "ENFERMERA", "OPERACION", "MEDICINA", "CONSULTA", "PACIENTE", "SINTOMA", "ANALISIS", "RADIOGRAFIA"]
    }
  },
  naturaleza: {
    label: "Naturaleza",
    visual: ["S", "R", "M", "F"],
    words: {
      easy: ["SOL", "RIO", "MAR", "FLOR", "ARBOL", "LAGO", "LUNA", "ROCA", "NUBE", "HOJA"],
      medium: ["MONTAÑA", "BOSQUE", "PLAYA", "DESIERTO", "CAMPO", "JARDIN", "ANIMAL", "PLANTA", "ISLA", "VALLE"],
      hard: ["NATURALEZA", "MONTAÑA", "CASCADA", "DESIERTO", "OCEANO", "VOLCAN", "BOSQUE", "PRADERA", "ARCOIRIS", "PAISAJE"]
    }
  },
  tiempo: {
    label: "Tiempo",
    visual: ["S", "L", "N", "V"],
    words: {
      easy: ["SOL", "LLUVIA", "NUBE", "VIENTO", "FRIO", "CALOR", "NIEVE", "CLIMA", "CIELO", "NIEBLA"],
      medium: ["SOLEADO", "NUBLADO", "LLUVIOSO", "VENTOSO", "FRIO", "CALOR", "TORMENTA", "NIEVE", "GRANIZO", "NIEBLA"],
      hard: ["TEMPERATURA", "PRONOSTICO", "TORMENTA", "HUMEDAD", "PARAGUAS", "INVIERNO", "VERANO", "OTOÑO", "PRIMAVERA", "RELAMPAGO"]
    }
  },
  ocio: {
    label: "Ocio",
    visual: ["C", "M", "B", "J"],
    words: {
      easy: ["CINE", "MUSICA", "BAILE", "JUEGO", "LIBRO", "FOTO", "PASEO", "DEPORTE", "TEATRO", "FIESTA"],
      medium: ["MUSICA", "LECTURA", "DEPORTE", "PASEO", "TEATRO", "CINE", "FIESTA", "PINTURA", "COCINA", "JARDIN"],
      hard: ["CONCIERTO", "EXPOSICION", "BIBLIOTECA", "FOTOGRAFIA", "VIDEOJUEGO", "CAMINATA", "NATACION", "PINTURA", "LECTURA", "DEPORTES"]
    }
  }
};

const WORD_INFO = {
  ACEITUNA: { display: "ACEITUNA", uk: "оливка", emoji: "🫒" },
  ACTIVO: { display: "ACTIVO", uk: "активний", emoji: "" },
  ABURRIDO: { display: "ABURRIDO", uk: "нудьгуючий", emoji: "🥱" },
  AEROPUERTO: { display: "AEROPUERTO", uk: "аеропорт", emoji: "✈️" },
  AGOTADO: { display: "AGOTADO", uk: "виснажений", emoji: "" },
  AGUACATE: { display: "AGUACATE", uk: "авокадо", emoji: "🥑" },
  AJO: { display: "AJO", uk: "часник", emoji: "🧄" },
  ALBARICOQUE: { display: "ALBARICOQUE", uk: "абрикос", emoji: "🍑" },
  ALBONDIGA: { display: "ALBÓNDIGA", uk: "тефтеля", emoji: "🍽️" },
  ALCACHOFA: { display: "ALCACHOFA", uk: "артишок", emoji: "" },
  ALEGRE: { display: "ALEGRE", uk: "веселий", emoji: "😊" },
  ALOJAMIENTO: { display: "ALOJAMIENTO", uk: "житло", emoji: "🏨" },
  AMABLE: { display: "AMABLE", uk: "люб'язний", emoji: "" },
  AMARILLO: { display: "AMARILLO", uk: "жовтий", emoji: "🟡" },
  AMBULANCIA: { display: "AMBULANCIA", uk: "швидка допомога", emoji: "🚑" },
  ANALISIS: { display: "ANÁLISIS", uk: "аналіз", emoji: "🧪" },
  ANIMAL: { display: "ANIMAL", uk: "тварина", emoji: "" },
  APARTAMENTO: { display: "APARTAMENTO", uk: "квартира", emoji: "🏢" },
  APIO: { display: "APIO", uk: "селера", emoji: "" },
  ARANDANO: { display: "ARÁNDANO", uk: "чорниця", emoji: "🫐" },
  ARBOL: { display: "ÁRBOL", uk: "дерево", emoji: "🌳" },
  ARCOIRIS: { display: "ARCOÍRIS", uk: "веселка", emoji: "🌈" },
  ARROZ: { display: "ARROZ", uk: "рис", emoji: "🍚" },
  ASUSTADO: { display: "ASUSTADO", uk: "наляканий", emoji: "😟" },
  AUTO: { display: "AUTO", uk: "авто", emoji: "🚗" },
  AUTOBUS: { display: "AUTOBÚS", uk: "автобус", emoji: "🚌" },
  AVION: { display: "AVIÓN", uk: "літак", emoji: "✈️" },
  AYUNTAMIENTO: { display: "AYUNTAMIENTO", uk: "мерія", emoji: "🏛️" },
  AZUL: { display: "AZUL", uk: "синій", emoji: "🔵" },
  BAILE: { display: "BAILE", uk: "танець", emoji: "💃" },
  BALLENA: { display: "BALLENA", uk: "кит", emoji: "🐋" },
  BANCO: { display: "BANCO", uk: "банк", emoji: "🏦" },
  BARCO: { display: "BARCO", uk: "човен", emoji: "🚢" },
  BARRIO: { display: "BARRIO", uk: "район", emoji: "🏘️" },
  BEIGE: { display: "BEIGE", uk: "бежевий", emoji: "🟫" },
  BERENJENA: { display: "BERENJENA", uk: "баклажан", emoji: "🍆" },
  BIBLIOTECA: { display: "BIBLIOTECA", uk: "бібліотека", emoji: "📚" },
  BICI: { display: "BICI", uk: "велосипед", emoji: "🚲" },
  BICICLETA: { display: "BICICLETA", uk: "велосипед", emoji: "🚲" },
  BIEN: { display: "BIEN", uk: "добре", emoji: "🙂" },
  BILLETE: { display: "BILLETE", uk: "квиток", emoji: "🎫" },
  BLANCO: { display: "BLANCO", uk: "білий", emoji: "⚪" },
  BOCA: { display: "BOCA", uk: "рот", emoji: "👄" },
  BOLSA: { display: "BOLSA", uk: "сумка", emoji: "👜" },
  BOSQUE: { display: "BOSQUE", uk: "ліс", emoji: "🌲" },
  BRAZO: { display: "BRAZO", uk: "рука", emoji: "💪" },
  BROCOLI: { display: "BRÓCOLI", uk: "броколі", emoji: "🥦" },
  BUENO: { display: "BUENO", uk: "добрий", emoji: "" },
  BURRO: { display: "BURRO", uk: "віслюк", emoji: "" },
  BUS: { display: "BUS", uk: "автобус", emoji: "🚌" },
  CABALLO: { display: "CABALLO", uk: "кінь", emoji: "🐴" },
  CABEZA: { display: "CABEZA", uk: "голова", emoji: "🙂" },
  CALABACIN: { display: "CALABACÍN", uk: "кабачок", emoji: "" },
  CALABAZA: { display: "CALABAZA", uk: "гарбуз", emoji: "🎃" },
  CALLE: { display: "CALLE", uk: "вулиця", emoji: "🛣️" },
  CALMO: { display: "CALMO", uk: "спокійний", emoji: "" },
  CALOR: { display: "CALOR", uk: "спека", emoji: "🔥" },
  CAMA: { display: "CAMA", uk: "ліжко", emoji: "🛏️" },
  CAMINATA: { display: "CAMINATA", uk: "прогулянка", emoji: "🚶" },
  CAMION: { display: "CAMIÓN", uk: "вантажівка", emoji: "🚚" },
  CAMIONETA: { display: "CAMIONETA", uk: "фургон", emoji: "🚐" },
  CAMPO: { display: "CAMPO", uk: "поле", emoji: "🌾" },
  CANGURO: { display: "CANGURO", uk: "кенгуру", emoji: "🦘" },
  CANSADO: { display: "CANSADO", uk: "втомлений", emoji: "😴" },
  CARA: { display: "CARA", uk: "обличчя", emoji: "🙂" },
  CARNE: { display: "CARNE", uk: "м'ясо", emoji: "🥩" },
  CASA: { display: "CASA", uk: "дім", emoji: "🏠" },
  CAFETERIA: { display: "CAFETERÍA", uk: "кав'ярня", emoji: "☕" },
  CASCADA: { display: "CASCADA", uk: "водоспад", emoji: "" },
  CEBOLLA: { display: "CEBOLLA", uk: "цибуля", emoji: "🧅" },
  CELESTE: { display: "CELESTE", uk: "блакитний", emoji: "🔵" },
  CENA: { display: "CENA", uk: "вечеря", emoji: "🍽️" },
  CEREBRO: { display: "CEREBRO", uk: "мозок", emoji: "🧠" },
  CEREZA: { display: "CEREZA", uk: "вишня", emoji: "🍒" },
  CERDO: { display: "CERDO", uk: "свиня", emoji: "🐷" },
  CHAMPIÑON: { display: "CHAMPIÑÓN", uk: "печериця", emoji: "🍄" },
  CHAMPINON: { display: "CHAMPIÑÓN", uk: "печериця", emoji: "🍄" },
  CHIRIMOYA: { display: "CHIRIMOYA", uk: "черімоя", emoji: "" },
  CHOCOLATE: { display: "CHOCOLATE", uk: "шоколад", emoji: "🍫" },
  CIELO: { display: "CIELO", uk: "небо", emoji: "☁️" },
  CINE: { display: "CINE", uk: "кіно", emoji: "🎬" },
  CINTURA: { display: "CINTURA", uk: "талія", emoji: "" },
  CIRUELA: { display: "CIRUELA", uk: "слива", emoji: "" },
  CLIMA: { display: "CLIMA", uk: "клімат", emoji: "🌤️" },
  COCO: { display: "COCO", uk: "кокос", emoji: "🥥" },
  COCHE: { display: "COCHE", uk: "автомобіль", emoji: "🚗" },
  COCINA: { display: "COCINA", uk: "кухня", emoji: "🍳" },
  COCODRILO: { display: "COCODRILO", uk: "крокодил", emoji: "🐊" },
  CODO: { display: "CODO", uk: "лікоть", emoji: "" },
  COLEGIO: { display: "COLEGIO", uk: "школа", emoji: "🏫" },
  COL: { display: "COL", uk: "капуста", emoji: "🥬" },
  COLIFLOR: { display: "COLIFLOR", uk: "цвітна капуста", emoji: "" },
  COMISARIA: { display: "COMISARÍA", uk: "поліція", emoji: "🚓" },
  COMPAÑERO: { display: "COMPAÑERO", uk: "однокласник", emoji: "" },
  CONCIERTO: { display: "CONCIERTO", uk: "концерт", emoji: "🎵" },
  CONFUNDIDO: { display: "CONFUNDIDO", uk: "розгублений", emoji: "😕" },
  CONEJO: { display: "CONEJO", uk: "кролик", emoji: "🐰" },
  CONSULTA: { display: "CONSULTA", uk: "консультація", emoji: "🩺" },
  CONTENTO: { display: "CONTENTO", uk: "задоволений", emoji: "😊" },
  CORAZON: { display: "CORAZÓN", uk: "серце", emoji: "❤️" },
  CREATIVO: { display: "CREATIVO", uk: "креативний", emoji: "" },
  CUELLO: { display: "CUELLO", uk: "шия", emoji: "" },
  CURA: { display: "CURA", uk: "лікування", emoji: "🩹" },
  CURIOSO: { display: "CURIOSO", uk: "допитливий", emoji: "" },
  DEDO: { display: "DEDO", uk: "палець", emoji: "☝️" },
  DELFIN: { display: "DELFÍN", uk: "дельфін", emoji: "🐬" },
  DEPORTE: { display: "DEPORTE", uk: "спорт", emoji: "⚽" },
  DEPORTES: { display: "DEPORTES", uk: "спорт", emoji: "⚽" },
  DESAYUNO: { display: "DESAYUNO", uk: "сніданок", emoji: "🥐" },
  DESIERTO: { display: "DESIERTO", uk: "пустеля", emoji: "🏜️" },
  DOLOR: { display: "DOLOR", uk: "біль", emoji: "" },
  DORADO: { display: "DORADO", uk: "золотий", emoji: "🟡" },
  DURO: { display: "DURO", uk: "твердий", emoji: "" },
  DULCE: { display: "DULCE", uk: "солодкий", emoji: "🍬" },
  ELEFANTE: { display: "ELEFANTE", uk: "слон", emoji: "🐘" },
  EMERGENCIA: { display: "EMERGENCIA", uk: "невідкладна допомога", emoji: "🚨" },
  EMOCIONADO: { display: "EMOCIONADO", uk: "схвильований", emoji: "🤩" },
  ENFADADO: { display: "ENFADADO", uk: "злий", emoji: "😠" },
  ENFERMERA: { display: "ENFERMERA", uk: "медсестра", emoji: "👩‍⚕️" },
  ENFERMO: { display: "ENFERMO", uk: "хворий", emoji: "🤒" },
  ENOJADO: { display: "ENOJADO", uk: "сердитий", emoji: "😠" },
  ENSALADA: { display: "ENSALADA", uk: "салат", emoji: "🥗" },
  EQUIPAJE: { display: "EQUIPAJE", uk: "багаж", emoji: "🧳" },
  ESPALDA: { display: "ESPALDA", uk: "спина", emoji: "" },
  ESPARRAGO: { display: "ESPÁRRAGO", uk: "спаржа", emoji: "" },
  ESPINACA: { display: "ESPINACA", uk: "шпинат", emoji: "🥬" },
  ESTACION: { display: "ESTACIÓN", uk: "станція", emoji: "🚉" },
  ESTOMAGO: { display: "ESTÓMAGO", uk: "живіт", emoji: "" },
  EXCURSION: { display: "EXCURSIÓN", uk: "екскурсія", emoji: "🗺️" },
  EXPOSICION: { display: "EXPOSICIÓN", uk: "виставка", emoji: "🖼️" },
  FARMACIA: { display: "FARMACIA", uk: "аптека", emoji: "💊" },
  FELIZ: { display: "FELIZ", uk: "щасливий", emoji: "😊" },
  FERROCARRIL: { display: "FERROCARRIL", uk: "залізниця", emoji: "🚆" },
  FIEBRE: { display: "FIEBRE", uk: "температура", emoji: "🤒" },
  FIESTA: { display: "FIESTA", uk: "вечірка", emoji: "🎉" },
  FLOR: { display: "FLOR", uk: "квітка", emoji: "🌸" },
  FOTO: { display: "FOTO", uk: "фото", emoji: "📷" },
  FOTOGRAFIA: { display: "FOTOGRAFÍA", uk: "фотографія", emoji: "📷" },
  FRAMBUESA: { display: "FRAMBUESA", uk: "малина", emoji: "" },
  FRIO: { display: "FRÍO", uk: "холод", emoji: "❄️" },
  FRONTERA: { display: "FRONTERA", uk: "кордон", emoji: "🛂" },
  FRESA: { display: "FRESA", uk: "полуниця", emoji: "🍓" },
  FRUTA: { display: "FRUTA", uk: "фрукт", emoji: "🍎" },
  GALLETAS: { display: "GALLETAS", uk: "печиво", emoji: "🍪" },
  GARGANTA: { display: "GARGANTA", uk: "горло", emoji: "" },
  GASOLINERA: { display: "GASOLINERA", uk: "заправка", emoji: "⛽" },
  GATO: { display: "GATO", uk: "кіт", emoji: "🐱" },
  GENEROSO: { display: "GENEROSO", uk: "щедрий", emoji: "" },
  GRANADA: { display: "GRANADA", uk: "гранат", emoji: "" },
  GRANATE: { display: "GRANATE", uk: "бордовий", emoji: "🔴" },
  GRANIZO: { display: "GRANIZO", uk: "град", emoji: "🌨️" },
  GRIS: { display: "GRIS", uk: "сірий", emoji: "⚪" },
  GUISANTE: { display: "GUISANTE", uk: "горошок", emoji: "🫛" },
  HAMBURGUESA: { display: "HAMBURGUESA", uk: "бургер", emoji: "🍔" },
  HELICOPTERO: { display: "HELICÓPTERO", uk: "гелікоптер", emoji: "🚁" },
  HOJA: { display: "HOJA", uk: "листок", emoji: "🍃" },
  HOMBRO: { display: "HOMBRO", uk: "плече", emoji: "" },
  HOSPITAL: { display: "HOSPITAL", uk: "лікарня", emoji: "🏥" },
  HOTEL: { display: "HOTEL", uk: "готель", emoji: "🏨" },
  HUEVO: { display: "HUEVO", uk: "яйце", emoji: "🥚" },
  HUMEDAD: { display: "HUMEDAD", uk: "вологість", emoji: "💧" },
  IGLESIA: { display: "IGLESIA", uk: "церква", emoji: "⛪" },
  INVIERNO: { display: "INVIERNO", uk: "зима", emoji: "❄️" },
  ISLA: { display: "ISLA", uk: "острів", emoji: "🏝️" },
  ITINERARIO: { display: "ITINERARIO", uk: "маршрут", emoji: "🗺️" },
  JARDIN: { display: "JARDÍN", uk: "сад", emoji: "🌿" },
  JIRAFA: { display: "JIRAFA", uk: "жирафа", emoji: "🦒" },
  JUEGO: { display: "JUEGO", uk: "гра", emoji: "🎲" },
  KIWI: { display: "KIWI", uk: "ківі", emoji: "🥝" },
  LAGO: { display: "LAGO", uk: "озеро", emoji: "🏞️" },
  LECHE: { display: "LECHE", uk: "молоко", emoji: "🥛" },
  LECHUGA: { display: "LECHUGA", uk: "салат-латук", emoji: "🥬" },
  LECTURA: { display: "LECTURA", uk: "читання", emoji: "📖" },
  LENGUA: { display: "LENGUA", uk: "язик", emoji: "" },
  LEON: { display: "LEÓN", uk: "лев", emoji: "🦁" },
  LIBRO: { display: "LIBRO", uk: "книга", emoji: "📘" },
  LILA: { display: "LILA", uk: "ліловий", emoji: "🟣" },
  LIMON: { display: "LIMÓN", uk: "лимон", emoji: "🍋" },
  LISTO: { display: "LISTO", uk: "розумний", emoji: "" },
  LLUVIA: { display: "LLUVIA", uk: "дощ", emoji: "🌧️" },
  LLUVIOSO: { display: "LLUVIOSO", uk: "дощовий", emoji: "🌧️" },
  LOBO: { display: "LOBO", uk: "вовк", emoji: "" },
  LUNA: { display: "LUNA", uk: "місяць", emoji: "🌙" },
  MAIZ: { display: "MAÍZ", uk: "кукурудза", emoji: "🌽" },
  MAL: { display: "MAL", uk: "погано", emoji: "🙁" },
  MALO: { display: "MALO", uk: "поганий", emoji: "" },
  MALETA: { display: "MALETA", uk: "валіза", emoji: "🧳" },
  MACARRONES: { display: "MACARRONES", uk: "макарони", emoji: "🍝" },
  MANDARINA: { display: "MANDARINA", uk: "мандарин", emoji: "🍊" },
  MANGO: { display: "MANGO", uk: "манго", emoji: "🥭" },
  MANO: { display: "MANO", uk: "кисть руки", emoji: "✋" },
  MANZANA: { display: "MANZANA", uk: "яблуко", emoji: "🍎" },
  MAPA: { display: "MAPA", uk: "мапа", emoji: "🗺️" },
  MAR: { display: "MAR", uk: "море", emoji: "🌊" },
  MARACUYA: { display: "MARACUYÁ", uk: "маракуя", emoji: "" },
  MARIPOSA: { display: "MARIPOSA", uk: "метелик", emoji: "🦋" },
  MARRON: { display: "MARRÓN", uk: "коричневий", emoji: "🟤" },
  MATEMATICAS: { display: "MATEMÁTICAS", uk: "математика", emoji: "" },
  MEJILLA: { display: "MEJILLA", uk: "щока", emoji: "" },
  MELOCOTON: { display: "MELOCOTÓN", uk: "персик", emoji: "🍑" },
  MEDICINA: { display: "MEDICINA", uk: "ліки", emoji: "💊" },
  MEDICO: { display: "MÉDICO", uk: "лікар", emoji: "🧑‍⚕️" },
  MELON: { display: "MELÓN", uk: "диня", emoji: "🍈" },
  MERCADO: { display: "MERCADO", uk: "ринок", emoji: "🛒" },
  MERMELADA: { display: "MERMELADA", uk: "джем", emoji: "🍓" },
  METRO: { display: "METRO", uk: "метро", emoji: "🚇" },
  MONO: { display: "MONO", uk: "мавпа", emoji: "🐵" },
  MONTANA: { display: "MONTAÑA", uk: "гора", emoji: "⛰️" },
  MONTAÑA: { display: "MONTAÑA", uk: "гора", emoji: "⛰️" },
  MORADO: { display: "MORADO", uk: "фіолетовий", emoji: "🟣" },
  MOTO: { display: "MOTO", uk: "мотоцикл", emoji: "🏍️" },
  MOTOCICLETA: { display: "MOTOCICLETA", uk: "мотоцикл", emoji: "🏍️" },
  MUÑECA: { display: "MUÑECA", uk: "зап'ястя", emoji: "" },
  MUNECA: { display: "MUÑECA", uk: "зап'ястя", emoji: "" },
  MURCIELAGO: { display: "MURCIÉLAGO", uk: "кажан", emoji: "🦇" },
  MUSEO: { display: "MUSEO", uk: "музей", emoji: "🏛️" },
  MUSICA: { display: "MÚSICA", uk: "музика", emoji: "🎵" },
  NABO: { display: "NABO", uk: "ріпа", emoji: "" },
  NARANJA: { display: "NARANJA", uk: "помаранчевий / апельсин", emoji: "🟠" },
  NARIZ: { display: "NARIZ", uk: "ніс", emoji: "👃" },
  NATACION: { display: "NATACIÓN", uk: "плавання", emoji: "🏊" },
  NATURALEZA: { display: "NATURALEZA", uk: "природа", emoji: "🌿" },
  NEGRO: { display: "NEGRO", uk: "чорний", emoji: "⚫" },
  NERVIOSO: { display: "NERVIOSO", uk: "нервовий", emoji: "😬" },
  NIEBLA: { display: "NIEBLA", uk: "туман", emoji: "🌫️" },
  NIEVE: { display: "NIEVE", uk: "сніг", emoji: "❄️" },
  NUBLADO: { display: "NUBLADO", uk: "хмарно", emoji: "☁️" },
  NUBE: { display: "NUBE", uk: "хмара", emoji: "☁️" },
  OCEANO: { display: "OCÉANO", uk: "океан", emoji: "🌊" },
  OFICINA: { display: "OFICINA", uk: "офіс", emoji: "🏢" },
  OJO: { display: "OJO", uk: "око", emoji: "👁️" },
  OPERACION: { display: "OPERACIÓN", uk: "операція", emoji: "" },
  OPTIMISTA: { display: "OPTIMISTA", uk: "оптимістичний", emoji: "" },
  ORDENADO: { display: "ORDENADO", uk: "організований", emoji: "" },
  OREJA: { display: "OREJA", uk: "вухо", emoji: "👂" },
  ORGULLOSO: { display: "ORGULLOSO", uk: "гордий", emoji: "" },
  OSO: { display: "OSO", uk: "ведмідь", emoji: "🐻" },
  OTONO: { display: "OTOÑO", uk: "осінь", emoji: "🍂" },
  OTOÑO: { display: "OTOÑO", uk: "осінь", emoji: "🍂" },
  OVEJA: { display: "OVEJA", uk: "вівця", emoji: "🐑" },
  PACIENTE: { display: "PACIENTE", uk: "пацієнт / терплячий", emoji: "" },
  PAISAJE: { display: "PAISAJE", uk: "пейзаж", emoji: "🏞️" },
  PAN: { display: "PAN", uk: "хліб", emoji: "🍞" },
  PANADERIA: { display: "PANADERÍA", uk: "пекарня", emoji: "🥐" },
  PANDA: { display: "PANDA", uk: "панда", emoji: "🐼" },
  PAPAYA: { display: "PAPAYA", uk: "папая", emoji: "" },
  PAPA: { display: "PAPA", uk: "картопля", emoji: "🥔" },
  PARAGUAS: { display: "PARAGUAS", uk: "парасолька", emoji: "☂️" },
  PARQUE: { display: "PARQUE", uk: "парк", emoji: "🌳" },
  PASEO: { display: "PASEO", uk: "прогулянка", emoji: "🚶" },
  PASAPORTE: { display: "PASAPORTE", uk: "паспорт", emoji: "🛂" },
  PASTA: { display: "PASTA", uk: "паста", emoji: "🍝" },
  PASTILLA: { display: "PASTILLA", uk: "таблетка", emoji: "💊" },
  PATO: { display: "PATO", uk: "качка", emoji: "🦆" },
  PECHO: { display: "PECHO", uk: "груди", emoji: "" },
  PEPINO: { display: "PEPINO", uk: "огірок", emoji: "🥒" },
  PERA: { display: "PERA", uk: "груша", emoji: "🍐" },
  PERRO: { display: "PERRO", uk: "собака", emoji: "🐶" },
  PESCADO: { display: "PESCADO", uk: "риба", emoji: "🐟" },
  PESTAÑA: { display: "PESTAÑA", uk: "вія", emoji: "" },
  PESTANA: { display: "PESTAÑA", uk: "вія", emoji: "" },
  PEZ: { display: "PEZ", uk: "риба", emoji: "🐟" },
  PIE: { display: "PIE", uk: "ступня", emoji: "🦶" },
  PIERNA: { display: "PIERNA", uk: "нога", emoji: "🦵" },
  PIMIENTO: { display: "PIMIENTO", uk: "перець", emoji: "🫑" },
  PINGUINO: { display: "PINGÜINO", uk: "пінгвін", emoji: "🐧" },
  PINTURA: { display: "PINTURA", uk: "малювання", emoji: "🎨" },
  PINA: { display: "PIÑA", uk: "ананас", emoji: "🍍" },
  PIÑA: { display: "PIÑA", uk: "ананас", emoji: "🍍" },
  PIZZA: { display: "PIZZA", uk: "піца", emoji: "🍕" },
  PLANTA: { display: "PLANTA", uk: "рослина", emoji: "🌱" },
  PLATANO: { display: "PLÁTANO", uk: "банан", emoji: "🍌" },
  PLATEADO: { display: "PLATEADO", uk: "срібний", emoji: "⚪" },
  PLAYA: { display: "PLAYA", uk: "пляж", emoji: "🏖️" },
  PLAZA: { display: "PLAZA", uk: "площа", emoji: "" },
  POLLO: { display: "POLLO", uk: "курка", emoji: "🍗" },
  POMELO: { display: "POMELO", uk: "помело", emoji: "" },
  PREOCUPADO: { display: "PREOCUPADO", uk: "стурбований", emoji: "😟" },
  PRIMAVERA: { display: "PRIMAVERA", uk: "весна", emoji: "🌸" },
  PRONOSTICO: { display: "PRONÓSTICO", uk: "прогноз", emoji: "🌤️" },
  PRADERA: { display: "PRADERA", uk: "луг", emoji: "🌾" },
  PULMON: { display: "PULMÓN", uk: "легеня", emoji: "🫁" },
  PUENTE: { display: "PUENTE", uk: "міст", emoji: "🌉" },
  PUNTUAL: { display: "PUNTUAL", uk: "пунктуальний", emoji: "" },
  QUESO: { display: "QUESO", uk: "сир", emoji: "🧀" },
  RADIOGRAFIA: { display: "RADIOGRAFÍA", uk: "рентген", emoji: "🩻" },
  RANA: { display: "RANA", uk: "жаба", emoji: "🐸" },
  RECETA: { display: "RECETA", uk: "рецепт", emoji: "🧾" },
  RECEPCION: { display: "RECEPCIÓN", uk: "рецепція", emoji: "🏨" },
  RELAJADO: { display: "RELAJADO", uk: "розслаблений", emoji: "😌" },
  RELAMPAGO: { display: "RELÁMPAGO", uk: "блискавка", emoji: "🌩️" },
  REMOLACHA: { display: "REMOLACHA", uk: "буряк", emoji: "" },
  RESERVA: { display: "RESERVA", uk: "бронювання", emoji: "📅" },
  RESERVACION: { display: "RESERVACIÓN", uk: "бронювання", emoji: "📅" },
  RESPONSABLE: { display: "RESPONSABLE", uk: "відповідальний", emoji: "" },
  RESTAURANTE: { display: "RESTAURANTE", uk: "ресторан", emoji: "🍽️" },
  RINOCERONTE: { display: "RINOCERONTE", uk: "носоріг", emoji: "🦏" },
  RIO: { display: "RÍO", uk: "річка", emoji: "🏞️" },
  ROCA: { display: "ROCA", uk: "камінь", emoji: "🪨" },
  RODILLA: { display: "RODILLA", uk: "коліно", emoji: "" },
  ROJO: { display: "ROJO", uk: "червоний", emoji: "🔴" },
  ROSA: { display: "ROSA", uk: "рожевий", emoji: "🌸" },
  RUTA: { display: "RUTA", uk: "маршрут", emoji: "🗺️" },
  SALA: { display: "SALA", uk: "зал", emoji: "" },
  SANDIA: { display: "SANDÍA", uk: "кавун", emoji: "🍉" },
  SANDWICH: { display: "SÁNDWICH", uk: "сендвіч", emoji: "🥪" },
  SERIO: { display: "SERIO", uk: "серйозний", emoji: "" },
  SERPIENTE: { display: "SERPIENTE", uk: "змія", emoji: "🐍" },
  SIMPATICO: { display: "SIMPÁTICO", uk: "приємний", emoji: "" },
  SINCERO: { display: "SINCERO", uk: "щирий", emoji: "" },
  SINTOMA: { display: "SÍNTOMA", uk: "симптом", emoji: "" },
  SOCIABLE: { display: "SOCIABLE", uk: "товариський", emoji: "" },
  SOLO: { display: "SOLO", uk: "самотній", emoji: "" },
  SOL: { display: "SOL", uk: "сонце", emoji: "☀️" },
  SOLEADO: { display: "SOLEADO", uk: "сонячний", emoji: "☀️" },
  SOPA: { display: "SOPA", uk: "суп", emoji: "🍲" },
  SORPRENDIDO: { display: "SORPRENDIDO", uk: "здивований", emoji: "😮" },
  SUBMARINO: { display: "SUBMARINO", uk: "підводний човен", emoji: "🚢" },
  SUPERMERCADO: { display: "SUPERMERCADO", uk: "супермаркет", emoji: "🛒" },
  TAXI: { display: "TAXI", uk: "таксі", emoji: "🚕" },
  TEATRO: { display: "TEATRO", uk: "театр", emoji: "🎭" },
  TEMPERATURA: { display: "TEMPERATURA", uk: "температура", emoji: "🌡️" },
  TIENDA: { display: "TIENDA", uk: "магазин", emoji: "🏬" },
  TIGRE: { display: "TIGRE", uk: "тигр", emoji: "🐯" },
  TIMIDO: { display: "TÍMIDO", uk: "сором'язливий", emoji: "" },
  TOBILLO: { display: "TOBILLO", uk: "щиколотка", emoji: "" },
  TOMATE: { display: "TOMATE", uk: "помідор", emoji: "🍅" },
  TORMENTA: { display: "TORMENTA", uk: "буря", emoji: "⛈️" },
  TORTILLA: { display: "TORTILLA", uk: "тортилья / омлет", emoji: "🍳" },
  TORTUGA: { display: "TORTUGA", uk: "черепаха", emoji: "🐢" },
  TOS: { display: "TOS", uk: "кашель", emoji: "" },
  TRABAJADOR: { display: "TRABAJADOR", uk: "працьовитий", emoji: "" },
  TRANQUILO: { display: "TRANQUILO", uk: "спокійний", emoji: "" },
  TRANVIA: { display: "TRANVÍA", uk: "трамвай", emoji: "🚋" },
  TREN: { display: "TREN", uk: "поїзд", emoji: "🚆" },
  TRISTE: { display: "TRISTE", uk: "сумний", emoji: "😢" },
  TURISTA: { display: "TURISTA", uk: "турист", emoji: "🎒" },
  TURQUESA: { display: "TURQUESA", uk: "бірюзовий", emoji: "🔵" },
  UVA: { display: "UVA", uk: "виноград", emoji: "🍇" },
  VACA: { display: "VACA", uk: "корова", emoji: "🐮" },
  VACUNA: { display: "VACUNA", uk: "вакцина", emoji: "💉" },
  VALIENTE: { display: "VALIENTE", uk: "сміливий", emoji: "" },
  VALLE: { display: "VALLE", uk: "долина", emoji: "🏞️" },
  VERANO: { display: "VERANO", uk: "літо", emoji: "☀️" },
  VERDE: { display: "VERDE", uk: "зелений", emoji: "🟢" },
  VIDEOJUEGO: { display: "VIDEOJUEGO", uk: "відеогра", emoji: "🎮" },
  VIENTO: { display: "VIENTO", uk: "вітер", emoji: "💨" },
  VENTOSO: { display: "VENTOSO", uk: "вітряно", emoji: "💨" },
  VIOLETA: { display: "VIOLETA", uk: "фіолетовий", emoji: "🟣" },
  VISA: { display: "VISA", uk: "віза", emoji: "🛂" },
  VOLCAN: { display: "VOLCÁN", uk: "вулкан", emoji: "🌋" },
  VUELO: { display: "VUELO", uk: "рейс", emoji: "✈️" },
  YOGUR: { display: "YOGUR", uk: "йогурт", emoji: "🥛" },
  ZANAHORIA: { display: "ZANAHORIA", uk: "морква", emoji: "🥕" }
};

const LEVELS = {
  easy: {
    label: "Nivel fácil · 6 palabras",
    size: 10,
    wordCount: 6,
    directions: [
      [0, 1],
      [1, 0]
    ]
  },
  medium: {
    label: "Nivel medio · 9 palabras",
    size: 12,
    wordCount: 9,
    directions: [
      [0, 1],
      [1, 0],
      [1, 1],
      [-1, 1]
    ]
  },
  hard: {
    label: "Nivel difícil · 12 palabras",
    size: 14,
    wordCount: 12,
    directions: [
      [0, 1],
      [1, 0],
      [1, 1],
      [-1, 1],
      [0, -1],
      [-1, 0],
      [-1, -1],
      [1, -1]
    ]
  }
};

const boardEl = document.querySelector("#board");
const topicEl = document.querySelector("#topic");
const topicLabelEl = document.querySelector("#topic-label");
const levelLabelEl = document.querySelector("#level-label");
const wordListEl = document.querySelector("#word-list");
const wordHintEl = document.querySelector("#word-hint");
const foundCountEl = document.querySelector("#found-count");
const totalCountEl = document.querySelector("#total-count");
const statusEl = document.querySelector("#status");
const segmentEls = Array.from(document.querySelectorAll(".segment"));
const newGameButton = document.querySelector("#new-game");
const revealButton = document.querySelector("#show-answer");
const printButton = document.querySelector("#print-game");
const visualTiles = Array.from(document.querySelectorAll(".tile"));

let state = {
  topic: "verduras",
  level: "easy",
  grid: [],
  placements: new Map(),
  found: new Set(),
  selectedCells: [],
  anchorCell: null,
  isDragging: false,
  revealed: false
};

function normalizeWord(word) {
  return word
    .replace(/ñ/g, "Ñ")
    .replace(/Ñ/g, "__ENYE__")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/__ENYE__/g, "Ñ")
    .toUpperCase();
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function createEmptyGrid(size) {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => ""));
}

function canPlace(grid, word, row, col, rowStep, colStep) {
  for (let index = 0; index < word.length; index += 1) {
    const nextRow = row + rowStep * index;
    const nextCol = col + colStep * index;

    if (!grid[nextRow] || grid[nextRow][nextCol] === undefined) {
      return false;
    }

    if (grid[nextRow][nextCol] && grid[nextRow][nextCol] !== word[index]) {
      return false;
    }
  }

  return true;
}

function placeWord(grid, word, directions) {
  const size = grid.length;
  const attempts = 800;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const [rowStep, colStep] = randomItem(directions);
    const row = Math.floor(Math.random() * size);
    const col = Math.floor(Math.random() * size);

    if (!canPlace(grid, word, row, col, rowStep, colStep)) {
      continue;
    }

    const cells = [];
    for (let index = 0; index < word.length; index += 1) {
      const nextRow = row + rowStep * index;
      const nextCol = col + colStep * index;
      grid[nextRow][nextCol] = word[index];
      cells.push(`${nextRow}-${nextCol}`);
    }

    return cells;
  }

  return null;
}

function fillGrid(grid) {
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid.length; col += 1) {
      if (!grid[row][col]) {
        grid[row][col] = randomItem(ALPHABET);
      }
    }
  }
}

function uniqueWords(words) {
  return Array.from(new Set(words.map(normalizeWord)));
}

function wordsForLevel(topic, level) {
  const topicWords = TOPICS[topic].words;

  if (level === "easy") {
    return shuffle(uniqueWords(topicWords.easy)).slice(0, LEVELS[level].wordCount);
  }

  if (level === "medium") {
    return shuffle(uniqueWords([...topicWords.medium, ...topicWords.easy])).slice(0, LEVELS[level].wordCount);
  }

  return shuffle(uniqueWords([...topicWords.hard, ...topicWords.medium, ...topicWords.easy])).slice(0, LEVELS[level].wordCount);
}

function generatePuzzle() {
  const levelConfig = LEVELS[state.level];
  const words = wordsForLevel(state.topic, state.level);
  let grid = createEmptyGrid(levelConfig.size);
  let placements = new Map();

  for (let generationAttempt = 0; generationAttempt < 30; generationAttempt += 1) {
    const nextGrid = createEmptyGrid(levelConfig.size);
    const nextPlacements = new Map();

    shuffle(words).forEach((word) => {
      const cells = placeWord(nextGrid, word, levelConfig.directions);
      if (cells) {
        nextPlacements.set(word, cells);
      }
    });

    if (nextPlacements.size > placements.size) {
      grid = nextGrid;
      placements = nextPlacements;
    }

    if (nextPlacements.size === words.length) {
      grid = nextGrid;
      placements = nextPlacements;
      break;
    }
  }

  fillGrid(grid);
  state.grid = grid;
  state.placements = placements;
  state.found = new Set();
  state.selectedCells = [];
  state.revealed = false;
}

function renderTopics() {
  topicEl.innerHTML = Object.entries(TOPICS)
    .map(([value, topic]) => `<option value="${value}">${topic.label}</option>`)
    .join("");
  topicEl.value = state.topic;
}

function renderBoard() {
  const size = state.grid.length;
  boardEl.style.setProperty("--size", size);
  boardEl.innerHTML = "";

  state.grid.forEach((row, rowIndex) => {
    row.forEach((letter, colIndex) => {
      const cell = document.createElement("button");
      cell.className = "cell";
      cell.type = "button";
      cell.textContent = letter;
      cell.dataset.row = rowIndex;
      cell.dataset.col = colIndex;
      cell.dataset.key = `${rowIndex}-${colIndex}`;
      cell.setAttribute("aria-label", `Letra ${letter}`);
      boardEl.append(cell);
    });
  });
}

function renderWords() {
  wordListEl.innerHTML = "";

  if (!state.found.size) {
    wordHintEl.hidden = false;
    return;
  }

  wordHintEl.hidden = true;
  Array.from(state.found)
    .sort((a, b) => a.localeCompare(b, "es"))
    .forEach((word) => {
      const info = WORD_INFO[word] || { display: word, uk: "переклад скоро буде", emoji: "" };
      const item = document.createElement("li");
      item.dataset.word = word;
      item.classList.add("is-found");

      const text = document.createElement("span");
      text.className = "word-list__text";

      const display = document.createElement("span");
      display.className = "word-list__word";
      display.textContent = info.display;

      const translation = document.createElement("span");
      translation.className = "word-list__translation";
      translation.textContent = info.uk;

      text.append(display, translation);
      item.append(text);

      if (info.emoji) {
        const emoji = document.createElement("span");
        emoji.className = "word-list__emoji";
        emoji.textContent = info.emoji;
        emoji.setAttribute("aria-hidden", "true");
        item.append(emoji);
      }

      wordListEl.append(item);
    });
}

function updateVisuals() {
  const topic = TOPICS[state.topic];
  const level = LEVELS[state.level];
  topicLabelEl.textContent = topic.label;
  levelLabelEl.textContent = level.label;
  totalCountEl.textContent = state.placements.size;
  foundCountEl.textContent = state.found.size;
  visualTiles.forEach((tile, index) => {
    tile.textContent = topic.visual[index] || "?";
  });
}

function clearSelection() {
  document.querySelectorAll(".cell.is-selected").forEach((cell) => cell.classList.remove("is-selected"));
  state.selectedCells = [];
}

function markCells(cellKeys, className) {
  cellKeys.forEach((key) => {
    const cell = boardEl.querySelector(`[data-key="${key}"]`);
    if (cell) {
      cell.classList.add(className);
    }
  });
}

function refreshFoundCells() {
  document.querySelectorAll(".cell.is-found").forEach((cell) => cell.classList.remove("is-found"));
  state.found.forEach((word) => markCells(state.placements.get(word), "is-found"));
}

function renderAll() {
  renderBoard();
  renderWords();
  updateVisuals();
  refreshFoundCells();
  revealButton.textContent = "Revelar";
  statusEl.textContent = "Arrastra sobre una palabra para marcarla.";
}

function newGame() {
  generatePuzzle();
  renderAll();
}

function getLineCells(start, end) {
  const rowDelta = end.row - start.row;
  const colDelta = end.col - start.col;
  const rowStep = Math.sign(rowDelta);
  const colStep = Math.sign(colDelta);
  const length = Math.max(Math.abs(rowDelta), Math.abs(colDelta)) + 1;

  if (!(rowDelta === 0 || colDelta === 0 || Math.abs(rowDelta) === Math.abs(colDelta))) {
    return [];
  }

  return Array.from({ length }, (_, index) => {
    const row = start.row + rowStep * index;
    const col = start.col + colStep * index;
    return `${row}-${col}`;
  });
}

function selectLine(toCell) {
  const first = state.anchorCell;
  if (!first) {
    return;
  }

  clearSelection();
  const cells = getLineCells(first, toCell);
  state.selectedCells = cells;
  markCells(cells, "is-selected");
}

function selectedWord() {
  return state.selectedCells
    .map((key) => {
      const [row, col] = key.split("-").map(Number);
      return state.grid[row][col];
    })
    .join("");
}

function finishSelection() {
  if (!state.selectedCells.length) {
    return;
  }

  const word = selectedWord();
  const reversedWord = [...word].reverse().join("");
  const matchedWord = state.placements.has(word) ? word : reversedWord;

  if (state.placements.has(matchedWord) && !state.found.has(matchedWord)) {
    state.found.add(matchedWord);
    markCells(state.placements.get(matchedWord), "is-found");
    renderWords();
    foundCountEl.textContent = state.found.size;
    statusEl.textContent =
      state.found.size === state.placements.size ? "¡Excelente! Encontraste todas las palabras." : `Encontraste ${matchedWord}.`;
  } else {
    statusEl.textContent = "Sigue buscando.";
  }

  state.anchorCell = null;
  clearSelection();
}

function cellFromEvent(event) {
  const target = document.elementFromPoint(event.clientX, event.clientY);
  return target?.closest?.(".cell");
}

function startDrag(cell) {
  state.isDragging = true;
  clearSelection();
  const row = Number(cell.dataset.row);
  const col = Number(cell.dataset.col);
  state.anchorCell = { row, col };
  state.selectedCells = [`${row}-${col}`];
  cell.classList.add("is-selected");
}

function continueDrag(cell) {
  if (!state.isDragging || !cell) {
    return;
  }

  selectLine({
    row: Number(cell.dataset.row),
    col: Number(cell.dataset.col)
  });
}

function revealAnswers() {
  state.revealed = !state.revealed;
  document.querySelectorAll(".cell.is-revealed").forEach((cell) => cell.classList.remove("is-revealed"));

  if (state.revealed) {
    state.placements.forEach((cells) => markCells(cells, "is-revealed"));
    revealButton.textContent = "Ocultar";
    statusEl.textContent = "Las respuestas están visibles.";
  } else {
    revealButton.textContent = "Revelar";
    statusEl.textContent = "Arrastra sobre una palabra para marcarla.";
  }

  refreshFoundCells();
}

topicEl.addEventListener("change", () => {
  state.topic = topicEl.value;
  newGame();
});

segmentEls.forEach((segment) => {
  segment.addEventListener("click", () => {
    state.level = segment.dataset.level;
    segmentEls.forEach((item) => {
      const isActive = item === segment;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    newGame();
  });
});

newGameButton.addEventListener("click", newGame);
revealButton.addEventListener("click", revealAnswers);
printButton.addEventListener("click", () => window.print());

boardEl.addEventListener("pointerdown", (event) => {
  const cell = event.target.closest(".cell");
  if (!cell) {
    return;
  }
  boardEl.setPointerCapture(event.pointerId);
  startDrag(cell);
});

boardEl.addEventListener("pointermove", (event) => {
  continueDrag(cellFromEvent(event));
});

boardEl.addEventListener("pointerup", (event) => {
  if (state.isDragging) {
    boardEl.releasePointerCapture(event.pointerId);
    state.isDragging = false;
    finishSelection();
  }
});

boardEl.addEventListener("pointercancel", () => {
  state.isDragging = false;
  state.anchorCell = null;
  clearSelection();
});

renderTopics();
newGame();
