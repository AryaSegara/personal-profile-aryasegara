// import guitar from "./assets/guitar.png";
// import c from "./assets/c.png";
// import music from "./assets/musik.png";
// import drakorinaja from "./assets/drakorinaja.png";

/**
 * INTERFACE: Mendefinisikan struktur atau "cetak biru" dari setiap objek proyek.
 * Ini membantu TypeScript memeriksa apakah data Anda konsisten dan benar.
 */
export interface Project {
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  type : string;
  bagian : string;
  visit: string;
}

/**
 * TYPE ANNOTATION: Terapkan interface ke array Anda dengan ': Project[]'.
 * Ini memberitahu TypeScript bahwa 'projects' adalah sebuah array yang
 * setiap isinya WAJIB mengikuti struktur dari interface 'Project'.
 */
export const projects: Project[] = [
  {
    title: "Ken Movie",
    image: "https://i.pinimg.com/736x/f9/09/ff/f909ff5250d6b365fd6e0fc69d6c712f.jpg",
    description:
      "HayMart POS API adalah RESTful backend berbasis Spring Boot 3.4.4 untuk mendukung aplikasi kasir (POS) modern. Menyediakan autentikasi JWT, manajemen kasir & produk, transaksi pembelian, laporan penjualan, dan dokumentasi Swagger. Cocok untuk minimarket, apotek, atau toko retail lainnya.",
    tech: ["Java","React", "SpringBoot", "MariaDb", "JPA/Hibernate", "Spring Security + JWT", "Apache POI"],
    github: "https://github.com/AryaSegara/Project-Java-KenMovie ",
    type : "REST API",
    bagian : "FULL STACK",
    visit: "",
  },
  {
    title: "Ratatouille",
    image: "https://i.pinimg.com/736x/e9/bd/17/e9bd17a2a42b6a100f8009663f16715d.jpg",
    description:
        "This website is a dedicated platform for culinary enthusiasts, providing a variety of food and beverage menus complete with information such as dish descriptions, menu categories, prices, customer ratings, and availability. With an attractive interface and intuitive navigation, this website is designed to provide the best experience for restaurant visitors online.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/AryaSegara/Project-HTML ",
    type : "UI",
    bagian : "FRONT-END",
    visit: "",
  },

];