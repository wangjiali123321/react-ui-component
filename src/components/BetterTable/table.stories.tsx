import React, { useState,useEffect, useCallback} from "react";
import { Meta, Story } from "@storybook/react";
import BetterTable from "./BetterTable";
import "../../styles/common.stories";

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
      <div>
          <BetterTable
            thead={thead}
            operateConfig={operateConfig}
            toRefreshList={toRefreshList}
            firstslot={firstslot}
            emitClick={emitClick}
          />
      </div>
    );
  }

export default {
  component: BetterTable,
  title: "betterTable 表格"
} as Meta;

const _default: Story<any> = () => <Intro />;

export const Primary = _default.bind({});
