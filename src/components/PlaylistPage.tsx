import styles from "./PlaylistPage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const PlaylistPage = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [loading, setLoading] = useState(false);
  const [startNumber, setStartNumber] = useState<number | undefined>(undefined);

  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate("/");
  };

  type Song = {
    track: {
      name: string;
      artists: { name: string }[];
      external_urls: { spotify: string };
    };
    added_by: { id: string };
  };

  type Playlist = {
    id: number;
    content: Song[];
  };

  const url = `https://backend-spotify-xfin.onrender.com/playlists/${id}`;

  useEffect(() => {
    const fetchPlaylist = async () => {
      const loadingTimer = setTimeout(() => {
        setLoading(true);
      }, 2000);

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.content && typeof data.content === "string") {
          const parsedContent = JSON.parse(data.content);
          setPlaylist({ ...data, content: parsedContent });
        } else {
          setPlaylist(data);
        }
      } catch (error) {
        console.error("Not able to fetch songs: ", error);
      } finally {
        clearTimeout(loadingTimer);
        setLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const playlistStartNumber = [
    { id: 1, startNumber: 1 },
    { id: 2, startNumber: 97 },
    { id: 3, startNumber: 197 },
    { id: 4, startNumber: 247 },
    { id: 5, startNumber: 347 },
  ];

  useEffect(() => {
    if (!playlist) {
      return;
    } else {
      const startNumber = playlistStartNumber.find(
        (p) => p.id === playlist.id
      )?.startNumber;
      setStartNumber(startNumber);
    }
  }, [playlist]);

  const handleSongClick = (startNumber: number | undefined, index: number) => {
    if (startNumber) {
      const songId = startNumber + index;
      if (playlist) {
        navigate(`/songs/${songId}`, { state: { playlistId: playlist.id }});
      }
    }
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    song: Song
  ) => {
    e.stopPropagation();
    window.open(
      song.track.external_urls.spotify,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      <button className={styles.home_btn} onClick={backToHomePage}>
        All Playlists
        <FontAwesomeIcon
          icon={faPlay}
          style={{ color: "#303030", marginLeft: "0.7rem" }}
        />
      </button>
      <h1 className={styles.playlistHeader}>
        {playlist && playlist.id === 1 && "🔄🙌🎧"}
        {playlist && playlist.id === 2 && "🎸🎧☠"}
        {playlist && playlist.id === 3 && "💰🙌🗣"}
        {playlist && playlist.id === 4 && "💃🥳📸"}
        {playlist && playlist.id === 5 && "🎹🎼💌"}
      </h1>
      <p className={styles.username}>by paulinakatt</p>
      {playlist && (
        <div>
          {playlist.content.map((song, index) => (
            <div
              key={index}
              className={styles.songDiv}
              onClick={() => handleSongClick(startNumber, index)}
            >
              <div className={styles.innerSongDiv}>
                <p className={styles.trackIndex}>{index + 1}</p>
                <p className={styles.trackName}>{song.track.name}</p>
                <p className={styles.trackArtist}>
                  {song.track.artists.map((artist) => artist.name).join(", ")}
                </p>
              </div>
              <button
                className={styles.songButton}
                onClick={(e) => handleButtonClick(e, song)}
              >
                Listen on Spotify
                <FontAwesomeIcon
                  icon={faPlay}
                  style={{ color: "#1abc54", marginLeft: "0.5rem" }}
                />
              </button>
            </div>
          ))}
        </div>
      )}

      {loading && <p>Could not load playlist.</p>}
    </div>
  );
};

export default PlaylistPage;
