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
  const requestUrl = useBaseUrl("/data/cafe.json");
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
          <h1>Café da Manhã</h1>
          <div className="row margin-top--md">
            {data.map((category) => (
              <div key={category.name}>
                <h2>{category.name}</h2>
                {category.items.map((item) => (
                  <div className="col col--3 margin-top--lg" key={item.name}>
                    <div className={styles.project_card}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
