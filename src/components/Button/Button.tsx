import React from "react"
import styles from "./Button.module.css"

interface ButtonProps {
  /** Text for the button label */
  label: string
}

/** A simple button with a customisable label */
function Button(props: ButtonProps) {
  return <button className={styles.button}>{props.label}</button>
}

export default Button
