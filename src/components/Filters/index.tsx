import styled from "styled-components";
import SearchInput from "./SearchInput";
import StatusFilter from "./StatusFilter";

const StyledFilters = styled.div`
  min-width: 288px;
  padding: 32px 24px;
  border-left: 1px solid #bebcbd;
  border-right: 1px solid #bebcbd;

  .filter-title {
    font-size: 16px;
    font-weight: 500;
    color: #807d7e;
    border-bottom: 1px solid #bebcbd;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }
`;

const Filters = ({ loading }: { loading: boolean }) => {
  return (
    !loading && (
      <StyledFilters>
        <SearchInput />
        <div className="filter-title">Filter by</div>
        <StatusFilter />
      </StyledFilters>
    )
  );
};

export default Filters;
