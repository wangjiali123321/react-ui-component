import React, { memo, useState, useEffect, useCallback } from "react";
import PageWrap from "../../components/PageWrap";
import BetterTable from "./BetterTable";
import { ConfigContext } from "./service";
import Test from "./test";

function Intro() {
  const [toRefreshList, setToRefreshList] = useState<Boolean>(false);

  const thead = [
    {
      prop: "id"
    },
    {
      prop: "customContent",
      label: "customContent",
      formatType: "linkByName"
    },
    {
      prop: "fisrtslot",
      formatType: "slot"
    },
    {
      prop: "operation"
    },
    {
      prop: "emitClick",
      formatType: "emitClick"
    }
  ];

  const operateConfig = {
    optType: {
      toRemove: { event: "toRemove", text: "remove", type: "danger" },
      togo: { event: "togo", text: "togo", type: "danger" }
    },
    optFunc: function(val: any, userinfo: any) {
      if (val) {
      }
      return ["toRemove", "togo"];
    }
  };

  const firstslot = <span>firstslot</span>;

  useEffect(() => {
    setTimeout(() => {
      setToRefreshList(!toRefreshList);
    }, 3000);
  }, []);

  const emitClick = useCallback(
    (params:any) => {
      console.log(params)
    },
    [],
  );

  return (
    <ConfigContext.Provider value={{ value: 1 }}>
      <PageWrap className="intro">
        <Test></Test>
        <BetterTable
          thead={thead}
          operateConfig={operateConfig}
          toRefreshList={toRefreshList}
          firstslot={firstslot}
          emitClick={emitClick}
        />
      </PageWrap>
    </ConfigContext.Provider>
  );
}

export default memo(Intro);
