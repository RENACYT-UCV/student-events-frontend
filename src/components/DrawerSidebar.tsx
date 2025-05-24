// src/components/DrawerSidebar.tsx

import Sidebar from './Sidebar'

import { cn } from '@lib/utils'

interface DrawerSidebarProps {
  open: boolean
  onClose: () => void
}

export default function DrawerSidebar({ open, onClose }: DrawerSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn('fixed inset-0 bg-black bg-opacity-50 z-[90] transition-opacity duration-300', {
          'opacity-100 pointer-events-auto': open,
          'opacity-0 pointer-events-none': !open
        })}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-[100] transform transition-transform duration-300',
          {
            'translate-x-0': open,
            '-translate-x-full': !open
          }
        )}
      >
        <Sidebar onClose={onClose} />
      </div>
    </>
  )
}
