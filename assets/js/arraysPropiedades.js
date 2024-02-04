const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        bathrooms: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        bathrooms: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        bathrooms: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa con maravillosa vista del bosque',
        src: 'https://images.squarespace-cdn.com/content/v1/617ad962ce1852409c74d318/be2da685-d234-449c-a8e5-66d930e046e5/Chowchilla+Mountain-54.jpg?format=1500w',
        descripcion: 'Esta casa posee una increíble vista del bosque, internada en la naturaleza',
        ubicacion: '432 Central Valley, Forest View, PA 21987',
        habitaciones: 4,
        bathrooms: 3,
        costo: 8000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Cabaña a la orilla del lago',
        src: 'https://a0.muscache.com/im/pictures/75ea6b31-4c91-4416-8792-77ecd4fe5509.jpg?im_w=480',
        descripcion: 'La cabaña entrega una exclusiva entrada al lago con un ambiente de relajo',
        ubicacion: '554 Lake Valley, Sunset Log, LA 90001',
        habitaciones: 2,
        bathrooms: 2,
        costo: 9500,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa de campo para vivir en familia',
        src: 'https://i0.wp.com/onechelofanadventure.com/wp-content/uploads/2020/11/Glass-House-Airbnb-in-Hill-Country.png?fit=750%2C486&ssl=1',
        descripcion: 'Hermosa localidad para vivir rodeado de la maravillosa naturaleza',
        ubicacion: '777 Country Road, Lake Bay, LA 32654',
        habitaciones: 5,
        bathrooms: 3,
        costo: 7800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa céntrica en la ciudad',
        src: 'https://a0.muscache.com/im/pictures/miso/Hosting-619441009319934273/original/1ee57dd4-31f9-46cd-bc1b-04d89fb627e3.jpeg?im_w=720',
        descripcion: 'Casa con perfecta ubicación en medio de la ciudad',
        ubicacion: '963 Harrison Avenue, Long Island, NJ 25793',
        habitaciones: 3,
        bathrooms: 2,
        costo: 6600,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Departamento exclusivo con amplios espacios',
        src: 'https://mediavault.point2.com/p2h/listing/d079/5cf6/2c28/a54ad7ddbe1b3b6da8b0/wm_large.jpg',
        descripcion: 'Este departamento ofrece espacios de relajo para compartir',
        ubicacion: '121 Luxury Avenue, Chicago, IL 88777',
        habitaciones: 4,
        bathrooms: 3,
        costo: 12400,
        smoke: false,
        pets: false
    }
]

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        bathrooms: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        bathrooms: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        bathrooms: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cómodo apartamento en la naturaleza',
        src: 'https://149562642.v2.pressablecdn.com/wp-content/uploads/airbnb-renta-corta-hospedaje-750x536.jpg',
        descripcion: 'Este espectacular apartamento te entrega una zona de relajo en medio de la naturaleza',
        ubicacion: '987 Park Avenue, Leaf Town, CA 74196',
        habitaciones: 2,
        bathrooms: 1,
        costo: 2300,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Exclusivo departamento de relajo',
        src: 'https://media.cntraveler.com/photos/589df60a9b67416638b3bf66/16:9/w_1280,c_limit/luxury-retreats-cr-courtesy.jpg',
        descripcion: 'Este departamento ofrece vista de las colinas y el océano para un relajo inolvidable',
        ubicacion: '987 Hill State, Chicago, IL 73296',
        habitaciones: 3,
        bathrooms: 4,
        costo: 3350,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Mansión dentro del lago',
        src: 'https://cdn1.matadornetwork.com/blogs/1/2022/06/social-north-carolina-airbnb-1.jpeg',
        descripcion: 'Exclusiva mansión inmersa en el lago para disfrutar y relajarse en familia',
        ubicacion: '741 Lake Avenue, Water Slide, NC 74196',
        habitaciones: 6,
        bathrooms: 4,
        costo: 4500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Casa de relajo para alquilar con yates',
        src: 'https://www.refinery29.com/images/11023021.jpg?crop=40%3A21',
        descripcion: 'Recorre el hermoso lago en los yates que son parte de la casa y aprecia la vista',
        ubicacion: '223 Lake Avenue, Water Slide, NC 12457',
        habitaciones: 3,
        bathrooms: 2,
        costo: 2850,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento en la ciudad',
        src: 'https://corporatecomforts.com/wp-content/uploads/2021/04/corporatecomforts-88450-corporate-housing-airbnb-blogbanner1.jpg',
        descripcion: 'Este apartamento tiene todo lo que necesitas a menos de 10 minutos caminando',
        ubicacion: '685 Big Avenue, City Town, NY 35946',
        habitaciones: 2,
        bathrooms: 2,
        costo: 3100,
        smoke: true,
        pets: false
    }
]

export { propiedades_venta };
export { propiedades_alquiler };