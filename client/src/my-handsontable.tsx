import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

import { HyperFormula } from "hyperformula";
import React, { useEffect, useRef, useState } from "react";
// window is not definedの対策
// const HotTable = dynamic(() => import("@handsontable/react"), {
//   ssr: false, // <- ここで ssr を無効にするオプションを渡す
// });
// const HyperFormula = dynamic(() => import("hyperformula"), {
//   ssr: false, // <- ここで ssr を無効にするオプションを渡す
// });

registerAllModules();
export default function MyHandsontable() {
  const hotRef = useRef(null);
  const [output, setOutput] = useState('Click "Load" to load data from server');
  const [isAutosave, setIsAutosave] = useState(false);

  let loadClickCallback: any;
  let saveClickCallback: any;
  const data = [
    ["", "Tesla", "Nissan", "Toyota", "Honda", "Mazda", "Ford"],
    ["2017", 10, 11, 12, 13, 15, 16],
    ["2018", 10, 11, 12, 13, 15, 16],
    ["2019", 10, 11, 12, 13, 15, 16],
    ["2020", 10, 11, 12, 13, 15, 16],
    ["2021", 10, 11, 12, 13, 15, 16],
  ];
  // useEffect(() => {
  //   //@ts-ignore
  //   const hot = hotRef.current.hotInstance;

  //   loadClickCallback = () => {
  //     fetch("https://handsontable.com/docs/scripts/json/load.json").then(
  //       (response) => {
  //         response.json().then((data) => {
  //           hot.loadData(data.data);
  //           // or, use `updateData()` to replace `data` without resetting states
  //           setOutput("Data loaded");
  //         });
  //       }
  //     );
  //   };

  saveClickCallback = () => {
    // save all cell's data
    fetch("https://handsontable.com/docs/scripts/json/save.json", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    }).then((response) => {
      setOutput("Data saved");
      console.log(data);
      console.log("The POST request is only used here for the demo purposes");
    });
  };
  // });
  return (
    <div style={{ padding: "5px" }}>
      <HotTable
        data={data}
        startRows={5}
        startCols={5}
        height="auto"
        width="auto"
        colHeaders={true}
        columns={[
          { data: 0 },
          { data: 1 },
          // skip the second column
          { data: 2 },
          { data: 3 },
          { data: 4 },
          { data: 5 },
          { data: 6 },
        ]}
        formulas={{
          engine: HyperFormula,
        }}
        minSpareRows={1}
        licenseKey="non-commercial-and-evaluation"
      />
      <div className="controls">
        <button
          id="load"
          className="button button--primary button--blue"
          onClick={(...args) => loadClickCallback(...args)}
        >
          Load data
        </button>
         
        <button
          id="save"
          className="button button--primary button--blue"
          onClick={(...args) => saveClickCallback(...args)}
        >
          Save data
        </button>
        <label>
          <input
            type="checkbox"
            name="autosave"
            id="autosave"
            checked={isAutosave}
            onClick={(...args) => saveClickCallback(...args)}
          />
          Autosave
        </label>
      </div>

      <output className="console" id="output">
        {output}
      </output>
    </div>
  );
}
