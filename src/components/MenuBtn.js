function MenuButton({ onClick }) {
  return (
    <div onClick={onClick} className="menu">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default MenuButton;
