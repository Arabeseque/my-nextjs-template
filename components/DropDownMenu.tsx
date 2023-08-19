import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { motion, AnimatePresence } from "framer-motion"
import React from 'react';


export default function DropDownMenu() {
  const [isDropDownOpen, setDropDownOpen] = React.useState(false)

  return (
    <DropdownMenu.Root open={isDropDownOpen} onOpenChange={setDropDownOpen}>
      <DropdownMenu.Trigger>
        <Avatar.Root className="AvatarRoot ">
          <Avatar.Image
            className="AvatarImage w-16 h-16 rounded-md"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
        </Avatar.Root>
      </DropdownMenu.Trigger>
      <AnimatePresence>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align='start'
            sideOffset={6}
          >
            {isDropDownOpen && (
              <motion.div
                className='
                    flex flex-col  gap-2
                    bg-gray-700/80 backdrop-blur-sm text-gray-200 rounded-lg shadow-md p-4  text-sm max-w-[200px]
                  '
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <DropdownMenu.Group className='flex flex-col gap-2'>
                  <DropdownMenu.Item>查看个人档案</DropdownMenu.Item>
                  <DropdownMenu.Item>修改个人文档</DropdownMenu.Item>
                  <DropdownMenu.Item>修改密码</DropdownMenu.Item>
                </DropdownMenu.Group>

                <DropdownMenu.Separator className='h-px bg-gray-500/50' />

                <DropdownMenu.Group className='flex justify-center'>
                  <button type='button'
                    className='text-red-400 font-semibold'
                  >
                    登出
                  </button>
                </DropdownMenu.Group>
              </motion.div>
            )}

          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </AnimatePresence>


    </DropdownMenu.Root>


  )
}
