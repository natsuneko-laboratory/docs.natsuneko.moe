import React, { useState } from "react";
import Head from "next/head";
import { normalizeTitle } from "utils/contents";

import Sidebar from "components/Sidebar";
import FloatingSidebar from "components/FloatingSidebar";
import WikiHeader from "components/WikiHeader";

type Props = {
  title: string;
  sidebar?: string[];
};

const Layout: React.FC<Props> = ({ title, sidebar, children }) => {
  const [state, setState] = useState(false);

  const onClickHamburger = (state) => {
    setState(state);
  };

  const onClickItem = () => {
    setState(false);
  };

  return (
    <>
      <Head>
        <title>{title} | Natsuneko Laboratory Docs</title>
      </Head>
      <div className="flex flex-col w-full h-full mx-auto md:container md:flex-row">
        {sidebar && (
          <>
            <div className="hidden shrink-0 md:block">
              <Sidebar items={sidebar} />
            </div>
            <div className="block md:hidden">
              <WikiHeader
                onToggleHamburgerState={onClickHamburger}
                parentState={state}
              />
            </div>
          </>
        )}
        {state ? (
          <div className="container w-full mx-auto">
            <FloatingSidebar items={sidebar} onClickItem={onClickItem} />
          </div>
        ) : (
          <div className="container w-full mx-auto">
            <h2 className="my-4 text-4xl font-bold">{normalizeTitle(title)}</h2>
            <div>{children}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
