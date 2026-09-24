import { PortalLink } from '../types';

export const INITIAL_LINKS: PortalLink[] = [
  {
    id: 'inscripcion-almuerzo',
    title: 'Inscripción a Almuerzo',
    category: 'forms',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSevk9IYHdEhflnpwolk2Bw3oIcs0soOeHqGl4k_fe_60xvxZA/closedform',
    badge: 'Formulario Google',
    description: 'Inscripción fija mensual del servicio de almuerzo. Renovación automática mes a mes.',
    highlight: 'Modificaciones: Abierto hasta el 28/9',
    priceTag: 'Vigencia mensual',
    iconName: 'ClipboardCheck',
  },
  {
    id: 'cancelar-almuerzo',
    title: 'Cancelar Almuerzo',
    category: 'forms',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSeWGTFIhsP7iGBIj6WM1jpdezRXdpmWkDOgdPOVnFvlVKx15A/viewform',
    badge: 'Formulario Google',
    description: 'Comunicación de ausencias previstas para evitar la facturación del día.',
    highlight: 'Estricto: Realizar antes de las 09:00 hs del mismo día',
    priceTag: 'Evita cobro diario',
    iconName: 'CalendarX',
  },
  {
    id: 'ticket-eventual',
    title: 'Ticket Eventual',
    category: 'forms',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLSfPe-2amXBUEu-PCEYGhogltWhMc1C8bhcIiSg43cc_VsaHrA/viewform',
    badge: 'Formulario Google',
    description: 'Solicitud de vale diario para alumnos que no asisten de manera fija al comedor.',
    highlight: 'Tope de solicitud: hasta las 09:00 hs del mismo día',
    priceTag: '$14.700 por día',
    iconName: 'Ticket',
  },
];

