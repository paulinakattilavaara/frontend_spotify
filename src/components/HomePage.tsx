import PlaylistCard from "./PlaylistCard";
import { useState, useEffect } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";

const HomePage = () => {
  type Playlist = {
    id: number;
    content: string;
  };

  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [loading, setLoading] = useState(false);
  const url = "https://backend-spotify-xfin.onrender.com/playlists";

  useEffect(() => {
    const fetchPlaylists = async () => {
      const loadingTimer = setTimeout(() => {
        setLoading(true);
      }, 2000);

      try {
        const response = await fetch(url);
        const data = await response.json();
        setPlaylists(data);
      } catch (err) {
        console.error("Error fetching playlists:", err);
      } finally {
        clearTimeout(loadingTimer);
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading_div}>
        <BarLoader color="#ddffee" width={300} />
      </div>
    );
  }

  return (
    <>
      {!loading && playlists.length > 0 && (
        <h1 className={styles.heading}>
          <Link to="/user">paulinakatt</Link>
          <span className={styles.heading_2}>'s playlists</span>
        </h1>
      )}
      <div className={styles.playlists_home}>
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
