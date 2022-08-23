import Card from "./Card";
import { useContext } from "react";
import { useSelector } from "react-redux/es/exports";
import InformationContext from "../context/information-context";
import React from "react";

function CardField({ people }) {
  //const data = useContext(InformationContext);
  //const mypeeps = useSelector((state) => state.names);
  return (
    <div>
      {people.map((person) => (
        <Card key={person} name={person} />
      ))}
    </div>
  );
}

export default CardField;
