import { createContext, useContext, useEffect, useId } from 'react'
import styles from './SegmentedControl.module.css'

type SegmentedControlContextValue = {
  groupId: string
  value: string
  onValueChange: (selectedValue: string) => void
}

const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null)

const useSegmentedControlContext = () => {
  const context = useContext(SegmentedControlContext)
  if (!context) throw new Error('SegmentedControlの内側で使用してください。')
  return context
}

type SegmentedControlRootProps = {
  value: string
  onValueChange: (selectedValue: string) => void
  children: React.ReactNode
}

const SegmentedControlRoot = ({ value = '', onValueChange, children }: SegmentedControlRootProps) => {
  const groupId = useId()

  useEffect(() => {
    onValueChange(value)
  }, [value])

  return (
    <SegmentedControlContext.Provider value={{ groupId, value, onValueChange }}>
      <div role="radiogroup" className={styles.group}>
        {children}
      </div>
    </SegmentedControlContext.Provider>
  )
}

type SegmentedControlItemProps = {
  value: string
  children: React.ReactNode
}

const SegmentedControlItem = ({ value, children }: SegmentedControlItemProps) => {
  const context = useSegmentedControlContext()

  return (
    <label className={styles.item}>
      <input
        type="radio"
        name={context.groupId}
        onChange={() => context.onValueChange(value)}
        checked={value === context.value}
        className={styles.input}
      />
      <span className={styles.itemContent}>
        {children}
      </span>
    </label>
  )
}

export {
  SegmentedControlRoot,
  SegmentedControlItem
}
