import { propiedades_venta } from './arraysPropiedades.js';
import { propiedades_alquiler } from './arraysPropiedades.js';

console.log('El archivo JS se ha cargado correctamente') 

const propiedadesVentaIndex = document.querySelector("#propiedades-venta-index");

for (let i = 0; i < 3; i++) {
    const templateVentaIndex = `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedades_venta[i].src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedades_venta[i].nombre}
                </h5>
                <p class="card-text">
                  ${propiedades_venta[i].descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${propiedades_venta[i].ubicacion} 
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedades_venta[i].habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedades_venta[i].bathrooms} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>
                  ${propiedades_venta[i].costo}
                </p>
                <p class="${propiedades_venta[i].smoke ? "text-success" : "text-danger"}">
                  <i class="${propiedades_venta[i].smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> 
                  ${propiedades_venta[i].smoke ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class="${propiedades_venta[i].pets ? "text-success" : "text-danger"}">
                <i class="${propiedades_venta[i].pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i> 
                ${propiedades_venta[i].pets ? "Mascotas permitidas" : "No se permiten mascotas"}
              </p>
              </div>
            </div>
        </div>
    `;
    propiedadesVentaIndex.innerHTML += templateVentaIndex;
}

const propiedadesAlquilerIndex = document.querySelector("#propiedades-alquiler-index");

for (let j = 0; j < 3; j++) {
    const template = `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propiedades_alquiler[j].src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedades_alquiler[j].nombre}
                </h5>
                <p class="card-text">
                  ${propiedades_alquiler[j].descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  ${propiedades_alquiler[j].ubicacion} 
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedades_alquiler[j].habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedades_alquiler[j].bathrooms} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>
                  ${propiedades_alquiler[j].costo}
                </p>
                <p class="${propiedades_alquiler[j].smoke ? "text-success" : "text-danger"}">
                  <i class="${propiedades_alquiler[j].smoke ? "fas fa-smoking" : "fas fa-smoking-ban"}"></i> 
                  ${propiedades_alquiler[j].smoke ? "Permitido fumar" : "No se permite fumar"}
                </p>
                <p class="${propiedades_alquiler[j].pets ? "text-success" : "text-danger"}">
                <i class="${propiedades_alquiler[j].pets ? "fas fa-paw" : "fa-solid fa-ban"}"></i> 
                ${propiedades_alquiler[j].pets ? "Mascotas permitidas" : "No se permiten mascotas"}
              </p>
              </div>
            </div>
        </div>
    `;
    propiedadesAlquilerIndex.innerHTML += template;
}