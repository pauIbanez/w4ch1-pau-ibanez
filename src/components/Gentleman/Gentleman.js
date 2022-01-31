import getInitialFromName from "../../getInitialFromName";
import "./Gentleman.scss";

const Gentleman = ({
  manInfo: { name, profession, status, twitter, picture, selected },
  actionOnClick,
}) => {
  const initial = getInitialFromName(name);

  let gentlemanClass = "gentleman";

  if (selected) {
    gentlemanClass += " selected";
  }

  return (
    <li className={gentlemanClass} onClick={actionOnClick}>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${picture}`}
          alt="The Fary pointing at you"
        />
        <span className="gentleman__initial">{initial}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentleman;
