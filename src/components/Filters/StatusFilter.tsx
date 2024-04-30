import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { MISSION_STATUS_LABELS } from "../../config/constants";
import { encodeParams, getURLParams } from "../../utils";

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

const status = Object.entries(MISSION_STATUS_LABELS).reduce((acc: { [key: string]: boolean }, [key]) => {
  acc[key] = false;
  return acc;
}, {});

const StatusFilter = () => {
  const [statusFilters, updateStatusFilters] = useState(status);
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Debouncing URL update
    const timerId = setTimeout(() => {
      const params = getURLParams(new URLSearchParams(search));
      params.filters = params.filters || {};
      params.filters.status = statusFilters;
      const newUrl = pathname + encodeParams(params);
      navigate(newUrl);
    }, 500);
    return () => clearTimeout(timerId);
  }, [statusFilters]);

  return (
    <StyledStatusFilter>
      <div className="filter-name">Status</div>
      <div className="statuses">
        {Object.entries(MISSION_STATUS_LABELS).map(([value, label]) => (
          <div className="status" key={value}>
            <label className="status-label" htmlFor={value}>
              {label}
            </label>
            <input
              type="checkbox"
              id={value}
              checked={statusFilters[value]}
              onChange={e => {
                updateStatusFilters({
                  ...statusFilters,
                  [value]: e.target.checked,
                });
              }}
            />
          </div>
        ))}
      </div>
    </StyledStatusFilter>
  );
};

export default StatusFilter;
