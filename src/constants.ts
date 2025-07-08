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
    github: "https://github.com/Wahyudi120505/haymart-pos-api",
    type : "REST API",
    bagian : "FULL STACK",
    visit: "",
  },
  {
    title: "Sound Sphere",
    image: "",
    description:
      "Platform web modern untuk streaming musik yang terhubung dengan Spotify API. Aplikasi ini mencakup fitur seperti autentikasi pengguna, pencarian lagu, pemutaran musik, manajemen playlist, dan antarmuka pengguna yang responsif serta intuitif. Memberikan pengalaman mendengarkan musik yang cepat, aman, dan menyenangkan di berbagai perangkat.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/Wahyudi120505/AHMAD_WAHYUDI_TANJUNG",
    type : "REST API",
    bagian : "Front-End",
    visit: "",
  },

];