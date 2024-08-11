import { createContext, KeyboardEvent, useContext, useId, useRef, useState } from 'react'
import styles from './Tabs.module.css'

type TabsContextValue = {
  tabsRootId: string
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const TabsContext = createContext<TabsContextValue | null>(null)

type TabsRootProps = {
  defaultValue?: string
  children: React.ReactNode
}

const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) throw new Error('TabsRootの内側で使用してください。')
  return context
}

const TabsRoot = ({ defaultValue = '', children }: TabsRootProps) => {
  const [value, setValue] = useState(defaultValue)
  const tabsRootId = useId()

  return (
    <TabsContext.Provider value={{ tabsRootId, value, setValue }}>
      {children}
    </TabsContext.Provider>
  )
}

type TabListProps = {
  children: React.ReactNode
}

const TabList = ({ children }: TabListProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!ref.current) return
    let tabTriggers = Array.from(ref.current.querySelectorAll('[role="tab"]:not(:disabled)')) as HTMLElement[]
    let focusedIndex = tabTriggers.indexOf(document.activeElement as HTMLElement)

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      if (document.activeElement === tabTriggers[0]) {
        tabTriggers[tabTriggers.length - 1].focus()
      } else {
        tabTriggers[focusedIndex - 1].focus()
      }
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      if (document.activeElement === tabTriggers[tabTriggers.length - 1]) {
        tabTriggers[0].focus()
      } else {
        tabTriggers[focusedIndex + 1].focus()
      }
    }
  }

  return (
    <div role="tablist" className={styles.tabList} ref={ref} onKeyDown={handleKeyDown}>
      {children}
    </div>
  )
}

type TabProps = {
  value: string
  disabled?: boolean
  children: React.ReactNode
}

const Tab = ({ value, disabled, children }: TabProps) => {
  const context = useTabsContext()
  const isSelected = value === context.value

  return (
    <button
      role="tab"
      id={`${context.tabsRootId}-tab-${value}`}
      aria-controls={`${context.tabsRootId}-panel-${value}`}
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      disabled={disabled}
      onClick={() => context.setValue(value)}
      className={styles.tab}
    >
      {children}
    </button>
  )
}

type TabPanelProps = {
  value: string
  children: React.ReactNode
}

const TabPanel = ({ value, children }: TabPanelProps) => {
  const context = useTabsContext()
  const isSelected = value === context.value

  return (
    <div
      id={`${context.tabsRootId}-panel-${value}`}
      aria-labelledby={`${context.tabsRootId}-tab-${value}`}
      role="tabpanel"
      tabIndex={0}
      hidden={!isSelected}
    >
      {isSelected && children}
    </div>
  )
}

export {
  TabsRoot, TabList, Tab, TabPanel
}
