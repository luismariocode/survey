import { CountProps } from "../types/types";

function Count(props: CountProps) {
  return (
    <div className="survey__count">
      <span>{`${props.count}/${props.total}`}</span>
    </div>
  );
}

export default Count;