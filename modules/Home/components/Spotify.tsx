import React from "react";

function Spotify() {
  const iframeStyles = {
    borderRadius: "12px",
    margin: "20px 0",
  };

  return (
    <iframe
      title="Moja playlista Spotify"
      style={iframeStyles}
      src="https://open.spotify.com/embed/playlist/3eQJfMIfzLwPKF08F6xUzf?utm_source=generator&theme=0"
      width="100%"
      height="152"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
export default Spotify;
