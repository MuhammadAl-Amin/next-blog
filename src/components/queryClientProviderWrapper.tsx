"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'


const queryClient = new QueryClient()
const QueryClientProviderWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryClientProviderWrapper