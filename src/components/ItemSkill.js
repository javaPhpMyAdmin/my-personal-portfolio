import { CircularStatic } from "./CircularStatic";

export const ItemSkill = ({ itemSkill }) => {
  return (
    <div className="item">
      <CircularStatic {...itemSkill} />
      <h5 style={{ paddingTop: 10 }}>{itemSkill.skill} </h5>
    </div>
  );
};
