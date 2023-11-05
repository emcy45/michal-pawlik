import React, { useEffect, useState } from "react";

function Spotify() {
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const iframeStyles = {
    borderRadius: "12px",
    margin: "10px 0px",
    // width: isSmallScreen ? "95%" : "50%",
  };
  return (
    <iframe
      title="Moja playlista Spotify"
      // className={isSmallScreen ? "spotify-small" : "spotify-large"}
      style={iframeStyles}
      src="https://open.spotify.com/embed/playlist/3eQJfMIfzLwPKF08F6xUzf?utm_source=generator&theme=0"
      width="100%"
      height="80"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
export default Spotify;
