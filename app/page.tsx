"use client"
import React from 'react';
import DropDownMenu from '@/components/DropDownMenu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <DropDownMenu />
    </main>
  )
}