export const PAUTAS_LINKS: PortalLink[] = [
  {
    id: 'pautas-inicial',
    title: 'Pautas nivel inicial 2026',
    category: 'pautas',
    url: 'https://drive.google.com/file/d/1kgSwjmIKR_mxgS3LtT0XGjbsHjdLig2k/view',
    badge: 'Google Drive PDF',
    description: 'Pautas de almuerzo, metodología, descanso y organización para salas de Nivel Inicial.',
    highlight: 'Avisar siempre por Handing a la maestra antes de las 09:00 hs',
    priceTag: 'Menú: $11.600 / día',
    iconName: 'School',
    isPauta: true,
    pautaData: {
      level: 'Nivel Inicial',
      subtitle: 'Pautas de Almuerzo 2026',
      prices: {
        menuRegular: '$11.600 por día (facturado a mes vencido con cuota)',
        ticketEventual: '$14.700 por día (habilitada opción vale diario)',
      },
      deadlines: {
        cancelacion: 'Antes de las 09:00 hs del día a cancelar mediante formulario + aviso por Handing a la maestra.',
        ticketEventual: 'Antes de las 09:00 hs del día vía formulario + notificación obligatoria a la maestra de sala.',
      },
      keyPoints: [
        'Exclusivo para niños que asistan a la doble jornada (ambos turnos).',
        'Servicio a cargo de la empresa "AULAS GOURMET SRL".',
        'El costo del menú por día es de $11.600 y se facturará al mes vencido junto con la cuota mensual.',
        'Las AUSENCIAS previstas se comunican mediante el formulario de CANCELACIÓN antes de las 09:00 hs del día a cancelar para evitar la facturación.',
        'IMPORTANTE: Siempre que haya una modificación (cancelación diaria, baja definitiva, alta) avisar en simultáneo por Handing a las maestras.',
        'La baja permanente de comedor se gestiona desde el formulario de bajas diarias (Tutorial Baja Definitiva).',
        'Vale Diario / Ticket eventual: $14.700.'
      ],
      metodologia: [
        '1. Inscribirse a través del formulario de tickets eventuales.',
        '2. Los padres deberán NOTIFICAR A SU MAESTRA DE SALA, vía Handing, antes de las 09:00 hs.',
        '3. En caso de no recibir la notificación el niño NO PODRÁ quedarse en el comedor.',
        '4. Los tickets eventuales se cobrarán con la cuota del mes.'
      ],
      organizacion: [
        'Los niños que se queden en el comedor permanecerán en sus salas junto a una docente del Nivel Inicial.',
        'La docente los llevará al baño donde se higienizan las manos para prepararse para almorzar.',
        'Luego volverán a sus respectivas salas, donde los estarán esperando las docentes que comerán con ellos.',
        'Aquellos niños que lo necesiten podrán descansar en una colchoneta. Al resto se les ofrecerán actividades tranquilas y espontáneas.'
      ],
      contacto: 'Comunicación directa vía plataforma Handing con maestras de sala y autoridades del Nivel Inicial.'
    }
  },
  {
    id: 'pautas-primario',
    title: 'Pautas nivel primario 2026',
    category: 'pautas',
    url: 'https://drive.google.com/file/d/1lKhA1YupyTy4WpaeG1sQfjmYpfx--AZ0/view',
    badge: 'Google Drive PDF',
    description: 'Aranceles 1º a 7º grado, servicio de vianda desde 3º grado y normas de entrega.',
    highlight: 'Ticket Eventual hasta las 08:30 hs | Viandas por Portón 1 Gutiérrez',
    priceTag: '1º/2º: $12.600 • 3º+: $13.400',
    iconName: 'BookOpen',
    isPauta: true,
    pautaData: {
      level: 'Nivel Primario',
      subtitle: 'Pautas de Almuerzo 2026',
      prices: {
        menuRegular: '1º y 2º grado: $12.600 / día | Resto (3º a 7º): $13.400 / día',
        ticketEventual: '$14.700 (solicitud hasta las 08:30 hs)',
        vianda: '$53.000 por mes (a partir de 3º grado)',
      },
      deadlines: {
        cancelacion: 'Antes de las 09:00 hs del día a cancelar para evitar facturación.',
        ticketEventual: 'Hasta las 08:30 hs del mismo día.',
        modificaciones: '72 horas hábiles antes de fin de mes (ej. del 27 al 30/31).'
      },
      keyPoints: [
        'La INSCRIPCIÓN tiene vigencia mensual y se renueva automáticamente de mes a mes.',
        'Inscripción para días fijos en la semana (no conmutables en caso de ausencias).',
        'Costo menú por día: $12.600 (1º y 2º grado) y $13.400 (resto de los alumnos).',
        'Ticket eventual: $14.700 solicitando hasta las 08:30 hs del mismo día.',
        'Baja permanente mediante formulario de bajas diarias (Tutorial Baja Definitiva).',
        'Para dar el alta en un servicio, deberá primero dar de baja el que tenga contratado sin excepción.'
      ],
      metodologia: [
        'Servicio de vianda (disponible a partir de 3º grado): $53.000 por mes.',
        'Embalaje: descartable de aluminio (bandejas 275 con tapa) con rótulo indeleble (nombre, apellido y grado).',
        'Lugar de entrega: al ingreso del turno mañana por el Portón 1 de Gutiérrez en los contenedores indicados.',
        'Solamente se recibirán bandejas que deban ser calentadas (no frizadas). Cada alumno debe llevar lonchera con alimentos fríos.',
        'El servicio incluye: calentamiento, bandejas de servicio, cubiertos, agua purificada (PSA) y condimentos.'
      ],
      organizacion: [
        'Organización por turnos y grados para una alimentación cuidada y guiada.',
        'Supervisión del equipo de comedor y docentes.',
        'Espacio higiénico y adecuado para el almuerzo y descanso.'
      ],
      contacto: 'comedor@isanagustin.edu.ar o casilla Comedor en Handing.'
    }
  },
  {
    id: 'pautas-secundario',
    title: 'Pautas nivel secundario 2026',
    category: 'pautas',
    url: 'https://drive.google.com/file/d/1AnitpAPSWJaZeGv8t43I83vymIK_-uT0/view',
    badge: 'Google Drive PDF',
    description: 'Pautas para 1º a 3º año: servicio de comedor, viandas e ingreso por Portón Agüero.',
    highlight: 'Ticket Eventual hasta las 09:00 hs | Comedor 3er piso',
    priceTag: 'Menú: $13.400 • Vianda: $53.000',
    iconName: 'GraduationCap',
    isPauta: true,
    pautaData: {
      level: 'Nivel Medio (Secundario)',
      subtitle: 'Pautas de Almuerzo 2026',
      prices: {
        menuRegular: '$13.400 por día (facturado a mes vencido con la cuota)',
        ticketEventual: '$14.700 c/u (horario tope 09:00 hs del mismo día)',
        vianda: '$53.000 mensuales',
      },
      deadlines: {
        cancelacion: 'Antes de las 09:00 hs a través del formulario de cancelación.',
        ticketEventual: 'Hasta las 09:00 hs del mismo día.',
        modificaciones: '72 hs hábiles antes de fin de mes (vigencia hasta 18/12/26).'
      },
      keyPoints: [
        'Para alumnos de 1º a 3º año que asisten a la doble jornada.',
        'Servicio a cargo de la empresa "AULAS GOURMET SRL".',
        'Costo menú por día: $13.400 facturado a mes vencido con la cuota mensual.',
        'Servicio de vianda: $53.000 mensuales.',
        'Ticket eventual: $14.700 c/u, anotarse hasta las 09:00 hs del mismo día.',
        'Para dar el alta en un servicio debe dar primero la baja del anterior mediante formulario.'
      ],
      metodologia: [
        'Servicio de vianda: bandejas descartables de aluminio (275 con tapa) con nombre, apellido y grado rotulado indeleble.',
        'Dejar al ingreso del turno mañana por el Portón de Agüero en los contenedores indicados.',
        'Solamente bandejas a calentar (no frizadas). Demás alimentos en su lonchera personal.',
        'Incluye: calentamiento, bandejas de servicio, cubiertos, agua purificada PSA y condimentos.'
      ],
      organizacion: [
        'Los alumnos almorzarán en el ámbito del tercer piso junto con el resto de los niveles.',
        'Luego permanecerán en las aulas del 2º piso hasta el comienzo del turno tarde.',
        'La admisión en este espacio queda sujeta al comportamiento del alumno.'
      ],
      contacto: 'almuerzosecundaria@isanagustin.edu.ar'
    }
  }
];

export const ALL_PORTAL_LINKS: PortalLink[] = [...INITIAL_LINKS, ...PAUTAS_LINKS];

