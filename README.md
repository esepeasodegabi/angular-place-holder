# PlaceHolder

En este proyecto se integra angular material y flex-layout, para mostrar datos de un api de post consumida a través de un backend for frontend desarrollado en node, usando nestjs.

# Aclaraciones generales
Existen varias estrategias para compartir la informacón entre componentes. @Input @Output, Servicios, Providers o ViewChild etc... En este caso compartir la lista de usuarios diferentes en algunos de los componentes, ahorraba llamadas la backend. Con esa idea y dado que no era información sensible, la he compartido mediante localstorage, lo que permitía, además de un tiempo de deasrrollo más corto, ahorrar llamadas en futuras sesiones. Si bien, en caso de que esto llegase a producción habría que poner mecanismos de refresco.

# Test
Se ha alcanzado el nivel de cobertura de código solicitado en la prueba.

# Temas pendientes
Se han obviado sistemas de internacionalización, de accesibilidad, y tampoco se ha implementado ningún sistema de seguridad de la información, ni a nivel de api, ni guards.

Dada la ausencia de un contexto concreto o un propósito para la esta aplicación, se tomaron muchas decisiones de contexto, en al diseño de la página, elementos de angular material donde mostrar la información, más influidas por criterios de velocidad que por decisiones de diseño.
