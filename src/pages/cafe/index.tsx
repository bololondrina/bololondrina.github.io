import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import styles from "./style.module.css";

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const requestUrl = useBaseUrl("/data/projects.json");
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch(requestUrl);
      const data = await response.json();
      setData(data);
    };
    load();
  }, []);

  return (
    <Layout title={`Café da Manhã | ${siteConfig.title}`}>
      <main>
        <div className={clsx("container padding-top--lg padding-bottom--xl")}>
          <h1>Cardápio</h1>
          <div className="row margin-top--md">
            <div className="col col--3 margin-top--lg">
              <h3>Panquecas de Frutas Vermelhas</h3>
              <p>Panquecas fofinhas servidas com uma generosa porção de frutas vermelhas frescas e mel. Acompanhadas de creme chantilly e uma pitada de açúcar de confeiteiro, são perfeitas para quem ama um café da manhã doce e leve.</p>
            </div>
            <div className="col col--3 margin-top--lg">
              <h3>Panquecas de Frutas Vermelhas</h3>
              <p>Panquecas fofinhas servidas com uma generosa porção de frutas vermelhas frescas e mel. Acompanhadas de creme chantilly e uma pitada de açúcar de confeiteiro, são perfeitas para quem ama um café da manhã doce e leve.</p>
            </div>
            <div className="col col--3 margin-top--lg">
              <h3>Panquecas de Frutas Vermelhas</h3>
              <p>Panquecas fofinhas servidas com uma generosa porção de frutas vermelhas frescas e mel. Acompanhadas de creme chantilly e uma pitada de açúcar de confeiteiro, são perfeitas para quem ama um café da manhã doce e leve.</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
