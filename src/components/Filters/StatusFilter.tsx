import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { MISSION_STATUS_LABELS } from "../../config/constants";
import { decodeParams, encodeParams, Params } from "../../utils";

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

  @media (max-width: 767px) {
    .statuses {
      max-width: 390px;
      display: flex;
      justify-content: space-between;

      .status {
        margin-bottom: 0;

        label {
          margin-right: 4px;
        }
      }
    }
  }
`;

type StatusFilter = {
  [key: string]: boolean;
};

const getStatusFilters = (queryParams: Params): StatusFilter => {
  // @ts-expect-error
  const status: string[] = queryParams?.filters?.status;
  return Object.entries(MISSION_STATUS_LABELS).reduce((acc: StatusFilter, [key]) => {
    acc[key] = status ? Object.values(status).includes(key) : false;
    return acc;
  }, {});
};

const StatusFilter = () => {
  const { pathname, search } = useLocation();
  const queryParams = decodeParams(search);
  const [statusFilters, updateStatusFilters] = useState<StatusFilter>(getStatusFilters(queryParams));
  const navigate = useNavigate();

  useEffect(() => {
    // Debouncing URL update
    const timerId = setTimeout(() => {
      queryParams.filters = queryParams.filters || {};
      const updatedStatus = Object.entries(statusFilters)
        .filter(([_, checked]) => checked)
        .map(([filterName]) => filterName);
      if (!updatedStatus.length) {
        // @ts-expect-error
        delete queryParams.filters.status;
        if (!Object.keys(queryParams.filters).length) {
          delete queryParams.filters;
        }
      } else {
        // @ts-expect-error
        queryParams.filters.status = updatedStatus;
      }
      navigate(pathname + encodeParams(queryParams));
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
