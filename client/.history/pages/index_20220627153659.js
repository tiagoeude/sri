import { Component, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Alert, Spinner } from "reactstrap";
import List from "../components/List";
import Search from "../components/Search";
import LoaderSpiner from "../components/LoaderSpiner";

function Index() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [query, updateQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:1337/api/documentos/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <>
        <p>Carregando...</p>
        <LoaderSpiner />
      </>
    );
  if (!data)
    return <Alert color="danger">{JSON.stringify(error, null, 2)}</Alert>;

  return (
    <>
      <Search search={updateQuery} searchValue={query} />
      <List query={data} search={updateQuery} />
    </>
  );
}
