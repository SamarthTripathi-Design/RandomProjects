import React, { useEffect, useState } from "react";
import "./table.css";
import CommonTable from "../common/CommonTable.jsx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTableData } from "../../actions";
import { columnNames, inputLabelNames } from "../../constants";
import "./table.css";

const Table = () => {
  const dispatch = useDispatch();
  const searchCriteria = useSelector(
    (state) => state.searchCriteriaReducer.criteria
  );
  const sheetData = useSelector((state) => state.sheetDataReducer.sheetData);
  const tableData = useSelector((state) => state.tableDataReducer.tableData);

  const columns = [
    { field: "id", headerName: columnNames.ID, width: 150 },
    {
      field: "CustomerName",
      headerName: columnNames.CUSTOMER_NAME,
      width: 200,
    },
    { field: "Invoice", headerName: columnNames.INVOICE, width: 130 },
    {
      field: "InvoiceDate",
      headerName: columnNames.INVOICE_DATE,
      width: 200,
    },
    {
      field: "TMSFileNo",
      headerName: columnNames.TMS_FILE_NO,
      width: 160,
    },

    {
      field: "OrderValue",
      headerName: columnNames.ORDER_VALUE,
      width: 150,
    },
    {
      field: "OrderRate",
      headerName: columnNames.ORDER_RATE,
      width: 150,
    },
    {
      field: "CommissionOwned",
      headerName: columnNames.COMMISSION_OWNED,
      width: 200,
    },
  ];

  const setRows = (tableData) => {
    let rowdata =
      tableData &&
      tableData.map((item) => {
        return {
          id: Math.random().toString(16).slice(2),
          CustomerName: searchCriteria.CustomerName,
          Invoice: "1",
          InvoiceDate: "2",
          TMSFileNo: searchCriteria.TmsFileNumber,
          OrderValue: searchCriteria.orderValue,
          ORDER_RATE: searchCriteria.commissionRate,
          COMMISSION_OWNED: "3",
        };
      });
    return rowdata;
  };

  let rows = setRows(tableData);
  const SearchData = (criteria, data) => {
    let fileKeys = Object.keys(data);
    fileKeys.forEach((file) => {
      let rowdata = data[file].filter((item) => {
        return (
          item["TMS File No."] &&
          item["TMS File No."] === criteria.TmsFileNumber
        );
      });
      dispatch(setTableData(rowdata));
    });
  };

  useEffect(() => {
    SearchData(searchCriteria, sheetData);
  }, [searchCriteria, sheetData]);

  useEffect(() => {
    setRows(tableData);
  }, [tableData]);

  return (
    <section className="table section" id="table">
      <div className="container">
        <h2 className="section__title">INVOICE BILLING TABLE</h2>
        <div className="value__chosen-container">
          <div className="value__chosen">
            <h5 className="value__chosen-label">
              {inputLabelNames.TMS_FILE_NO}
            </h5>
            <p className="value__chosen-value">
              {searchCriteria.TmsFileNumber
                ? searchCriteria.TmsFileNumber
                : "-"}
            </p>
          </div>
          <div className="value__chosen">
            <h5 className="value__chosen-label">
              {inputLabelNames.CUSTOMER_NAME
                ? inputLabelNames.CUSTOMER_NAME
                : "-"}
            </h5>
            <p className="value__chosen-value">
              {searchCriteria.CustomerName ? searchCriteria.CustomerName : "-"}
            </p>
          </div>
          <div className="value__chosen">
            <h5 className="value__chosen-label">{inputLabelNames.COUNTRY}</h5>
            <p className="value__chosen-value">
              {searchCriteria.country ? searchCriteria.country : "-"}
            </p>
          </div>
          <div className="value__chosen">
            <h5 className="value__chosen-label">
              {inputLabelNames.CURRENCY_TYPE}
            </h5>
            <p className="value__chosen-value">
              {searchCriteria.currencyType ? searchCriteria.currencyType : "-"}
            </p>
          </div>
          <div className="value__chosen">
            <h5 className="value__chosen-label">
              {inputLabelNames.ORDER_VALUE}
            </h5>
            <p className="value__chosen-value">
              {searchCriteria.orderValue ? searchCriteria.orderValue : "-"}
            </p>
          </div>
          <div className="value__chosen">
            <h5 className="value__chosen-label">
              {inputLabelNames.COMMISSION_RATE}
            </h5>
            <p className="value__chosen-value">
              {searchCriteria.commissionRate
                ? searchCriteria.commissionRate
                : "-"}
            </p>
          </div>
          <div className="value__chosen">
            <h5 className="value__chosen-label">
              {inputLabelNames.COMMISSION_Value}
            </h5>
            <p className="value__chosen-value">
              {searchCriteria.commissionValue
                ? searchCriteria.commissionValue
                : "-"}
            </p>
          </div>
        </div>

        {console.log(rows)}
        <CommonTable columns={columns} rows={rows} />
      </div>
    </section>
  );
};

export default Table;
