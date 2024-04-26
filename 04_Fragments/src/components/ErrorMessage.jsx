const ErrorMessage = ({ items }) => {
  //   let games = ["VolleyBall", "FootBall", "Kabbadi", "ThrowBall", "Kho-Kho"];

  return <>{items.length === 0 && <h2>Go Play some games.... </h2>}</>;
};

export default ErrorMessage;
