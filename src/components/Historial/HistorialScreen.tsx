import React, { useState, useEffect } from 'react';
import './HistorialScreen.css';
import { useNavigate } from 'react-router-dom';
import {eventosEjemplo, Evento} from '../../lib/data/history/events-example';
import HeaderHistorial from './HeaderHistorial';

interface HistorialScreenProps {}

const HistorialScreen: React.FC<HistorialScreenProps> = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [filtroTipo, setFiltroTipo] = useState<string>('Todas');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setEventos(eventosEjemplo);
      setIsLoading(false);
    }, 800);
  }, []);


  const handleExportPDF = () => {
    console.log('Exportar PDF');
  };

  const handleEventClick = (eventoId: string) => {
  navigate(`/evento/${eventoId}`);
};

  const eventosFiltrados = eventos.filter(evento =>
    filtroTipo === 'Todas' || evento.type === filtroTipo
  );

  const agruparEventos = () => {
    const grupos = {
      'Hace un momento': [] as Evento[],
      'Últimos 7 días': [] as Evento[]
    };

    eventosFiltrados.forEach(evento => {
      if (evento.id === '1') {
        grupos['Hace un momento'].push(evento);
      } else {
        grupos['Últimos 7 días'].push(evento);
      }
    });

    return grupos;
  };

  const eventosAgrupados = agruparEventos();
  if (isLoading) {
    return (
      <div className="historial-mobile-container">

        <div className="loading-content">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Cargando historial...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="historial-mobile-container">

      {/* Content */}
      <div className="mobile-content">
        {/* Title Section */}
        <div className='title-container'>
          <div className="title-section">
            <div className="title-left">
              <h2 className="main-title">Historial</h2>
              <p className="subtitle">de Eventos</p>
            </div>
            <button className="pdf-button" onClick={handleExportPDF}>
              <span className="pdf-text">PDF</span>
              <span className="download-arrow">⬇️</span>
            </button>
          </div>
      </div>
        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-row">
            <span className="filter-label">Tipo de eventos</span>
            <div className="filter-dropdown">
              <select
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="dropdown-select"
              >
                <option value="Todas">Todas</option>
                <option value="Académico">Académico</option>
                <option value="Cultural">Cultural</option>
                <option value="Deportivo">Deportivo</option>
                <option value="Conferencias">Conferencias</option>
                <option value="Voluntariado">Voluntariado</option>
                <option value="Orientación">Orientación</option>
                <option value="PresentacionPyE">Presentación PyE</option>
              </select>
              <span className="dropdown-arrow">▼</span>
            </div>
          </div>
        </div>

        {/* Events Groups */}
        <div className="events-container">
          {Object.entries(eventosAgrupados).map(([grupo, eventosGrupo]) => (
            eventosGrupo.length > 0 && (
              <div key={grupo} className="event-group">
                <h3 className="group-header">{grupo}</h3>

                <div className="events-list">
                  {eventosGrupo.map((evento) => (
                    <div
                      key={evento.id}
                      className="event-item"
                      onClick={() => handleEventClick(evento.id)}
                    >
                      <div className="event-image-container">
                        {evento.category === 'Tecnología' ? (
                          <div className="excel-badge">
                            <div className="excel-icon">
                              <span className="excel-x">X</span>
                              <div className="excel-grid">
                                <div className="grid-line"></div>
                                <div className="grid-line"></div>
                                <div className="grid-line"></div>
                              </div>
                            </div>
                            <div className="excel-label">
                              <span className="excel-text">Excel</span>
                              <span className="basic-text">Básico</span>
                            </div>
                          </div>
                        ) : (
                          evento.image ? (
                            <img
                              src={evento.image}
                              alt={evento.title}
                              className="event-image"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="60" height="60" fill="%23E5E5E5"/%3E%3Cpath d="M20 20H40V40H20V20Z" fill="%23CCCCCC"/%3E%3C/svg%3E';
                              }}
                            />
                          ) : (
                            <span className="event-placeholder" role="img" aria-label="evento">📅</span>
                          )
                        )}
                      </div>

                      <div className="event-details">
                        <div className="event-datetime-row">
                          <div className="datetime-item">
                            <span className="calendar-icon">📅</span>
                            <span className="date-text">{evento.date}</span>
                          </div>
                          <div className="datetime-item">
                            <span className="clock-icon">🕒</span>
                            <span className="time-text">{evento.hour}</span>
                          </div>
                        </div>

                        <h4 className="event-title">{evento.title}</h4>

                        <div className="event-tags">
                          <span className="event-type-tag">{evento.type}</span>
                          <span className="status-tag pending">⏱ {evento.status}</span>
                          <span className="asistence-tag noasistence">🚫 {evento.asistence}</span>
                          {/* Puedes mostrar otros tags según estado */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistorialScreen;