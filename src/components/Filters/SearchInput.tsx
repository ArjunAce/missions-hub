import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { decodeParams, encodeParams } from "../../utils";

const StyledInput = styled.div`
  position: relative;
  margin-bottom: 24px;

  .search-icon {
    width: 16px;
    height: 40px;
    position: absolute;
    top: 0;
    left: 12px;
    display: block;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgBnZNdTsJAEMf/2xZf/EhvYG8gHgAoN/AG+Ogb8AwNYxt8FU8gnECP0OABqDeoN2jCi1G363RryvIViP+ku+3uzG9mdqcCG6IB+bBUB8g9vaDUOxxnQkQpdkhUjkQefvIXXqnzZ8aOSWkh/NJCTbFc9mkyyUyAUznLfMHOGXLZpvE4XgN/y1tYYoSziwJ+bQLsYvAbzQVPn7CtNkVRYhrEcZzFb/PYbzU/OJs7nkU8n1cBLBoOb3j2hCiC7a5TZxJFUyjMuKYu9XpuBeCnAGSjMJzhkJSc8uji1K0bAHHJOwmOUa2Wll7SWwGKg1PCxXHasrPYmQ8HnlnXXklZpi7txADIV00+P+8dBICvEkjpgVYAfecKT8XmKAj2QigInvF3W+a6U44WIc9bQolHNrxCbs9QQ6r3viS3tujym05fMWQtp7Uog4DYuIMNI/ZKuNQ+J+zrjix6JgzvtwAr0MCHskrIiZ1wgyUbQSrITsAhmRAb/5D+NxrNInj9FyhQj7T22pgIAAAAAElFTkSuQmCC");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #223354;
    outline: none;
    border: none;
    border-radius: 4px;
    background-color: #f6f6f6;
    padding: 4px 12px 4px 40px;
  }

  @media (max-width: 767px) {
    margin-bottom: 12px;

    .search-icon {
      height: 36px;
    }

    input {
      height: 36px;
    }
  }
`;
const SearchInput = () => {
  const { pathname, search } = useLocation();
  const queryParams = decodeParams(search);

  const [query, updateQuery] = useState<string>((queryParams.query as string) || "");
  const navigate = useNavigate();

  useEffect(() => {
    // Debouncing URL update
    const timerId = setTimeout(() => {
      const trimmedQuery = String(query).trim();
      queryParams.query = trimmedQuery;
      if (!trimmedQuery) {
        delete queryParams.query;
      }
      navigate(pathname + encodeParams(queryParams));
    }, 500);
    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <StyledInput className="search-wrapper">
      <span className="search-icon"></span>
      <input placeholder="Search missions" value={query} onChange={e => updateQuery(e.target.value.trimStart())} />
    </StyledInput>
  );
};

export default SearchInput;
