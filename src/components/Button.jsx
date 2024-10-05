function Button({ txt, color = 'primary' }) {
  return (
    <button type="button" className={'btn btn-' + color}>
      {txt}
    </button>
  );
}

export default Button;
