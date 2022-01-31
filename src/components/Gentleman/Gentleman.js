const Gentleman = ({
  name,
  profession,
  status,
  twitter,
  image,
  initial,
  onClick,
}) => {
  return (
    <li class="gentleman" onClick={onClick}>
      <div class="gentleman__avatar-container">
        <img
          class="gentleman__avatar"
          src={image}
          alt="The Fary pointing at you"
        />
        <span class="gentleman__initial">{initial}</span>
      </div>
      <div class="gentleman__data-container">
        <h2 class="gentleman__name">{name}</h2>
        <ul class="gentleman__data-list">
          <li class="gentleman__data">
            <span class="gentleman__data-label">Profession:</span>
            {profession}
          </li>
          <li class="gentleman__data">
            <span class="gentleman__data-label">Status:</span> {status}
          </li>
          <li class="gentleman__data">
            <span class="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>
      <i class="icon gentleman__icon fas fa-check"></i>
      <i class="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};

export default Gentleman;
