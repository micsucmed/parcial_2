import React from "react";

const Serie = ({ serie }) => {
  return (
    <tr>
      <th>{serie.id}</th>
      <td>{serie.name}</td>
      <td>{serie.channel}</td>
      <td>{serie.description}</td>
    </tr>
  );
};

export default Serie;
