import javaLanjutan from "./assets/Java2.png"
import java from "./assets/Java + Thmylef.png"
import c from "./assets/C.png"
import nodejs from "./assets/NodeJs+HTML5.png"
import reactExpress from "./assets/React+NodeJs.png"
import portfolio from "./assets/portfolio.png"
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
      "This movie website provides movie trailers and features such as search, viewing available movies from the database, complete with advanced filtering options and an interactive UI.There is also an admin login feature that provides its own dashboard after admin login. The results of React JS training, Java Spring Boot using Spring Security",
    tech: ["Java","React", "SpringBoot", "MariaDb", "JPA/Hibernate", "Spring Security + JWT", "Apache POI","Vite","Tailwind CSS"],
    github: "https://github.com/AryaSegara/Project-Java-KenMovie ",
    type : "REST API",
    bagian : "FULL STACK",
    visit: "",
  },
  {
    title: "Shoes Store",
    image: javaLanjutan,
    description:
        "This RESTful API is designed to support an e-commerce system focused on selling shoe products. It provides various endpoints that allow users to perform CRUD (Create, Read, Update, Delete) operations on shoe product data, categories, users, and purchase transactions. Key features of this API include user authentication (login and registration), shoe catalog management, product search, shopping cart management, and order processing.Comprehensive documentation is also provided using Swagger or Postman to facilitate integration by other developers.",
    tech: ["Java", "SpringBoot","Swagger", "MariaDb", "JPA/Hibernate","Apache PDFBox", "Spring MailSender", "Spring Security + JWT", "Apache POI"],
    github: "https://github.com/AryaSegara/uasjavalanjutan",
    type : "REST API",
    bagian : "BACKEND",
    visit: "",
  },
  {
    title: "Handphone Store",
    image: java,
    description:
        "This website is an e-commerce platform specifically designed to make it easier for users to shop for mobile phones online. Users can search for the type of phone they need using the search feature or browse the various product options available by brand or price. Each product can be easily added to a shopping cart, allowing users to collect several options before completing the transaction. After selecting the desired phone, users can go to the shopping cart page to review the order details and proceed to payment. Customers can also cancel if the items in the cart do not match their wishes.",
    tech: ["Java","Thymeleaf","MariaDb","SpringBoot","HTML", "CSS", "JS"],
    github: "https://github.com/AryaSegara/ecommers",
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
    github: "https://github.com/AryaSegara/Project-HTML",
    type : "UI",
    bagian : "FRONT-END",
    visit: "",
  },
    {
    title: "Project Data - Book",
    image: nodejs,
    description:
        "Data-Book is a personal web application I developed to manage and catalog a digital book collection. This project was built as a solution to simplify the recording, searching, and management of book data. The application features a clean and functional interface, with a real-time search feature and a dedicated admin panel for data management.This project successfully achieved its goal of being a functional and easy-to-use personal catalog system. Developing this project also deepened my understanding of full-stack web application architecture, relational database management, and implementing secure and efficient backend features.",
    tech: ["NodeJs","HTML","MySQL", "CSS", "JS"],
    github: "https://github.com/AryaSegara/project-data-buku",
    type : "Website",
    bagian : "FULL STACK",
    visit: "",
  },
    {
    title: "Ken Book Inventory",
    image: reactExpress,
    description:
    "Data-Book is a full-stack web application I built to present a book catalog to the public, complete with a separate admin panel for data management. The project combines a modern, interactive frontend with a robust backend. Public users can easily browse and search the book collection, while admins have full control over the content through a secure dashboard.The project is designed with a clear client-server architecture: React.js as the client handling data presentation and Node.js/Express.js as the server providing data through an API.The main goal of this project was to build a scalable full-stack application, practice component-based development with React, and implement a secure content management system. The result is a functional, modern, and easy-to-manage book catalog platform.",
    tech: ["React","NodeJs","MySQL","JS","Vite","Tailwind CSS"],
    github: "https://github.com/AryaSegara/Ken-Book-Inventory",
    type : "REST API",
    bagian : "FULL STACK",
    visit: "",
  },
    {
    title: "My Portfolio",
    image: portfolio,
    description:
    "Data-Book is a full-stack web application I built to present a book catalog to the public, complete with a separate admin panel for data management. The project combines a modern, interactive frontend with a robust backend. Public users can easily browse and search the book collection, while admins have full control over the content through a secure dashboard.The project is designed with a clear client-server architecture: React.js as the client handling data presentation and Node.js/Express.js as the server providing data through an API.The main goal of this project was to build a scalable full-stack application, practice component-based development with React, and implement a secure content management system. The result is a functional, modern, and easy-to-manage book catalog platform.",
    tech: ["React","TS","Vite","Tailwind CSS"],
    github: "https://github.com/AryaSegara/personal-profile-aryasegara",
    type : "REST API",
    bagian : "FULL STACK",
    visit: "",
  },
  {
    title: "Helm Service",
    image: c,
    description:
    "This project is a simulation of a helmet service management system built entirely in the C programming language. The application runs in a console environment (Command-Line Interface) and is designed to demonstrate the implementation of complex business logic, data management, and authentication systems from scratch without the aid of external frameworks or databases.The goal of this project is to build a functional application from scratch in C, demonstrating skills in problem-solving, system flow design, and low-level data management. This project successfully creates a logical and structured system, demonstrating mastery of core procedural programming concepts.",
    tech: ["C Language", "Command-Line Interface (CLI)", "File Handling"],
    github: "https://github.com/AryaSegara/HELM_SERVICES ",
    type : "Console",
    bagian : "CONSOLE",
    visit: "",
  },


];