import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  console.log("id:", id);

  const mode = searchParams.get("mode");
  console.log("mode:", mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>Edit page</p>
      <button onClick={() => setSearchParams({ who: "hwang" })}>
        query 바꾸기
      </button>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Home으로
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        go back
      </button>
    </div>
  );
};

export default Edit;
