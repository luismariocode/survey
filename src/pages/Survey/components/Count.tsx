import { CountProps } from "../types/types";

function Count(props: CountProps) {
  return (
    <div>
      <span>{`${props.count}/${props.total}`}</span>
    </div>
  );
}

export default Count;