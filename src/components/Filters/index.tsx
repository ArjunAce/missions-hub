import styled from "styled-components";
import SearchInput from "./SearchInput";

const StyledFilters = styled.div`
  min-width: 288px;
  padding: 32px 24px;
  border-left: 1px solid #bebcbd;
  border-right: 1px solid #bebcbd;
`;

const Filters = ({ loading }: { loading: boolean }) => {
  return (
    !loading && (
      <StyledFilters>
        <SearchInput />
      </StyledFilters>
    )
  );
};

export default Filters;
