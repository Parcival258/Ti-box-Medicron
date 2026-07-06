# Manual de usuario - TiBox Medicron

## 1. Objetivo del sistema

TiBox Medicron es un sistema web para centralizar la gestion de equipos TI de Medicron. Permite registrar inventario, asignar responsables, controlar prestamos, documentar mantenimientos, atender fallas, revisar alertas, administrar usuarios, configurar sedes y conservar evidencia de las operaciones realizadas.

El sistema esta dividido en modulos. La visibilidad de cada modulo depende del rol y los permisos asignados al usuario.

## 2. Acceso al sistema

1. Abra la URL del sistema en el navegador.
2. Ingrese el correo y la contrasena entregados por el administrador.
3. Presione el boton de inicio de sesion.
4. Al ingresar, vera el menu lateral con los modulos disponibles para su rol.

Si no puede iniciar sesion, verifique que las credenciales esten bien escritas. Si el problema continua, solicite al administrador revisar el estado de su usuario.

## 3. Navegacion general

El menu lateral agrupa las opciones principales:

- Operacion: Inventario, Prestamos y Mantenimientos.
- Soporte: Mis casos y Alertas.
- Comunicacion: Chat.
- Administracion: Usuarios, Logs del sistema, Sedes y Tipos, Configuracion.
- Sistema: Info.

En pantallas pequenas el menu puede aparecer contraido. Use el boton superior del menu para expandirlo o contraerlo. En la parte inferior del menu encontrara el usuario activo y la opcion para cerrar sesion.

## 4. Roles y permisos

Los permisos determinan que acciones puede realizar cada usuario. Si un boton no aparece o una accion esta deshabilitada, normalmente significa que su rol no tiene permiso para ejecutarla.

Roles habituales:

- Administrador: acceso completo al sistema.
- Gestor de equipos: administra inventario, sedes, ubicaciones, asignaciones, devoluciones y seguimiento de alertas.
- Tecnico de mantenimiento: consulta equipos, registra mantenimientos, cierra procesos y gestiona reportes de fallas.
- Usuario: consulta equipos y puede reportar fallas segun los permisos asignados.
- Auditor: consulta informacion, registros y auditoria sin modificar datos operativos. (para futuras actualizaciones)

## 5. Inventario

El modulo Inventario permite consultar, crear, editar y operar los equipos registrados.

### Consultar equipos

1. Entre a Inventario.
2. Use los filtros disponibles para buscar por sede, ubicacion, tipo, estado u otros datos.
3. Seleccione un equipo para ver su detalle.
4. Revise la informacion general, responsable actual, historial, adjuntos y hoja de vida.

### Crear un equipo

1. Entre a Inventario.
2. Presione la opcion para crear un nuevo equipo.
3. Complete los datos requeridos del formulario.
4. Seleccione sede, piso, area y oficina para ubicar el equipo.
5. Revise que codigos, seriales y datos de identificacion esten correctos.
6. Presione Guardar.

Si el sistema no permite guardar, revise campos obligatorios, valores repetidos o datos incompletos.

### Editar un equipo

1. Seleccione el equipo en Inventario.
2. Abra la opcion de edicion.
3. Actualice los campos necesarios.
4. Guarde los cambios.

Evite cambiar informacion historica sin justificacion. Los datos de ubicacion, responsable y estado impactan otros modulos.

### Asignar un equipo

1. Seleccione el equipo.
2. En el panel de operaciones, ubique la seccion de asignacion.
3. Seleccione el usuario responsable.
4. Agregue notas si aplica.
5. Confirme la asignacion.

La asignacion actualiza el responsable del equipo y queda registrada en el historial.

### Registrar devolucion

1. Seleccione el equipo asignado.
2. En operaciones, use la opcion de retorno o devolucion.
3. Escriba observaciones si aplica.
4. Confirme la operacion.

### Adjuntar archivos al equipo

1. Seleccione el equipo.
2. Use la opcion de adjuntos.
3. Cargue el archivo correspondiente.
4. Verifique que el archivo aparezca asociado al equipo.

Use adjuntos para soportes, facturas, imagenes, garantias, documentos tecnicos o evidencias relevantes.

## 6. Prestamos

El modulo Prestamos controla solicitudes, aprobaciones, entregas y devoluciones de equipos.

