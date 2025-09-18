import Head from 'next/head'
import { useRouter } from 'next/router'

export default function SEO({ 
  title = "Carlos Arbizu - Full Stack Developer",
  description = "Full-stack developer specializing in C# .NET and React...",
  canonical = "https://arbizu.dev"
}) {
  const router = useRouter()
  const canonicalUrl = canonical || `https://arbizu.dev${router.asPath}`
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
    </Head>
  )
}