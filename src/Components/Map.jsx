import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");

  console.log(searchParams.get("lng"));

  return <div className={styles.mapContainer}>Map{lat}</div>;
}

export default Map;
