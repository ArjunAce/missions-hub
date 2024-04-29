import styled from "styled-components";

const StyledStatusFilter = styled.div`
  .filter-name {
    font-size: 14px;
    margin-bottom: 4px;
  }
  .status {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #777777;
    margin-bottom: 2px;
  }
`;

const StatusFilter = () => {
  return (
    <StyledStatusFilter>
      <div className="filter-name">Status</div>
      <div className="statuses">
        <div className="status">
          <label className="status-label" htmlFor="in_progress">
            In progress
          </label>
          <input type="checkbox" id="in_progress" />
        </div>
        <div className="status">
          <label className="status-label" htmlFor="upcoming">
            Upcoming
          </label>
          <input type="checkbox" id="upcoming" />
        </div>
        <div className="status">
          <label className="status-label" htmlFor="completed">
            Completed
          </label>
          <input type="checkbox" id="completed" />
        </div>
      </div>
    </StyledStatusFilter>
  );
};

export default StatusFilter;
