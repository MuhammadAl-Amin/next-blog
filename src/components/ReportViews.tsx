"use client"
import { fetchUrl } from '@/lib/utils'
import React, { useEffect } from 'react'

const ReportViews = ({slug, title, category}: {slug: string, title: string, category: string}) => {
    useEffect(() => {
        try {
            fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({slug, title, category}),
            })
        } catch (error) {
            console.log(error)
        }
    }, [slug, title, category])
  return (
    <></>
  )
}

export default ReportViews