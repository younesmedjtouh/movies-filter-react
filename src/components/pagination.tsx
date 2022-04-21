import * as React from "react";
import { Pagination } from "react-bootstrap";
import { Pager } from "../models/movie";

type Props = {
  pager: Pager;
  changePage: (value: string | null) => void;
};

function PaginationComponent(props: Props) {
  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.First
        disabled={props.pager.currentPage === 1 ? true : false}
        onClick={(e) => props.changePage(props.pager.startPage.toString())}
      />
      <Pagination.Prev
        disabled={props.pager.currentPage === 1 ? true : false}
        onClick={(e) =>
          props.changePage((props.pager.currentPage - 1).toString())
        }
      />
      {props.pager.pages.map((page) => (
        <Pagination.Item
          key={page}
          active={page === props.pager.currentPage}
          onClick={(e) => props.changePage(e.currentTarget.textContent)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next
        disabled={
          props.pager.currentPage === props.pager.pages.length ? true : false
        }
        onClick={(e) =>
          props.changePage((props.pager.currentPage + 1).toString())
        }
      />
      <Pagination.Last
        disabled={
          props.pager.currentPage === props.pager.pages.length ? true : false
        }
        onClick={(e) => props.changePage(props.pager.endPage.toString())}
      />
    </Pagination>
  );
}

export default PaginationComponent;
