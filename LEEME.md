# Sitio web profesional

Sitio estático (HTML, CSS y JavaScript) — no requiere instalar nada.

## Ver el sitio en tu computadora
Doble clic en `index.html` → se abre en tu navegador.

Opcional (recomendado si usas VS Code): instala la extensión **Live Server**, clic derecho en `index.html` → *Open with Live Server*. Así se recarga solo cada vez que guardas.

## Estructura
```
sitio-profesional/
├── index.html        Estructura de la página
├── css/styles.css    Diseño (colores en las variables de :root)
├── js/contenido.js   ← TUS DATOS: perfil, experiencia, proyectos, contacto
├── js/main.js        Lógica (no necesitas tocarlo)
├── img/              Fotos e imágenes de proyectos
└── cv/               Tu CV en PDF
```

## Actualizar el portafolio
1. Abre `js/contenido.js`.
2. Edita los textos o copia un bloque de proyecto para agregar uno nuevo.
3. Imágenes: guárdalas en `img/proyectos/` y pon la ruta en `imagen`, ej. `"img/proyectos/red-sucursal.jpg"` (formato 16:10 recomendado, ~1200×750 px).
4. Foto de perfil: `img/perfil.jpg` (cuadrada) y en `perfil.foto` pon `"img/perfil.jpg"`.
5. CV: `cv/CV.pdf` y en `perfil.cv` pon `"cv/CV.pdf"`.
6. Guarda y recarga el navegador (F5).

## Siguiente paso: publicar con dominio propio
1. Comprar el dominio (ej. Namecheap, Cloudflare Registrar, GoDaddy).
2. Subir esta carpeta a un hosting estático gratuito: **Netlify**, **Cloudflare Pages** o **GitHub Pages**.
3. Conectar el dominio desde el panel del hosting (configurar DNS) — el HTTPS es automático.
4. Formulario de contacto: hoy abre el correo del visitante; al publicar se puede conectar a Netlify Forms o Formspree para recibir mensajes directamente.
