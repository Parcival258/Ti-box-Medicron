import './InfoPage.css'
import { StarryBackdrop } from '@/shared/ui/StarryBackdrop'

const technologies = [
  'React',
  'TypeScript',
  'Vite',
  'AdonisJS',
  'PostgreSQL',
  'Socket.IO',
  'Tailwind CSS',
]

const modules = [
  'Inventario de equipos',
  'Prestamos y devoluciones',
  'Mantenimientos preventivos y correctivos',
  'Alertas y casos',
  'Usuarios y permisos',
  'Sedes, ubicaciones y tipos de equipo',
  'Chat interno',
  'Logs del sistema',
]

export function InfoPage() {
  return (
    <section className="info-page">
      <div className="info-page__stars">
        <StarryBackdrop />
      </div>

      <header className="info-page__header">
        <p className="info-page__kicker">Info</p>
        <h2>Informacion del sistema</h2>
        <p>
          Datos generales del proyecto, tecnologias usadas y modulos entregados.
        </p>
      </header>

      <div className="info-panel">
        <section className="info-section" aria-labelledby="info-project-title">
          <div className="info-section__head">
            <h3 id="info-project-title">Proyecto</h3>
          </div>
          <dl className="info-data-list">
            <div>
              <dt>Nombre</dt>
              <dd>TiBox Medicron</dd>
            </div>
            <div>
              <dt>Cliente</dt>
              <dd>Medicron</dd>
            </div>
            <div>
              <dt>Tipo</dt>
              <dd>Sistema web de gestion TI</dd>
            </div>
            <div>
              <dt>Repositorio</dt>
              <dd>Backend y frontend en un repositorio unificado</dd>
            </div>
          </dl>
        </section>

        <section className="info-section" aria-labelledby="info-credits-title">
          <div className="info-section__head">
            <h3 id="info-credits-title">Creditos</h3>
          </div>
          <div className="info-section__body">
            <p>
              Sistema creado como solucion interna para centralizar activos, prestamos,
              mantenimientos, alertas, usuarios y comunicacion del area tecnologica.
            </p>
          </div>
        </section>

        <section className="info-section" aria-labelledby="info-author-title">
          <div className="info-section__head">
            <h3 id="info-author-title">Desarrollo</h3>
          </div>
          <dl className="info-data-list">
            <div>
              <dt>Desarrollador</dt>
              <dd>Andres Lasso</dd>
            </div>
            <div>
              <dt>Rol</dt>
              <dd>Diseno, desarrollo e integracion del sistema</dd>
            </div>
            <div>
              <dt>Asistencia</dt>
              <dd>Codex para apoyo tecnico y revision</dd>
            </div>
          </dl>
        </section>

        <section className="info-section" aria-labelledby="info-scope-title">
          <div className="info-section__head">
            <h3 id="info-scope-title">Modulos principales</h3>
          </div>
          <ul className="info-module-list">
            {modules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
        </section>

        <section className="info-section" aria-labelledby="info-stack-title">
          <div className="info-section__head">
            <h3 id="info-stack-title">Tecnologias</h3>
          </div>
          <div className="info-tech-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>

        <section className="info-section" aria-labelledby="info-delivery-title">
          <div className="info-section__head">
            <h3 id="info-delivery-title">Estructura de entrega</h3>
          </div>
          <div className="info-section__body">
            <p>
              El codigo fuente se organiza en dos aplicaciones: backend con API y persistencia,
              y frontend con la interfaz web de operacion.
            </p>
          </div>
          <dl className="info-data-list info-data-list--compact">
            <div>
              <dt>Backend</dt>
              <dd>TiBox-backend</dd>
            </div>
            <div>
              <dt>Frontend</dt>
              <dd>TiBox-Frontend</dd>
            </div>
          </dl>
        </section>
      </div>
    </section>
  )
}
