import { useState } from "react";
const outOfTickets = 0,lastTickets = 0;

export interface ShowCardProps {
  artist: string;
  stage: string;
  day: string;
  hour: string;
  ticketsLeft: number;
  image: string;
}

export default function ShowCard({
  artist,
  stage,
  day,
  hour,
  ticketsLeft,
  image}: ShowCardProps)

  {
    const [isInterested, setIsInterested] =useState(false);

    function handleToggleInterested() {
      setIsInterested(!isInterested);
    }

  let ticketsStatusText;

  if (ticketsLeft <= outOfTickets) {
    ticketsStatusText = "SOLD OUT";
  } else if (ticketsLeft <= lastTickets) {
    ticketsStatusText = "Last tickets – hurry up!";
  } else {
    ticketsStatusText = "Tickets available";
  }

  let interestString = isInterested 
  ? "this show is in your interested list 🎟️" 
  : "You haven't added this show yet";

  return (
    <article className="show-card">
      <div className="show-image-wrapper">
        <img src={image} alt={artist} className="show-image" />
        <div className="show-image-placeholder">Image goes here</div>
      </div>

      <header className="show-header">
        <h2 className="show-artist">
          {isInterested && "⭐"}
          {artist}
        </h2>
        <p className="show-meta">
          {stage} · {day} · {hour}
        </p>
      </header>

      <section className="show-info">
        <p className="tickets-status">
          {ticketsStatusText}
        </p>

        <p className="interested-status">
          {interestString}
        </p>
      </section>

      <button className="interested-button" onClick={handleToggleInterested}>
        {isInterested&& "Remove from my list" || "Mark as interested"}
      </button>
    </article>
  );
}
