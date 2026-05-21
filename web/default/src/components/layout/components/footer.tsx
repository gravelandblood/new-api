/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useSystemConfig } from '@/hooks/use-system-config'
import { DEFAULT_LOGO } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface FooterProps {
  logo?: string
  name?: string
  copyright?: string
  className?: string
}

export function Footer(props: FooterProps) {
  const { t } = useTranslation()
  const {
    systemName,
    logo: systemLogo,
  } = useSystemConfig()

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
