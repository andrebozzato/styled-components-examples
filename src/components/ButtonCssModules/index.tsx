import styles from './styles.module.css'

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function ButtonCssModules({ color = 'primary' }: ButtonProps) {
  return <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
}
