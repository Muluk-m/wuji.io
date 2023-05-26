import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { Tweet } from 'react-tweet'

import { BleedThroughImage } from '~/components/BleedThroughImage'
import { PeekabooLink } from '~/components/links/PeekabooLink'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <BleedThroughImage
        src={value.url}
        alt=""
        dimensions={value.dimensions}
        lqip={value.lqip}
      />
    ),
    tweet: ({ value }) => (
      <div className="flex justify-center">
        <Tweet id={value.id} />
      </div>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined
      return (
        <PeekabooLink href={value.href} rel={rel}>
          {children}
        </PeekabooLink>
      )
    },
  },
}

export function PostPortableText(props: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  components?: PortableTextComponents
}) {
  return (
    <PortableText
      value={props.value}
      components={props.components ?? components}
    />
  )
}