### Solicitar un prestamo

1. Entre a Prestamos.
2. Complete el formulario de solicitud.
3. Seleccione el equipo o indique el item solicitado, segun disponibilidad.
4. Defina la fecha estimada de devolucion.
5. Agregue notas si son necesarias.
6. Envie la solicitud.

### Crear un prestamo directo

Usuarios con permiso de gestion pueden registrar prestamos directamente:

1. Entre a Prestamos.
2. Complete los datos del responsable, equipo y fechas.
3. Confirme la creacion del prestamo.

### Aprobar o rechazar solicitudes

1. En la lista de prestamos, ubique la solicitud pendiente.
2. Para aprobar, seleccione el equipo que se entregara y confirme.
3. Para rechazar, escriba el motivo y confirme.

### Registrar devolucion de un prestamo

1. Busque el prestamo activo.
2. Use la opcion de devolucion.
3. Registre observaciones de entrega.
4. Si el flujo lo solicita, adjunte o capture la firma de recibido.
5. Confirme la devolucion.

## 7. Mantenimientos

El modulo Mantenimientos permite manejar mantenimientos preventivos y correctivos mediante procesos por etapas.

### Estructura del modulo

El modulo tiene tres vistas principales:

- Procesos: bandeja de mantenimientos en curso o historicos.
- Grupos de equipos: conjuntos de equipos para programaciones masivas o recurrentes.
- Programacion: agenda de mantenimientos y acciones de inicio, reprogramacion, cancelacion o cierre.

### Crear un mantenimiento

1. Entre a Mantenimientos.
2. Presione Nuevo mantenimiento.
3. Seleccione el equipo o grupo segun el caso.
4. Defina tipo de mantenimiento: preventivo o correctivo.
5. Complete prioridad, fecha programada y descripcion.
6. Guarde la programacion.

### Trabajar un proceso de mantenimiento

1. Entre a la pestana Procesos.
2. Filtre por preventivos o correctivos.
3. Seleccione el mantenimiento en la bandeja.
4. Complete las etapas disponibles.

Etapas del proceso:

- Recepcion: fecha real de recepcion, estado inicial, observaciones y descripcion general.
- Ejecucion: actividades realizadas, observaciones tecnicas, componentes usados, costo, software configurado y diagnostico.
- Cierre: estado final, persona que recibe, destino final, fecha real de cierre y proximo mantenimiento.

Guarde cada etapa antes de avanzar. El historial registra las actualizaciones.

### Adjuntar evidencias de mantenimiento

1. Abra el mantenimiento.
2. Seleccione la etapa correspondiente.
3. En Evidencias, presione Adjuntar.
4. Cargue imagenes, PDF, Word o Excel relacionados con esa etapa.

Cada evidencia queda asociada a una etapa especifica, por lo que conviene adjuntarla en el paso correcto.

### Grupos de equipos

Use grupos para reunir equipos que se mantienen juntos, por ejemplo por sede, area, tipo o plan de mantenimiento.

1. Entre a Mantenimientos.
2. Abra Grupos de equipos.
3. Cree un grupo con nombre, descripcion y equipos incluidos.
4. Use la opcion de programar grupo cuando necesite crear mantenimientos para ese conjunto.

## 8. Reportes de fallas y casos

Las fallas pueden generarse desde operaciones de un equipo o mediante los modulos de soporte, segun permisos.

### Reportar una falla desde Inventario

1. Seleccione el equipo afectado.
2. En operaciones, abra el formulario de falla.
3. Escriba titulo, descripcion y prioridad.
4. Guarde el reporte.

### Revisar Mis casos

1. Entre a Mis casos.
2. Revise los casos asociados a su usuario o responsabilidad.
3. Abra cada caso para revisar el estado y las acciones pendientes.

## 9. Alertas

El modulo Alertas muestra eventos que requieren atencion, como fallas, vencimientos, mantenimientos, prestamos u otros seguimientos internos.

Acciones comunes:

- Reconocer una alerta para indicar que ya fue revisada.
- Asignarla a un tecnico o responsable.
- Autoasignarla si usted la atendera.
- Abrir el elemento relacionado.
- Resolverla cuando ya no requiere accion.
- Descartarla si no aplica.
- Ejecutar revisiones manuales, si su rol lo permite.

