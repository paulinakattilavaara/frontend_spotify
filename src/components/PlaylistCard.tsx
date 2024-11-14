import playlistImage1 from "../assets/playlist1.jpg";
import playlistImage2 from "../assets/playlist2.jpg";
import playlistImage3 from "../assets/playlist3.jpg";
import playlistImage4 from "../assets/playlist4.jpg";
import playlistImage5 from "../assets/playlist5.jpg";
import styles from "./PlaylistCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface PlaylistCardProps {
  playlist: {
    id: number;
    content: string;
  };
}

type PlaylistImages = {
  [key: number]: string;
};

const playlistImages: PlaylistImages = {
  1: playlistImage1,
  2: playlistImage2,
  3: playlistImage3,
  4: playlistImage4,
  5: playlistImage5,
};

const getImageSrc = (playlistId: number) => {
  return playlistImages[playlistId];
};

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {

  const navigate = useNavigate();

  const showPlaylistPage = (playlistId: number) => {
    navigate(`/playlists/${playlistId}`);
  }



  const imgSrc = getImageSrc(playlist.id);

  return (
    <div className={styles.playlist_card}>
      {playlist.id === 1 && (
        <>
          <p className={styles.playlist_header}>🔄🙌🎧</p>
          <p className={styles.playlist_info}>
            This playlist showcases a diverse mix of hip-hop, pop-rap, and
            electro house tracks, featuring notable artists like NF, Alok and
            Vwills.
          </p>
        </>
      )}
      {playlist.id === 2 && (
        <>
          <p className={styles.playlist_header}>🎸🎧☠</p>
          <p className={styles.playlist_info}>
            This playlist is a solid collection of alternative metal and
            post-grunge tracks, featuring notable artists like Three Days Grace
            and Rise Against.
          </p>
        </>
      )}
      {playlist.id === 3 && (
        <>
          <p className={styles.playlist_header}>💰🙌🗣</p>
          <p className={styles.playlist_info}>
            This playlist showcases a diverse selection of underground hip-hop
            tracks, featuring artists like Snak The Ripper, Merkules, and NF.
          </p>
        </>
      )}
      {playlist.id === 4 && (
        <>
          <p className={styles.playlist_header}>💃🥳📸</p>
          <p className={styles.playlist_info}>
            This playlist is a high-energy mix of dance-pop and EDM tracks,
            featuring popular artists like Calvin Harris and David Guetta.
          </p>
        </>
      )}
      {playlist.id === 5 && (
        <>
          <p className={styles.playlist_header}>🎹🎼💌</p>
          <p className={styles.playlist_info}>
            This playlist is a blend of acoustic pop, indie anthem-folk, and
            indie folk, featuring standout tracks from artists like The
            Perishers and Elina.
          </p>
        </>
      )}

      <div className={styles.playlist_div}>
        <img
          src={imgSrc}
          className={styles.playlist_images}
          alt="Playlist image"
        />
        <button className={styles.playlist_btn} onClick={() => showPlaylistPage(playlist.id)}>
          <span className="btn_text">Explore Playlist&nbsp;&nbsp;</span>
          <FontAwesomeIcon icon={faMusic} style={{ color: "#1abc54" }} />
        </button>
      </div>
    </div>
  );
};

export default PlaylistCard;
