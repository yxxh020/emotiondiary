import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams(); //사용자 정의 custom hook
  console.log(id);
  return (
    <div>
      <h1>Diary</h1>
      <p>this is Diary detail page</p>
    </div>
  );
};

export default Diary;
