import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'
import { useSystemConfig } from '@/hooks/use-system-config'
import { DEFAULT_LOGO } from '@/lib/constants'

interface FooterProps {
  logo?: string
  name?: string
  copyright?: string
  className?: string
}

export function Footer(props: FooterProps) {
  const { t } = useTranslation()
  const { systemName, logo: systemLogo } = useSystemConfig()

  const displayLogo = systemLogo || props.logo || DEFAULT_LOGO
  const displayName = systemName || props.name || 'VibeOpus'

  return (
    <footer
      className={cn('border-border/40 relative z-10 border-t', props.className)}
    >
      <div className='mx-auto max-w-6xl px-6 py-10 md:py-12'>
        <div className='border-border/50 bg-card/70 flex flex-col items-center justify-between gap-5 rounded-[28px] border px-5 py-5 shadow-[0_24px_80px_-48px_rgba(32,20,10,0.35)] backdrop-blur md:flex-row md:px-7'>
          <div className='flex items-center gap-3'>
            <img
              src={displayLogo}
              alt={displayName}
              className='size-11 rounded-2xl object-contain ring-1 ring-black/5'
            />
            <div>
              <Link
                to='/'
                className='text-foreground text-sm font-semibold tracking-[0.16em] uppercase'
              >
                {displayName}
              </Link>
              <p className='text-muted-foreground mt-1 text-xs tracking-[0.2em] uppercase'>
                {t('Curated model routing')}
              </p>
            </div>
          </div>
          <div className='text-muted-foreground text-center text-sm md:text-right'>
            <p>{t('API gateway, billing relay, and upstream control.')}</p>
            <p className='mt-1'>{t('Custom deployment by VibeOpus.')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
