import styles from "./AboutPage.module.css";
import hamster from "../assets/hamster.webp";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const handleSearch = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;

    if (target && target.innerText) {
      const searchText = target.innerText;
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchText
      )}`;
      window.open(searchUrl, "_blank");
    }
  };

  return (
    <div className={styles.aboutDiv}>
      <button className={styles.home_btn}>
        <Link to="/" className={styles.homeLink}>
          All Playlists
          <FontAwesomeIcon
            icon={faPlay}
            style={{ color: "#303030", marginLeft: "0.7rem" }}
          />
        </Link>
      </button>
      <h1 className={styles.username}>paulinakatt</h1>
      <img src={hamster} className={styles.hamster}></img>
      <div className={styles.factDiv}>
        <p>7 spellistor</p>
        <p>648 låtar</p>
      </div>
      <h2 className={styles.genreHeader}>My genres</h2>
      <div className={styles.genreDiv}>
        <p className={styles.genre} onClick={handleSearch}>
          Alternative metal
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Post-grunge
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Canadian metal
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Hip hop
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Pop rap
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Electro house
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Bc underground hip hop
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Canadian hip hop
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Acoutstic pop
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Indie anthem-folk
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Indie folk
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Dance pop
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          EDM
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Pop
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Popwave
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Nantes indie
        </p>
        <p className={styles.genre} onClick={handleSearch}>
          Synthwave
        </p>
        <p className={styles.genre} style={{ cursor: "text" }}>
          .. and so on.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
