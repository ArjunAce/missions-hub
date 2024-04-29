import styled from "styled-components";

const StyledFilters = styled.div`
  min-width: 288px;
  padding: 32px 24px;
  background-color: lightblue;
`;

const Filters = ({ loading }: { loading: boolean }) => {
  return !loading && <StyledFilters>Filters</StyledFilters>;
};

export default Filters;
