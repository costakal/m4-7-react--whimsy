import React from "react";
import styled from "styled-components";

const Stat = ({ data, type }) => {
  return (
    <StatSection>
      <p>
        <span>{data}</span>
        {` ${type}`}
      </p>
    </StatSection>
  );
};

export default Stat;

const StatSection = styled.div`
  margin-right: 20px;
  span {
    color: black;
    font-weight: bold;
  }
  p {
    color: rgb(101, 119, 134);
  }
`;
