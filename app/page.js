import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.barre}></div>
      <div className={styles.description}>
        <div>
          <p>
          Fait par Hesschentier Gabin.
          </p>
        </div>
      </div>

      <div className={styles.profil}>
        <p>
        Je suis passionné par la technologie et engagé dans la préservation de notre environnement. C'est pourquoi j'ai conçu ce portfolio avec une approche respectueuse de l'environnement, en utilisant des pratiques de développement durable et en minimisant mon empreinte carbone.

        À travers ces pages, je vous invite à découvrir qui je suis, mes compétences, mes projets et mes réalisations. Chaque ligne de code, chaque conception graphique a été pensée avec soin pour refléter ma personnalité, mes valeurs et mes aspirations professionnelles.

        En parcourant ce portfolio, vous en apprendrez davantage sur mes expériences, mes passions et mes réalisations. Des projets de programmation aux initiatives de développement durable, je suis fier de partager mon parcours et mes réalisations avec vous.

        N'hésitez pas à explorer et à me contacter si vous souhaitez en savoir plus sur moi ou sur mes projets. Merci de votre visite et de votre intérêt pour mon travail !
        </p>
        <Image
          className={styles.logo}
          src="/MicrosoftTeams-image.png"
          alt="image gabin"
          width={195}
          height={270}
          priority
        />
      </div>

      <div className={styles.ecriture}>
        <Image
          src="/infogerance.jpg"
          alt="info"
          width={432}
          height={243}
          priority
        />
          <p>
          Au collège, mes premiers pas dans le monde du développement débutèrent avec Scratch, où je découvris les fondements de la programmation. Au lycée, Python devint mon nouveau terrain de jeu, m'offrant des défis plus complexes et une compréhension plus approfondie des concepts algorithmiques. Aujourd'hui, mon parcours dans le développement s'est enrichi, explorant divers langages et technologies. De JavaScript à Java, en passant par HTML/CSS et bien d'autres, chaque nouveau langage me permet d'élargir mes horizons et de relever des défis toujours plus captivants. Mon voyage dans le monde du développement ne cesse de m'émerveiller, et j'aborde chaque ligne de code avec passion et détermination.
          </p>
      </div>

      <div className={styles.profil}>
        <p>
        Au cours de mon parcours, mes passions ont été mes guides, façonnant chaque aspect de ma vie. Le basket-ball, avec ses dribbles audacieux et ses tirs précis, m'a enseigné la discipline et la détermination, des valeurs qui transcendent le terrain de jeu pour enrichir chaque aspect de ma vie. Les jeux vidéo, avec leurs mondes fantastiques et leurs défis intrigants, ont stimulé mon imagination et ont nourri ma curiosité, m'incitant à explorer de nouveaux horizons et à repousser les limites de la créativité. Plonger dans l'univers captivant des animes m'a offert une échappatoire vers des récits épiques et des personnages inoubliables, éveillant en moi une passion pour l'art de l'animation et la narration visuelle. Et puis, il y a Oxanne et Gipsy, mes adorables compagnons à quatre pattes, dont l'amour inconditionnel et la loyauté sans faille illuminent mes journées et me rappellent la beauté de la connexion entre humains et animaux. Ensemble, ces passions forment le tissu de mon existence, m'inspirant à poursuivre mes rêves avec audace et à embrasser chaque moment avec gratitude et émerveillement.
        </p>
        <Image
          className={styles.logo}
          src="/chien.jpg"
          alt="chien"
          width={195}
          height={270}
          priority
        />
      </div>

      <div className={styles.ecriture}>
        <Image
          src="/batiment.jpg"
          alt="lycee"
          width={432}
          height={243}
          priority
        />
          <p>
          Mon parcours scolaire a débuté au Collège du Pévèle à Orchies, où j'ai acquis les bases de mon éducation. C'est là que ma curiosité pour les sciences et la technologie a été éveillée, notamment grâce à des projets passionnants en informatique.

          Au Lycée Charlotte Perriand à Genech, j'ai choisi de me spécialiser en Mathématiques, Physique et NSI (Numérique et Sciences Informatiques). Ces matières m'ont permis d'approfondir mes connaissances dans le domaine de l'informatique et de développer des compétences solides en programmation.

          Après avoir obtenu mon baccalauréat, j'ai poursuivi mon parcours à l'école d'ENIGMA à Lille, où je suis actuellement en première année. Cette école renommée m'offre l'opportunité d'approfondir mes connaissances en informatique et de me spécialiser davantage dans ce domaine qui me passionne tant. C'est ici que je continue à cultiver ma passion pour la programmation et à me préparer pour un avenir prometteur dans le monde de la technologie.
          </p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://github.com/GabinHessc"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github
          </h2>
          <p>Pour vous diriger vers mon GitHub</p>
        </a>

        <a
          href="/CV2024.pdf"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            CV
          </h2>
          <p>Pour consulter mon cv et le télécharger</p>
        </a>

        <a
          href="https://www.linkedin.com/in/gabin-hesschentier-655873293/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin
          </h2>
          <p>Pour accéder directement à mon Linkedin.</p>
        </a>

        <a
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:gabinhessc@gmail.com">
          <h2>
            Mail
          </h2>
          <p>
            M'envoyer directement un mail.
          </p>
        </a>
      </div>
    </main>
  );
}
