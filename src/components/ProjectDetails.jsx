import styled from "styled-components/macro";

import Dashboard from "./Dashboard";
function ProjectDetails({ match }) {
  const id = match.params.id;
  console.log(id);
  return (
    <div>
      <h1>{match.params.id}</h1>
      <p>{id === "dashboard" ? <Dashboard /> : "null"}</p>
    </div>
  );
}

export default ProjectDetails;
