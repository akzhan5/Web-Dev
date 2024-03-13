import {Categories, Category} from './categories'
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  addressUrl: string;
  link: string;
  category: Category;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Смарт-часы Apple Watch',
    price: 119995,
    description: 'Смарт-часы Apple Watch SE 2 Gen (2022) 40 мм midnight',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1c/h70/64533889384478.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2022-40-mm-midnight-106362731/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-watch-se-2-gen-2022-40-mm-midnight-106362731%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[0],
    likes: 92
  },
  {
    id: 2,
    name: 'Смартфон Samsung Galaxy',
    price: 120256,
    description: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fsamsung-galaxy-a23-6-gb-128-gb-chernyi-104348541%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[0],
    likes: 143
  },
  {
    id: 3,
    name: 'Смартфон Apple iPhone 13',
    price: 294041,
    description: 'Смартфон Apple iPhone 13 128Gb черный',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-iphone-13-128gb-midnight-chernyi-102298404%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[0],
    likes: 912
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 15',
    price: 622916,
    description: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-iphone-15-pro-max-256gb-seryi-113138420%2F%3Fc%3D750000000",
    category: Categories[0],
    likes: 999
  },
  {
    id: 5,
    name: 'Наушники',
    price: 16500,
    description: 'Наушники JBL Tune 510BT белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h52/33973207105566/jbl-tune-510bt-belyj-101420096-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/jbl-tune-510bt-belyi-101420096/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fjbl-tune-510bt-belyi-101420096%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[0],
    likes: 15
  },
  {
    id: 6,
    name: 'Морозильник',
    price: 141000,
    description: 'Морозильник Atlant М 7184-003 240 л белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h33/h27/63768071667742.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/atlant-m-7184-003-240-l-belyi-2800007/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fatlant-m-7184-003-240-l-belyi-2800007%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[1],
    likes: 234
  },
  {
    id: 7,
    name: 'Пылесос',
    price: 69400,
    description: 'Пылесос Karcher VC 3 Premium белый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hcb/h48/63767046193182.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/karcher-vc-3-premium-belyi-3700709/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fkarcher-vc-3-premium-belyi-3700709%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[1],
    likes: 234
  },
  {
    id: 8,
    name: 'Стиральная машина LG F2J3NS0W белый',
    price: 161334,
    description: 'установка: отдельностоящая, управление: электронное (интеллектуальное), максимальная загрузка белья: 6 кг, скорость вращения при отжиме: 1200 об/мин',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fresources.cdn-kaspi.kz%2Fimg%2Fm%2Fp%2Fhd4%2Fh94%2F63804412854302.jpg%3Fformat%3Dgallery-medium",
    category: Categories[1],
    likes: 345
  },
  {
    id: 9,
    name: 'Кухонная плита ARG 24DME4R109 серебристый',
    price: 166790,
    description: 'варочная панель: электрическая, духовка: электрическая, управление: механическое, таймер: есть',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h07/hf9/64347306229790.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/arg-24dme4r109-serebristyi-101367366/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Farg-24dme4r109-serebristyi-101367366%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[1],
    likes: 50
  },

  {
    id: 10,
    name: 'Посудомоечная машина Hansa ZWM536WH белый',
    price: 114500,
    description: 'установка: отдельностоящая, вместимость: 6 комплектов, класс энергопотребления: A+',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd7/had/63785585868830.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/hansa-zwm536wh-belyi-100131270/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fhansa-zwm536wh-belyi-100131270%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[1],
    likes: 99
  },

  {
    id: 11,
    name: 'Ноутбук Apple MacBook Air',
    price: 498977,
    description: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-macbook-air-13-mgnd3-zolotistyi-100797576%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[2],
    likes: 234
  },
  {
    id: 12,
    name: 'Планшет Apple iPad',
    price: 159990,
    description: 'Планшет Apple iPad 2021 10.2 64Gb Wi-Fi серый',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h54/48110926659614/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fapple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[2],
    likes: 234
  },
  {
    id: 13,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 169990,
    description: 'диагональ экрана: 15.6 дюйм, процессор: Intel Pentium Gold 7505, видеокарта: Intel UHD Graphics',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Flenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[2],
    likes: 64
  },
  {
    id: 14,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 369990,
    description: 'диагональ экрана: 15.6 дюйм, процессор: AMD Ryzen 5 4600H, видеокарта: nVidia GeForce GTX1650',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fasus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[2],
    likes: 345
  },
  {
    id: 15,
    name: 'Подставка для ноутбука X-Game X7',
    price: 11420,
    description: 'тип: активное охлаждение, диагональ ноутбука: 19, количество вентиляторов: 6',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h17/33910310535198/x-game-x7-cernyj-101162094-1-Container.jpg",
    addressUrl: 'https://kaspi.kz/shop/p/x-game-x7-101162094/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fx-game-x7-101162094%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[2],
    likes: 23
  },
  {
    id: 16,
    name: 'Косметичка',
    price: 1050 ,
    description: 'Washbag косметичка нейлон 20X30 см',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hed/h8c/65785968295966.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/washbag-kosmetichka-neilon-20x30-sm-107590533/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fwashbag-kosmetichka-neilon-20x30-sm-107590533%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[3],
    likes: 41
  },
  {
    id: 17,
    name: 'Зеркало настольное',
    price: 1850 ,
    description: 'Jordan&Judy зеркало настольное NV026',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hda/h6a/84844401360926.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/jordan-judy-zerkalo-nastol-noe-nv026-102940367/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fjordan-judy-zerkalo-nastol-noe-nv026-102940367%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[3],
    likes: 548
  },
  {
    id: 18,
    name: 'Сыворотка Ordinary',
    price: 3143,
    description: 'The Ordinary Niacinamide 10%+Zinc 1% сыворотка 30 мл',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h8f/ha4/83674018021406.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/the-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fthe-ordinary-niacinamide-10-zinc-1-syvorotka-30-ml-100703687%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[3],
    likes: 354
  },
  {
    id: 19,
    name: 'Dr.Ceuracle крем',
    price: 6195,
    description: 'Dr.Ceuracle Pro Balance Biotics Moisturizer крем 100 мл',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h63/h92/64090050527262.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/dr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fdr-ceuracle-pro-balance-biotics-moisturizer-krem-100-ml-100675870%2F%3Fc%3D196220100%23!%2Fitem",
    category: Categories[3],
    likes: 978
  },
  {
    id: 20,
    name: 'SPF-крем',
    price: 4890,
    description: 'Round Lab крем Birch Juice Moisturizing SPF50+ для лица 50 мл',
    rating: 5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h58/h4a/64516795826206.jpg?format=gallery-medium",
    addressUrl: 'https://kaspi.kz/shop/p/round-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927/?c=196220100#!/item',
    link: "https://wa.me/77478834241?text=https%3A%2F%2Fkaspi.kz%2Fshop%2Fp%2Fround-lab-krem-birch-juice-moisturizing-spf50-dlja-litsa-50-ml-105263927%2F%3Fc%3D750000000",
    category: Categories[3],
    likes: 562
  },
];