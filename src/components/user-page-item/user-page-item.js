import React from "react";
import Sorts from "../sorts";
import Pagination from "../pagination";
import {numberWithCommas} from "../../utils";
import './user-page-item.scss';

export default function UserPageItem(props) {
  const { View, sorts } = props;

  return <>
    <div className="user__content-item">
      <div className="user__content-item-header">
        <div className="user__content-item-title flex-content">
          <div>{props.itemName}</div>
          <span>({numberWithCommas(props.totalItems)})</span>
        </div>
        {
          sorts ? <Sorts
            totalItems=""
            onSortChanged={sorts.onSortChanged}
            onOrderChanged={sorts.onOrderChanged}
            sorts={sorts.types}
            currentSort={sorts.sort}
            currentOrder={sorts.order}
            loading={false} /> : null
        }
      </div>
      <div className="user__content-item-body">
        <div className="user__content-items-list">
          <table>
            <tbody>
            {
              props.data.map(item => {
                return <tr><View data={item} /></tr>
              })
            }
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <Pagination
            totalItems={props.totalItems}
            pageSize="10"
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}/>
        </div>
      </div>
    </div>
  </>
}