# WANDA — Moda Urbana San Miguel

Sitio web minimalista y premium para **Wanda Store**, tienda de moda urbana en San Miguel, Buenos Aires.

## 🎨 Concepto de Diseño

Este sitio adopta una **estética editorial minimalista** inspirada en revistas de moda contemporáneas:

- **Tipografía impactante**: Archivo Black para títulos + DM Sans para cuerpo
- **Paleta monocromática**: Negro, blanco y grises con acento rojo (#FF3366)
- **Espaciado generoso**: Respiro visual y jerarquía clara
- **Animaciones sutiles**: Transiciones suaves y naturales
- **Fotografía hero**: Imágenes de alta calidad con tratamiento editorial

El resultado es un sitio que se siente **profesional, contemporáneo y memorable**.

## ✨ Características

✅ Diseño editorial minimalista premium  
✅ Tipografía distintiva (Archivo Black + DM Sans)  
✅ 15 productos demo con imágenes reales  
✅ Carrito lateral con LocalStorage  
✅ Filtros por categoría + búsqueda  
✅ Sistema de pedidos por WhatsApp  
✅ 100% responsive  
✅ Animaciones de entrada suaves  
✅ Mapa con ubicación real  
✅ Información completa de la tienda  

## 📁 Estructura

```
wanda-store/
├── index.html    # HTML semántico
├── styles.css    # Diseño minimalista editorial
├── app.js        # Lógica + productos
└── README.md     # Este archivo
```

## 🚀 Uso

1. **Descargar archivos**
   - Guardá los 3 archivos en la misma carpeta

2. **Abrir sitio**
   - Doble click en `index.html`
   - O usar Live Server en VS Code

3. **Configurar WhatsApp** (opcional)
   - Editá `app.js` línea 7
   - Cambiá el número si es necesario

## 📱 Secciones

### Hero
- Título impactante con animación de entrada
- CTAs claros hacia catálogo y WhatsApp
- Indicador de scroll animado

### Catálogo
- Grid responsive de productos
- Filtros por categoría
- Búsqueda en tiempo real
- Imágenes con efecto hover

### Ubicación
- Información completa de la tienda
- Horarios de atención
- Teléfono de contacto
- Mapa integrado de Google Maps

### Contacto
- Botón directo a WhatsApp
- Mensaje prellenado
- Diseño centrado y limpio

## 🛒 Carrito de Compras

- **Panel lateral** que se desliza desde la derecha
- **Agregar productos** con feedback visual
- **Modificar cantidades** con botones +/-
- **Eliminar productos** individualmente
- **Total dinámico** en tiempo real
- **Persistencia** en LocalStorage
- **Envío por WhatsApp** con mensaje formateado

## 📦 Productos Incluidos

15 productos demo organizados en categorías:

- **Remeras** (5 productos)
- **Pantalones** (4 productos)
- **Vestidos** (3 productos)
- **Buzos & Camperas** (3 productos)
- **Accesorios** (1 producto)

Todos los precios están en **pesos argentinos**.

## ⚙️ Configuración

### Cambiar número de WhatsApp

En `app.js` línea 7:

```javascript
const CONFIG = {
    whatsapp: '5492374812251', // ← Cambiar aquí
    storeName: 'WANDA Store',
    storeAddress: 'Paunero 1512, San Miguel, Buenos Aires'
};
```

### Agregar/Modificar productos

En `app.js` desde línea 15:

```javascript
{
    id: 16,
    name: 'Nombre del producto',
    category: 'remeras', // remeras, pantalones, vestidos, buzos, accesorios
    price: 19900,
    image: 'URL_DE_LA_IMAGEN'
}
```

### Personalizar colores

En `styles.css` líneas 10-20:

```css
:root {
    --black: #0A0A0A;
    --white: #FAFAFA;
    --accent: #FF3366;     /* ← Color de acento */
    --whatsapp: #25D366;
    /* ... */
}
```

## 🎯 Decisiones de Diseño

### ¿Por qué minimalista?
- Pone el **foco en los productos**
- Transmite **profesionalismo** y **calidad**
- Carga **rápida** y **performance óptima**
- Estética **atemporal** que no pasa de moda

### ¿Por qué Archivo Black?
- Tipografía **ultra bold** y **contemporánea**
- Perfecta para **títulos impactantes**
- **Legible** incluso en tamaños grandes
- Carácter **distintivo** y **memorable**

### ¿Por qué DM Sans?
- Tipografía **geométrica** y **moderna**
- Excelente **legibilidad** en cuerpo de texto
- **Peso ligero** para carga rápida
- **Complementa** perfecto con Archivo Black

### ¿Por qué monocromático?
- **Sofisticación** y **elegancia**
- Las **fotos de productos** destacan más
- **Coherencia visual** en todo el sitio
- **Fácil mantenimiento** del código

## 📱 Información de Contacto

**Wanda Store**  
📍 Paunero 1512, San Miguel, Buenos Aires  
📱 +54 237 481-2251

**Horarios:**  
Lunes — Viernes: 9:00 — 20:30  
Sábados: 9:00 — 21:00  
Domingos: Cerrado

## 💻 Tecnologías

- HTML5 semántico
- CSS3 (Grid, Flexbox, Custom Properties)
- JavaScript ES6+ (Vanilla)
- Google Fonts (Archivo Black, DM Sans)
- LocalStorage API
- Google Maps embed

## 🌐 Compatibilidad

✅ Chrome / Edge  
✅ Firefox  
✅ Safari  
✅ Móviles iOS / Android  
✅ Tablets  

## ⚡ Performance

- Sin dependencias externas
- Imágenes optimizadas (Unsplash)
- CSS y JS minificables
- Carga progresiva
- LocalStorage para persistencia

## 📝 Notas Importantes

- Los **productos son demo** (usar imágenes y datos reales)
- Las **imágenes** provienen de Unsplash (libres)
- El sitio funciona **100% local** (excepto fuentes e imágenes)
- **No requiere backend** ni base de datos
- El **carrito persiste** al cerrar el navegador

## 🎨 Mejoras Futuras (Opcional)

- [ ] Sistema de talles y colores
- [ ] Zoom de imágenes de productos
- [ ] Galería múltiple por producto
- [ ] Sistema de favoritos
- [ ] Newsletter
- [ ] Panel de administración
- [ ] Base de datos real
- [ ] Pasarela de pago

## 🆘 Troubleshooting

**Los productos no cargan:**
- Verificá la consola (F12)
- Asegurate que los 3 archivos estén juntos

**El carrito no guarda:**
- Verificá que LocalStorage esté habilitado
- Probá en modo incógnito

**WhatsApp no abre:**
- Verificá el formato del número
- Debe tener código de país (54)

## 📄 Licencia

Código libre para uso comercial.  
Imágenes demo de Unsplash (verificar licencia).

---

**Desarrollado para Wanda Store**  
Sitio web premium — Febrero 2025

*Diseño editorial minimalista inspirado en revistas de moda contemporáneas*
