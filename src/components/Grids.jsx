import styles from "../styles/Grids.module.css";

export function Grids({ grids }) {
  return (
    <div className={styles.gridsList}>
      {grids.map((grid, index) => (
        <div key={index} className={styles.gridCard} style={{ backgroundImage: `url(${grid.image})` }}>
          <span className={styles.gridName}>{grid.tag}</span>
          <h2 className={styles.gridTitle}>{grid.title}</h2>
          {grid.location && (
            <p className={styles.gridDetails}>
              {grid.location} • {grid.date}
            </p>
          )}
          {grid.link && (
            <button
              className={styles.watchButton}
              onClick={() => {
                window.open(grid.link);
              }}
            >
              View ➔
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
