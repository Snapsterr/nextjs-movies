import styles from "./Loader.module.css"

interface Props {
  size: string
  color: string
}

const Loader = ({ size, color }: Props) => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderWrapper}>
        <progress
          className={styles.pureMaterialProgressCircular}
          style={{ width: size, height: size, color: color }}
        />
      </div>
    </div>
  )
}

export default Loader
