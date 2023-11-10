import { Movie } from "../../Consts/Types";

interface Props extends Movie {}

export default ({ Poster, Title, Year }: Props) => {
  return (
    <article className="movie">
      <img src={Poster} alt="" />
      <h2>{Title}</h2>
      <p>{Year}</p>
    </article>
  );
};
