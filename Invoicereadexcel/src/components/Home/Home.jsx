import React, { useState } from "react";
import "./home.css";
import ExcelImportTool from "../../Utils/ExcelImportTool";
import { useDispatch } from "react-redux";
import { setSheetData } from "../../actions";
import { setSearchCriteria } from "../../actions";
import { useNavigate } from "react-router-dom";
import { countryList, currencyList, inputLabelNames } from "../../constants";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fileUploaded, setfileUploaded] = useState(false);
  const [typeFileErr, setTypeFileErr] = useState(false);
  const [data, setData] = useState({
    TmsFileNumber: "",
    country: "",
    CustomerName: "",
    currencyType: "",
    orderValue: "",
    commissionRate: "",
    commissionValue: "",
  });

  const [error, setError] = useState({
    TmsFileNumberError: false,
    countryError: false,
    CustomerNameError: false,
    currencyTypeError: false,
    orderValueError: false,
    commissionRateError: false,
    commissionValueError: false,
  });

  const handleForm = (e) => {
    e.preventDefault();
    ValidateInput(data);
    dispatch(setSearchCriteria(data));
    navigate("/table");
  };

  const ValidateInput = (data) => {
    for (const key in data) {
      if (!data[key]) {
        setError((prevData) => ({ ...prevData, [`${key}Error`]: true }));
      } else {
        setError((prevData) => ({ ...prevData, [`${key}Error`]: false }));
      }
    }
    if (!fileUploaded) {
      document.getElementById("mandatoryfile").innerText =
        "Please upload a file";
    } else {
      document.getElementById("mandatoryfile").innerText = "";
    }
  };

  const handleChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileUploaded = (e) => {
    dispatch(setSheetData(e));
  };

  const reset = () => {
    setData({
      TmsFileNumber: "",
      country: "",
      CustomerName: "",
      currencyType: "",
      orderValue: "",
      commissionRate: "",
      commissionValue: "",
    });
    setError({
      TmsFileNumberError: false,
      countryError: false,
      CustomerNameError: false,
      currencyTypeError: false,
      orderValueError: false,
      commissionRateError: false,
      commissionValueError: false,
    });
    setTypeFileErr(false);
    document.getElementById("mandatoryfile").innerHTML = "";
  };

  return (
    <section className="home section" id="home">
      <h2 className="section__title">Please Fill The Form Data</h2>
      <p className="section__subtitle">All fields are mandatory</p>
      <div className="container">
        <form onSubmit={handleForm} className="home__form" autoComplete="off">
          <div className="home__form-container">
            {/* first section */}
            <div className="section__1">
              <div className="tms__FileNo home__form-div">
                <label htmlFor="" className="home__form-tag">
                  {inputLabelNames.TMS_FILE_NO}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="home__form-input"
                  name="TmsFileNumber"
                  placeholder="Insert TMS File Number"
                  value={data.TmsFileNumber}
                  onChange={handleChange}
                />
                {error.TmsFileNumberError && (
                  <p className="home__form-error">
                    Please enter TMS File Number
                  </p>
                )}
              </div>

              <div className="customer__Name home__form-div">
                <label htmlFor="" className="home__form-tag">
                  {inputLabelNames.CUSTOMER_NAME}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="home__form-input"
                  name="CustomerName"
                  placeholder="Insert Customer Name"
                  value={data.CustomerName}
                  onChange={handleChange}
                />
                {error.CustomerNameError && (
                  <p className="home__form-error">Please enter customer name</p>
                )}
              </div>

              <div className="country home__form-div">
                <label htmlFor="" className="home__form-tag">
                  {inputLabelNames.COUNTRY}
                  <span className="required">*</span>
                </label>
                <select
                  name="country"
                  id="country"
                  className="home__form-select"
                  value={data.country}
                  onChange={handleChange}
                >
                  {countryList.map((item) => {
                    return <option value={item.code3}>{item.name}</option>;
                  })}
                </select>
                {error.countryError && (
                  <p className="home__form-error">Please select a country</p>
                )}
              </div>

              <div className="currencyType home__form-div">
                <label htmlFor="" className="home__form-tag">
                  {inputLabelNames.CURRENCY_TYPE}
                  <span className="required">*</span>
                </label>
                <select
                  name="currencyType"
                  id="currencyType"
                  className="home__form-select"
                  value={data.currencyType}
                  onChange={handleChange}
                >
                  {currencyList.map((item) => {
                    return (
                      <option value={item.currencyCode}>
                        {item.currencyName}
                      </option>
                    );
                  })}
                </select>
                {error.currencyTypeError && (
                  <p className="home__form-error">
                    Please select a currency type
                  </p>
                )}
              </div>
            </div>

            {/* second section */}
            <div className="section__2">
              <div className="order__value home__form-div">
                <label htmlFor="" className="home__form-tag">
                  {inputLabelNames.ORDER_VALUE}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="home__form-input"
                  name="orderValue"
                  placeholder="Insert Order Value"
                  value={data.orderValue}
                  onChange={handleChange}
                />
                {error.orderValueError && (
                  <p className="home__form-error">Please enter order value</p>
                )}
              </div>

              <div className="commission__Rate home__form-div">
                <label htmlFor="" className="home__form-tag">
                  {inputLabelNames.COMMISSION_RATE}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="home__form-input"
                  name="commissionRate"
                  placeholder="Insert Commission Rate"
                  value={data.commissionRate}
                  onChange={handleChange}
                />
                {error.commissionRateError && (
                  <p className="home__form-error">
                    Please enter commission rate
                  </p>
                )}
              </div>

              <div className="commision__Value  home__form-div">
                <label htmlFor="" className="home__form-tag">
                  {inputLabelNames.COMMISSION_Value}
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="home__form-input"
                  name="commissionValue"
                  placeholder="Insert Commission Value"
                  value={data.commissionValue}
                  onChange={handleChange}
                />
                {error.commissionValueError && (
                  <p className="home__form-error">
                    Please enter commission value
                  </p>
                )}
              </div>
              <div className="commision__Value  home__form-div">
                <label htmlFor="" className="home__form-tag">
                  Upload the Excel<span className="required">*</span>
                </label>
                <br />
                <ExcelImportTool
                  onFileUploaded={(e) => handleFileUploaded(e)}
                  setfileUploaded={setfileUploaded}
                  setTypeFileErr={setTypeFileErr}
                  typeFileErr={typeFileErr}
                />
                <p id="mandatoryfile" className="home__form-error"></p>
                {typeFileErr && (
                  <p className="home__form-error">Please upload only excel</p>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="button__submit button--flex">
            Submit form
          </button>
          <button
            type="reset"
            className="button__reset button--flex"
            onClick={reset}
          >
            Clear form
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