Los indicadores del menu pueden mostrar pendientes para ayudar a priorizar.

## 10. Chat

El modulo Chat permite comunicacion interna entre usuarios del sistema.

1. Entre a Chat.
2. Seleccione una conversacion existente o cree una nueva si la opcion esta disponible.
3. Escriba el mensaje.
4. Envie la comunicacion.

El menu puede mostrar un contador de mensajes no leidos.

## 11. Usuarios

El modulo Usuarios esta disponible para roles administrativos.

Acciones principales:

- Consultar usuarios registrados.
- Crear nuevos usuarios.
- Editar datos de un usuario.
- Asignar rol.
- Activar, actualizar o retirar accesos segun el flujo configurado.

Recomendaciones:

- Use correos institucionales cuando aplique.
- Asigne solo los permisos necesarios para el trabajo del usuario.
- Revise cuidadosamente cambios de rol, porque pueden habilitar acciones sensibles.

## 12. Sedes, ubicaciones y tipos

La gestion de sedes y tipos permite mantener los catalogos que usan los equipos.

### Sedes

Registre las sedes fisicas de la organizacion. Una sede sirve como agrupador principal de ubicaciones y equipos.

### Ubicaciones

Las ubicaciones normalmente se organizan por sede, piso, area y oficina. Mantener esta informacion clara facilita filtros, busquedas, inventario fisico y programacion de mantenimiento.

### Tipos de equipo

Los tipos ayudan a clasificar activos, por ejemplo computadores, monitores, impresoras, servidores u otros elementos TI.

Antes de eliminar o cambiar catalogos, verifique si ya estan asociados a equipos existentes.

## 13. Configuracion

El modulo Configuracion agrupa parametros operativos del sistema. Dependiendo del rol, puede permitir consultar o actualizar datos de sedes, ubicaciones, tipos u otros elementos administrativos.

Use este modulo con cuidado, porque los cambios pueden afectar formularios, filtros y reportes.

## 14. Logs del sistema

Los logs del sistema son registros tecnicos para diagnosticar errores. Normalmente los revisa un administrador o soporte tecnico.

Acciones habituales:

- Consultar errores recientes.
- Revisar fecha, modulo y detalle del error.
- Limpiar registros cuando ya fueron atendidos, si el sistema lo permite.

No elimine logs antes de reportar un problema tecnico importante.

## 15. Info

El modulo Info muestra datos generales del proyecto:

- Nombre del sistema.
- Cliente.
- Tipo de solucion.
- Modulos entregados.
- Tecnologias utilizadas.
- Estructura de backend y frontend.

## 16. Buenas practicas de uso

- Mantenga actualizados los datos de ubicacion y responsable de cada equipo.
- Registre observaciones claras en prestamos, devoluciones, fallas y mantenimientos.
- Adjunte evidencias cuando soporten una decision tecnica o administrativa.
- Use prioridades con criterio para que las alertas sean utiles.
- Cierre los mantenimientos solo cuando el equipo tenga estado final documentado.
- No comparta credenciales.
- Cierre sesion al terminar, especialmente en equipos compartidos.

## 17. Solucion de problemas frecuentes

### No veo un modulo

Es probable que su rol no tenga permisos para ese modulo. Solicite revision al administrador.

### No puedo guardar un formulario

Revise campos obligatorios, valores repetidos, fechas invalidas o seleccion de catalogos incompleta.

### No aparece una sede, ubicacion o tipo

Verifique que el catalogo exista en Configuracion o Sedes y Tipos. Si no existe, solicite su creacion a un usuario autorizado.

### No puedo adjuntar un archivo

Revise el formato del archivo y el tamano permitido por la configuracion del sistema. Intente nuevamente y, si falla, reporte el caso a soporte.

### Una alerta no se actualiza

Actualice la pantalla o ejecute revisiones manuales si tiene permiso. Si continua igual, valide si el elemento relacionado aun esta pendiente.

## 18. Cierre de sesion

Para salir del sistema:

1. Ubique su usuario en la parte inferior del menu lateral.
2. Presione Cerrar sesion.
3. Confirme que vuelve a la pantalla de acceso.

Cerrar sesion protege la informacion del inventario y evita acciones realizadas con un usuario incorrecto.
