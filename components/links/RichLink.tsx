'use client'

import { clsxm } from '@zolplay/utils'
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'
import React from 'react'

import { ExternalLinkIcon } from '~/assets'

type RichLinkProps = LinkProps &
  React.ComponentPropsWithoutRef<'a'> & {
    children: React.ReactNode
  }
export const RichLink = React.forwardRef<HTMLAnchorElement, RichLinkProps>(
  ({ children, href, className, ...props }, ref) => {
    const faviconUrl = React.useMemo(
      () => `/api/favicon?url=${new URL(href).host}`,
      [href]
    )

    // if it's a relative link, use a fallback Link
    if (!href.startsWith('http')) {
      return (
        <Link href={href} className={className} ref={ref} {...props}>
          {children}
        </Link>
      )
    }

    return (
      <Link
        ref={ref}
        href={href}
        className={clsxm(
          'inline-flex place-items-baseline items-baseline gap-0.5 pr-0.5 text-[0.95em] leading-none',
          className
        )}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      >
        <span className="mr-px inline-flex translate-y-0.5">
          <Image
            src={faviconUrl}
            alt=""
            aria-hidden="true"
            className="inline h-4 w-4 rounded"
            width={16}
            height={16}
            unoptimized
            priority={false}
          />
        </span>

        {children}
        <ExternalLinkIcon
          width="0.95em"
          height="0.95em"
          className="inline-block translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    )
  }
)
RichLink.displayName = 'RichLink'
