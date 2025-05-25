// Datos de ejemplo basados en la imagen
export interface Evento {
  id: string
  title: string
  date: string
  hour: string
  type:
    | 'Todas'
    | 'Académico'
    | 'Cultural'
    | 'Deportivo'
    | 'Conferencias'
    | 'Voluntariado'
    | 'Orientación'
    | 'PresentacionPyE'
  status: 'Pendiente' | 'Completado'
  asistence: 'No asistió' | 'Asistió'
  image: string
  category: string
}

export const eventosEjemplo: Evento[] = [
  {
    id: '1',
    title: 'Congreso Internacional de Psicoterapia',
    date: '17 Junio',
    hour: '3:00 pm',
    type: 'Conferencias',
    status: 'Pendiente',
    asistence: 'No asistió',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=80&fit=crop&crop=face',
    category: 'Psicología'
  },
  {
    id: '2',
    title: 'Festival de música Folclórica',
    date: '17 Junio',
    hour: '3:00 pm',
    type: 'Cultural',
    status: 'Pendiente',
    asistence: 'No asistió',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=80&h=80&fit=crop',
    category: 'Cultural'
  },
  {
    id: '3',
    title: 'MS EXCEL BÁSICO',
    date: '17 Junio',
    hour: '3:00 pm',
    type: 'Académico',
    status: 'Pendiente',
    asistence: 'No asistió',
    image: '', // Sin imagen
    category: 'Tecnología'
  }
]
