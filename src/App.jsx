import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

//criação de posts dentro do array

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/anderson-nunes.png",
      name: "Anderson Nunes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-10-07 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/anderson-nunes.png",
      name: "Everton Nunes",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fizno NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "paragraph",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-11-06 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            // post = variável que esta armazendo os postes.
            // usar o método map() para fazer uma iteração, para retornar algo.
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
