import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const ExcelImportTool = (props) => {
  const [file, SetFile] = useState(null);
  const [fileName, SetFileName] = useState(null);
  const [SheetName, setSheetName] = useState([]);
  const [sheetData, setSheetData] = useState({});

  const fileRef = useRef();

  const acceptanleFileName = ["xlsx", "xls"];

  const checkFile = (name) => {
    return acceptanleFileName.includes(name.split(".").pop().toLowerCase());
  };

  const handleRemove = () => {
    SetFile(null);
    SetFileName(null);
    props.setfileUploaded(false);
    props.setTypeFileErr(false);
    fileRef.current.value = "";
  };

  const handleFile = async (e) => {
    const myfile = e.target.files[0];
    if (!myfile) {
      return;
    }
    if (!checkFile(myfile.name)) {
      props.setTypeFileErr(true);
      return;
    }

    //read xls meta data
    const data = await myfile.arrayBuffer();
    const mySheetData = readDataFromExcel(data);

    readDataFromExcel(data);

    SetFile(myfile);
    SetFileName(myfile.name);
    props.setfileUploaded(true);
    props.onFileUploaded(mySheetData);
  };

  const readDataFromExcel = (data) => {
    const wb = XLSX.read(data);
    setSheetName(wb.SheetNames);

    let mySheetData = {};

    //Loop through the sheets
    for (let i = 0; i < wb.SheetNames.length; i++) {
      let sheetName = wb.SheetNames[i];
      const worksheet = wb.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      mySheetData[sheetName] = jsonData;
    }

    setSheetData(mySheetData);
    return mySheetData;
  };

  return (
    <div className="excel__container">
      <input
        type="file"
        accept="xlsx, xls"
        multiple={false}
        onChange={(e) => {
          handleFile(e);
        }}
        ref={fileRef}
      />
      {fileName && (
        <span onClick={handleRemove}>
          <DeleteForeverRoundedIcon />
        </span>
      )}
      {props.typeFileErr && (
        <span onClick={handleRemove}>
          <DeleteForeverRoundedIcon />
        </span>
      )}
    </div>
  );
};

export default ExcelImportTool;
