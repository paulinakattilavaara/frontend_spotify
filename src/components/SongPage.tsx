import { useParams, useNavigate, useLocation } from "react-router-dom";
import styles from "./SongPage.module.css";
import {
  faChevronLeft,
  faCompactDisc,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SongPage = () => {
  const { id } = useParams<{ id: string }>();

  const [song, setSong] = useState<Song[]>([]);

  const navigate = useNavigate();

  const location = useLocation();
  const playlistId = location.state?.playlistId;

  const backToHomePage = () => {
    navigate(`/playlists/${playlistId}`);
  };

  const url = `https://backend-spotify-xfin.onrender.com/songs/${id}`;

  type Song = {
    id: number;
    title: string;
    artist: string;
    spotify_url: string;
    added_by: string;
    playlist_id: number;
  };

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSong(data);
      } catch (err) {
        console.error("Not able to fetch song: ", err);
      }
    };
    fetchSong();
  }, []);

  return (
    <>
      <button className={styles.home_btn} onClick={backToHomePage}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={styles.fontAweChevron}
        />
        Back to playlist
      </button>
      {song.map((song) => (
        <div className={styles.songDiv} key={song.id}>
          <FontAwesomeIcon
            icon={faCompactDisc}
            className={styles.fontAweDisc}
          />
          <p className={styles.songText}>{song.title}</p>
          <p className={styles.songText}>{song.artist}</p>
          <button
            className={styles.songButton}
            onClick={() => window.open(song.spotify_url, "_blank")}
          >
            Listen on Spotify
          </button>
        </div>
      ))}
    </>
  );
};

export default SongPage;
