import React from "react";
import InternalLink from "next/link";

import FontAwesome from "./fontawesome/Icon";
import ExternalLink from "./ExternalLink";
import useLang from "../hooks/useLang";

const Header: React.VFC = () => {
  const lang = useLang();

  return (
    <header className="border-b border-zinc-600">
      <div className="container mx-auto">
        <div className="flex flex-row items-center h-16">
          <h1 className="text-2xl flex-grow">
            <InternalLink href={`/${lang}/`}>natsuneko.moe | Docs</InternalLink>
          </h1>
          <div className="inline-block w-64">
            <ExternalLink href="https://github.com/natsuneko-laboratory/docs.natsuneko.moe">
              <div className="flex flex-row items-center w-64">
                <FontAwesome fa="brands" icon="github" className="text-2xl" />
                <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                  &nbsp;natsuneko-laboratory/docs.natsuneko.moe
                </span>
              </div>
            </ExternalLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;