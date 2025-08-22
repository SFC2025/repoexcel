export const sections = [
  {
    //Datos personales
    id: "datosPersonales",
    title: "Datos Personales",
    fields: [
      {
        name: "fecha_diligenciamiento",
        label: "Fecha de Diligenciamiento",
        type: "date",
        required: true,
      },
      {
        name: "nombres",
        label: "Nombres",
        type: "text",
        required: true,
        maxLength: 120,
      },
      {
        name: "primer_apellido",
        label: "Primer Apellido",
        type: "text",
        required: true,
      },
      { name: "segundo_apellido", label: "Segundo Apellido", type: "text" },
      {
        name: "tipo_id",
        label: "Tipo de Identificación",
        type: "select",
        required: true,
        options: [
          "Cédula de Ciudadanía",
          "Tarjeta de Identidad",
          "Cédula de Extranjería",
        ],
      },
      {
        name: "numero_id",
        label: "Número de Identificación",
        type: "text",
        required: true,
      },
      {
        name: "fecha_nacimiento",
        label: "Fecha de Nacimiento",
        type: "date",
        required: true,
      },
      {
        name: "departamento_residencia",
        label: "Departamento de Residencia",
        type: "text",
        required: true,
      },
      {
        name: "municipio_residencia",
        label: "Municipio de Residencia",
        type: "text",
        required: true,
      },
      {
        name: "vereda_residencia",
        label: "Vereda de Residencia",
        type: "text",
      },
      {
        name: "direccion_residencia",
        label: "Dirección de Residencia",
        type: "text",
      },
      { name: "email", label: "Correo electrónico", type: "email" },
      { name: "celular", label: "Celular", type: "text" },
      {
        name: "genero",
        label: "Género",
        type: "radio",
        options: ["Femenino", "Masculino", "No menciona"],
      },
      {
        name: "nivel_educativo",
        label: "Nivel Educativo",
        type: "select",
        options: [
          "Ninguna",
          "Básica Primaria",
          "Básica Secundaria",
          "Pregrado",
          "Posgrado",
          "Maestría",
        ],
      },
      {
        name: "regimen_ss",
        label: "Régimen de Seguridad Social",
        type: "radio",
        options: [
          "Contributivo (EPS)",
          "Subsidiado (SISBEN)",
          "Ninguno",
          "No sabe/No informa",
        ],
      },
      {
        name: "cotiza_pension",
        label: "¿Cotiza pensión?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "hombres_hogar",
        label: "¿Cuántos hombres componen su hogar?",
        type: "number",
        min: 0,
      },
      {
        name: "mujeres_hogar",
        label: "¿Cuántas mujeres componen su hogar?",
        type: "number",
        min: 0,
      },
      {
        name: "grupo_poblacional",
        label: "Grupo con el que se identifica",
        type: "select",
        options: [
          "Indígena",
          "Gitano(a) ROM",
          "Raizal",
          "Afrodescendiente",
          "Palenquero(a) de San Basilio",
          "Ninguno",
          "No sabe/No informa",
        ],
      },
      {
        name: "autorizo_datos",
        label: "Autorizo tratamiento de datos",
        type: "radio",
        options: ["Acepto", "No Acepto"],
        required: true,
      },
    ],
  },

  {
    //Datos generales
    id: "datosGenerales",
    title: "Datos Generales",
    fields: [
      {
        name: "cuenta_bancaria",
        label: "¿Tiene cuenta bancaria?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "rut_actualizado",
        label: "¿Cuenta con RUT actualizado?",
        type: "radio",
        options: ["Sí", "No"],
      },

      // Documentación del producto
      {
        name: "emite_factura",
        label: "¿Emite factura?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "emite_doc_equivalente",
        label: "¿Emite documento equivalente a la factura?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "doc_equivalente_cual",
        label: "¿Cuál documento equivalente?",
        type: "text",
      },
    ],
  },

  // Datos Fenalce
  {
    id: "fenalce",
    title: "Fenalce",
    fields: [
      {
        name: "afiliado_fenalce",
        label: "¿Es usted afiliado a Fenalce?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "carnet_fenalce",
        label: "¿Cuenta con carnet de Afiliado a Fenalce?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "canales_fenalce",
        label: "¿Con cuáles canales de atención de Fenalce interactúa?",
        type: "checkbox-group",
        options: [
          "Página Web",
          "Facebook",
          "Instagram",
          "Teléfono",
          "WhatsApp",
          "Ninguna de las anteriores",
        ],
      },
      {
        name: "recibe_asesorias_fenalce",
        label: "¿Recibe asesorías de Fenalce?",
        type: "radio",
        options: ["Sí", "No"],
      },

      // el PDF también pregunta por afiliación a organización productiva aquí:
      {
        name: "afiliado_organizacion_prod",
        label: "¿Es usted afiliado a alguna organización productiva?",
        type: "radio",
        options: ["Sí", "No"],
      },

      {
        name: "paga_parafiscal_fenalce",
        label: "¿Paga usted la cuota parafiscal a Fenalce?",
        type: "radio",
        options: ["Sí", "No"],
      },
    ],
  },
  // Participación de la organización

  {
    id: "organizacion_participacion",
    title: "Participación en la Organización",
    fields: [
      {
        name: "organizacion_nombre",
        label: "Nombre completo de la organización",
        type: "text",
        fullWidth: true,
      },
      {
        name: "organizacion_sigla",
        label: "Sigla de la organización",
        type: "text",
      },
      {
        name: "tipo_organizacion",
        label: "¿A cuál tipo de organización pertenece?",
        type: "select",
        options: [
          "Junta de Acción Comunal",
          "Cooperativa Comercial de Productores",
          "Organización de Conservación del Medio Ambiente",
          "Organización o Asociación Campesina o Agropecuaria",
          "Gremio",
          "Ninguno",
          "No Sabe/No informa",
        ],
      },
      {
        name: "rol_en_organizacion",
        label: "Usted participa en calidad de",
        type: "select",
        options: ["Afiliado", "Representante Legal", "Productor Afiliado"],
      },

      {
        name: "tiempo_integrante_meses",
        label: "Hace cuánto es integrante (meses)",
        type: "number",
        min: 0,
      },
      {
        name: "paga_cuota_afiliacion",
        label: "¿Paga cuota de afiliación a su organización?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "asiste_reuniones",
        label: "¿Asiste regularmente a las reuniones?",
        type: "radio",
        options: ["Sí", "No"],
      },

      {
        name: "beneficios_asociado",
        label: "¿Qué beneficios ha recibido al estar asociado?",
        type: "checkbox-group",
        options: [
          "Acceso a programas estatales",
          "Crédito",
          "Maquinaria",
          "Infraestructura de acopio o almacenamiento",
          "Comercialización colectiva",
          "Otro",
        ],
      },
      {
        name: "limitaciones_trabajo_colectivo",
        label: "¿Qué limitaciones ha encontrado en el trabajo colectivo?",
        type: "textarea",
        rows: 3,
        fullWidth: true,
      },
    ],
  },

  //Finca servicios
  {
    id: "fincaServicios",
    title: "Servicios en la Finca",
    fields: [
      {
        name: "servicios_finca",
        label: "La finca cuenta con",
        type: "checkbox-group",
        options: [
          "Acueducto",
          "Agua Potable",
          "Batería Sanitaria",
          "Energía Eléctrica",
          "Gas Natural",
          "Gas Pipeta",
          "Paneles Solares",
          "Pozo séptico",
          "Recolección de Basuras",
          "Alcantarillado",
          "Ninguno",
        ],
      },
      {
        name: "area_total_finca",
        label: "Área total de la finca (ha)",
        type: "number",
        min: 0,
        step: "0.01",
      },
      {
        name: "coordenadas",
        label: "Coordenadas de la finca",
        type: "text",
        placeholder: "Lat,Lng",
      },
      {
        name: "sistema_produccion",
        label: "Sistema de producción del cultivo",
        type: "radio",
        options: ["Tradicional", "Tecnificado"],
      },
      {
        name: "inscrita_distrito_riego",
        label: "¿Inscrita a distrito de riego?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "nombre_distrito",
        label: "Nombre del distrito de riego",
        type: "text",
      },
      {
        name: "finca_con_vivienda",
        label: "¿La finca cuenta con vivienda?",
        type: "radio",
        options: ["Sí", "No"],
      },
    ],
  },

  {
    id: "unidadProductiva",
    title: "Información de la Unidad Productiva",
    fields: [
      { name: "nombre_finca", label: "Nombre de la Finca", type: "text" },
      {
        name: "dueno_finca",
        label: "Nombre del dueño (si aplica)",
        type: "text",
      },
      {
        name: "informante",
        label: "Persona que suministra la información",
        type: "select",
        options: [
          "Productor(a)",
          "Propietario de la Finca",
          "Administrador(a) o encargado",
          "Otro",
        ],
      },
      { name: "informante_otro", label: "Otro (¿cuál?)", type: "text" },
      {
        name: "tiempo_cultivando_meses",
        label: "¿Cuánto tiempo lleva cultivando? (meses)",
        type: "number",
        min: 0,
      },
      {
        name: "tenencia_predio",
        label: "El predio es",
        type: "select",
        options: ["Propia", "Arrendada", "Prestado", "Otra"],
      },
      {
        name: "analisis_suelo_3_anios",
        label: "¿Análisis de suelo en los últimos 3 años?",
        type: "radio",
        options: ["Sí", "No"],
      },
    ],
  },
  // Información de la producción
  {
    id: "produccion",
    title: "Información de la Producción",
    fields: [
      {
        name: "actividades_preparacion_suelo",
        label: "Actividades de preparación de suelo",
        type: "checkbox-group",
        options: [
          "Siembra y Cosecha",
          "Cincelada",
          "Micro nivelada",
          "Nivelación",
          "Calloneada",
          "Pre abonamiento en la siembra",
          "Ninguna",
        ],
      },
      {
        name: "cultivos_actuales",
        label: "Estado actual de la finca",
        type: "checkbox-group",
        options: [
          "Maíz",
          "Cebada",
          "Trigo",
          "Sorgo",
          "Avena",
          "Frijol",
          "Arveja",
          "Haba",
          "Soya",
          "Otros transitorios",
          "Permanentes",
          "Pastos y Forrajes",
          "Plantación forestal",
          "Otra actividad",
          "Sin actividad",
        ],
      },
      {
        name: "cultivos_actuales_cual",
        label: "¿Cuál? (otros/otra actividad)",
        type: "text",
      },

      // Un bloque ejemplo de cultivo (se puede duplicar para registrar varios)
      { name: "cultivo_1", label: "Cultivo 1 (ej. Maíz)", type: "text" },
      { name: "variedad_1", label: "Variedad", type: "text" },
      { name: "material_1", label: "Material", type: "text" },
      {
        name: "costo_semilla_1",
        label: "Costo de semilla",
        type: "number",
        min: 0,
        step: "0.01",
      },
      { name: "mes_siembra_1", label: "Mes de siembra", type: "text" },
      {
        name: "area_sembrada_1",
        label: "Área sembrada (Ha)",
        type: "number",
        min: 0,
        step: "0.01",
      },
      { name: "mes_cosecha_1", label: "Mes de cosecha", type: "text" },
      {
        name: "area_cosecha_1",
        label: "Área cosecha (Ha)",
        type: "number",
        min: 0,
        step: "0.01",
      },
      {
        name: "rendimiento_1",
        label: "Rendimiento (ton/Ha)",
        type: "number",
        min: 0,
        step: "0.01",
      },
    ],
  },
  //Condiciones Comerciales de Productor
  {
    id: "condiciones_comerciales",
    title: "Condiciones Comerciales del Productor",
    fields: [
      {
        name: "vende_actualmente",
        label: "¿Cómo vende actualmente su producción?",
        type: "select",
        options: [
          "Individualmente",
          "A través de la Asociación",
          "Por encargo a un tercero",
          "Otro",
        ],
      },
      {
        name: "venta_colectiva_parte",
        label: "¿Qué parte está disponible para la venta colectiva?",
        type: "select",
        options: ["Toda", "Más de la mitad", "Menos de la mitad", "Ninguna"],
      },

      {
        name: "almacenamiento",
        label: "¿Qué tipo de almacenamiento utiliza?",
        type: "checkbox-group",
        options: ["Bodegas", "Silobolsa", "Silos"],
      },

      {
        name: "mercado_vende",
        label: "¿En qué mercado vende su producto?",
        type: "checkbox-group",
        options: ["Local", "Departamental", "Nacional", "Ninguno", "Otros"],
      },

      {
        name: "donde_vende",
        label: "¿Dónde vende su producto?",
        type: "checkbox-group",
        options: ["Puerta de Finca", "Puerta de Fábrica", "Centro de Acopio"],
      },

      {
        name: "con_quien_comercializa",
        label: "¿Con quién comercializa su producto?",
        type: "checkbox-group",
        options: [
          "Intermediarios",
          "Empresas específicas",
          "Sector Público",
          "Local",
        ],
      },

      {
        name: "fortalezas_calidad",
        label: "Fortalezas (calidad)",
        type: "checkbox-group",
        options: [
          "Variedad aceptada en el mercado",
          "Libre de químicos",
          "Ninguna",
          "Otras",
        ],
      },
      {
        name: "debilidades_calidad",
        label: "Debilidades (calidad)",
        type: "checkbox-group",
        options: ["Alta humedad", "Alto contenido de impurezas", "Otras"],
      },

      {
        name: "fortalezas_volumen",
        label: "Fortalezas (volumen/oferta)",
        type: "checkbox-group",
        options: [
          "Producción estable",
          "Varios socios producen lo mismo",
          "Producción escalonada",
          "Otras",
        ],
      },
      {
        name: "debilidades_volumen",
        label: "Debilidades (volumen/oferta)",
        type: "checkbox-group",
        options: [
          "Poco volumen conjunto",
          "Falta de coordinación en cosecha",
          "Otras",
        ],
      },

      {
        name: "asoc_canales_comercializacion",
        label:
          "¿La asociación cuenta con canales/contactos para la comercialización?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "precios_negociacion",
        label: "Cuando negocia la asociación, los precios son",
        type: "select",
        options: [
          "Mayores a los del mercado",
          "Iguales a los del mercado",
          "Menores a los del mercado",
          "No hay negociación colectiva",
        ],
      },
      {
        name: "asoc_negocia_fletes",
        label: "¿La asociación tiene posibilidad de negociar fletes?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "acceso_vias_nacionales",
        label: "¿La asociación tiene fácil acceso a vías nacionales?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "afecta_logistica",
        label: "¿Le afectan problemáticas políticas/sociales en la logística?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "asoc_transporte_fijo",
        label: "¿La asociación cuenta con transporte fijo?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "asoc_relaciones_externas",
        label: "¿La asociación tiene relaciones externas?",
        type: "radio",
        options: ["Sí", "No"],
      },
    ],
  },
  //Maquinaria
  {
    id: "maquinaria",
    title: "Maquinaria",
    fields: [
      {
        name: "tiene_maquinaria",
        label: "¿Cuenta con maquinaria?",
        type: "radio",
        options: ["Sí", "No"],
      },
      {
        name: "maquinaria_cuales",
        label: "¿Cuáles?",
        type: "checkbox-group",
        options: ["Tractor", "Combinada", "Todas las anteriores", "Otra"],
      },
      { name: "maquinaria_otro", label: "Otra (¿cuál?)", type: "text" },
      {
        name: "tractor_propiedad",
        label: "Tractor",
        type: "select",
        options: ["Propio", "Alquilado", "No Utiliza"],
      },
      {
        name: "tractor_antiguedad",
        label: "Antigüedad tractor",
        type: "select",
        options: [
          "0 a 5 años",
          "6 a 10 años",
          "11 a 15 años",
          "Más de 15 años",
        ],
      },
      {
        name: "combinada_propiedad",
        label: "Combinada",
        type: "select",
        options: ["Propio", "Alquilado", "No Utiliza"],
      },
      {
        name: "combinada_antiguedad",
        label: "Antigüedad combinada",
        type: "select",
        options: [
          "0 a 5 años",
          "6 a 10 años",
          "11 a 15 años",
          "Más de 15 años",
        ],
      },
    ],
  },

  {
    id: "economia",
    title: "Economía del Productor",
    fields: [
      {
        name: "porcentaje_ingreso_del_cultivo",
        label: "Parte del ingreso que proviene del cultivo",
        type: "select",
        options: [
          "La mayoría (60%-100%)",
          "Alrededor de la mitad (40%-59%)",
          "Menos del 40%",
        ],
      },
      {
        name: "fuente_principal_ingresos",
        label: "Actividad económica principal",
        type: "select",
        options: [
          "Cultivo del Gremio",
          "Otros cultivos",
          "Manufactura",
          "Servicios",
          "Comercio",
          "Construcción",
          "Empleado(a)",
          "Minería",
          "Otra",
        ],
      },
      {
        name: "fuente_financiacion",
        label: "Fuente de financiación",
        type: "select",
        options: [
          "Recursos propios",
          "Crédito bancario",
          "Agrocomercio",
          "Crédito a terceros",
          "Otro",
        ],
      },
      {
        name: "ingresos_anuales",
        label: "Ingresos anuales por venta de cosechas (millones)",
        type: "number",
        min: 0,
        step: "0.01",
      },
      {
        name: "patrimonio",
        label: "Monto del patrimonio",
        type: "number",
        min: 0,
        step: "0.01",
      },
      {
        name: "deudas_totales",
        label: "Deudas actuales",
        type: "number",
        min: 0,
        step: "0.01",
      },
    ],
  },
  //Desechos
  {
    id: "tic_desechos",
    title: "TIC y Manejo de Desechos",
    fields: [
      {
        name: "tic_disponibles",
        label: "Tecnologías de información y conectividad",
        type: "checkbox-group",
        options: [
          "Computadores",
          "Dispositivos móviles",
          "Internet",
          "Televisión",
          "Radio",
          "Ninguno",
        ],
      },
      {
        name: "tic_uso_produccion",
        label: "Uso de TIC en la producción",
        type: "checkbox-group",
        options: [
          "Capacitación en línea",
          "Consulta climática",
          "Pagos/banca en línea",
          "Reportes gremiales",
          "Planificación y seguimiento",
          "Ninguna",
        ],
      },
      {
        name: "manejo_desechos_agroquimicos",
        label: "Manejo de desechos de agroquímicos",
        type: "select",
        options: [
          "Reutiliza doméstico",
          "Reutiliza agropecuario",
          "Quema",
          "Entierra",
          "Carro recolector",
          "Centro de acopio",
          "Botadero/lote baldío",
          "Fuente de agua",
          "Vende",
          "Los deja en el lote",
          "Reciclador",
        ],
      },
    ],
  },
  // Manejo de Empaques
  {
    id: "manejo_empaques",
    title: "Manejo de Empaques (plástico / icopor)",
    fields: [
      {
        name: "manejo_empaques",
        label:
          "¿Cómo maneja los empaques utilizados en la alimentación de los trabajadores?",
        type: "select",
        options: [
          "Los quema",
          "Los entierra",
          "Carro recolector de aseo municipal",
          "Botadero/lote baldío",
          "Los arroja a una fuente de agua",
          "Los deja en el lote",
          "Los entrega al reciclador",
          "No utiliza empaques de plástico ni icopor",
        ],
      },
    ],
  },
];

export const formFields = sections.flatMap((s) => s.fields);

export const initialFormData = formFields.reduce((acc, f) => {
  acc[f.name] = f.type === "checkbox-group" ? [] : "";
  return acc;
}, {});
