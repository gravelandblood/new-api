import { Link } from '@tanstack/react-router'
import { ArrowRight, CircleDollarSign } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useSystemConfig } from '@/hooks/use-system-config'
import { Button } from '@/components/ui/button'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { systemName } = useSystemConfig()
  const supportedModels = [
    'gpt-5.5',
    'gemini-3.5-flash',
    'claude-4.7-opus',
    'image2',
    'nano-banana-pro',
  ]

  return (
    <section className='relative z-10 flex flex-col items-center overflow-hidden px-6 pt-28 pb-20 md:pt-36 md:pb-24'>
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-95'
        style={{
          background: [
            'radial-gradient(ellipse 55% 45% at 18% 16%, rgba(203,118,61,0.34) 0%, transparent 72%)',
            'radial-gradient(ellipse 45% 35% at 82% 18%, rgba(245,205,142,0.32) 0%, transparent 72%)',
            'linear-gradient(180deg, #fffaf4 0%, #f5efe6 55%, #f3ede4 100%)',
          ].join(', '),
        }}
      />
      <div
        aria-hidden
        className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(87,56,31,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(87,56,31,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_68%_56%_at_50%_32%,black_22%,transparent_100%)] bg-[size:5rem_5rem] opacity-[0.42]'
      />
      <div
        aria-hidden
        className='absolute top-20 right-[-9rem] -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,68,24,0.24)_0%,rgba(124,68,24,0)_72%)] blur-2xl'
      />
      <div
        aria-hidden
        className='absolute bottom-8 left-[-6rem] -z-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(214,166,95,0.18)_0%,rgba(214,166,95,0)_72%)] blur-2xl'
      />

      <div className='flex max-w-5xl flex-col items-center text-center'>
        <div
          className='landing-animate-fade-up mb-5 flex items-center justify-center opacity-0'
          style={{ animationDelay: '0ms' }}
        >
          <img
            src='/vibeopus-logo-full.png'
            alt={systemName}
            className='h-auto w-[min(68vw,22rem)] object-contain drop-shadow-[0_18px_34px_rgba(53,35,20,0.12)]'
          />
        </div>
        <h1
          className='landing-animate-fade-up text-[clamp(2.4rem,6.5vw,5.4rem)] leading-[1.02] font-semibold tracking-[-0.04em] text-[rgb(36,24,16)]'
          style={{ animationDelay: '60ms' }}
        >
          {t('A private model gateway with')}
          <br />
          <span className='bg-gradient-to-r from-[rgb(164,94,43)] via-[rgb(201,136,70)] to-[rgb(107,64,32)] bg-clip-text text-transparent'>
            {t('a sharper front door')}
          </span>
        </h1>
        <div
          className='landing-animate-fade-up mt-7 grid w-full max-w-5xl items-stretch gap-4 opacity-0 md:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]'
          style={{ animationDelay: '120ms' }}
        >
          <div className='flex h-full flex-col rounded-[24px] border border-[rgba(113,74,44,0.16)] bg-white/74 p-5 text-left shadow-[0_26px_80px_-46px_rgba(66,43,28,0.55)] backdrop-blur'>
            <p className='text-[11px] font-semibold tracking-[0.24em] text-[rgba(118,75,40,0.78)] uppercase'>
              {t('Supported Models')}
            </p>
            <h2 className='mt-2 text-2xl font-semibold tracking-[-0.03em] text-[rgb(44,29,19)]'>
              {t('Latest flagship models in one gateway')}
            </h2>
            <p className='mt-2 max-w-xl text-sm leading-6 text-[rgba(74,55,41,0.78)]'>
              {t(
                'Route text, vision, reasoning, code, and image requests through one unified entrance.'
              )}
            </p>
            <div className='mt-4 grid gap-2 text-sm text-[rgba(49,35,26,0.9)] sm:grid-cols-2'>
              {supportedModels.map((model) => (
                <div
                  key={model}
                  className='rounded-2xl border border-[rgba(118,75,40,0.12)] bg-[rgba(246,238,226,0.88)] px-3.5 py-2.5 font-semibold shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]'
                >
                  {model}
                </div>
              ))}
            </div>
          </div>
          <div className='flex h-full flex-col rounded-[24px] border border-[rgba(113,74,44,0.16)] bg-[linear-gradient(180deg,rgba(255,252,247,0.92),rgba(244,235,224,0.92))] p-5 text-left shadow-[0_26px_80px_-46px_rgba(66,43,28,0.55)] backdrop-blur'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-[11px] font-semibold tracking-[0.24em] text-[rgba(118,75,40,0.78)] uppercase'>
                  {t('QQ top-up')}
                </p>
                <h2 className='mt-2 text-xl font-semibold tracking-[-0.03em] text-[rgb(44,29,19)]'>
                  {t('Manual recharge and channel replenishment')}
                </h2>
              </div>
              <CircleDollarSign className='size-8 text-[rgb(170,104,55)]' />
            </div>
            <div className='mt-4 flex flex-1 items-center justify-center rounded-[22px] bg-white/82 p-3 shadow-inner'>
              <img
                src='/qq-topup-qr.jpg'
                alt={t('QQ top-up QR')}
                className='aspect-square w-full max-w-[15rem] rounded-2xl object-contain'
              />
            </div>
          </div>
        </div>
        <div
          className='landing-animate-fade-up mt-8 flex items-center gap-3 opacity-0'
          style={{ animationDelay: '160ms' }}
        >
          {props.isAuthenticated ? (
            <Button
              className='group rounded-full bg-[rgb(124,73,38)] px-5 text-white shadow-[0_18px_48px_-24px_rgba(124,73,38,0.9)] hover:bg-[rgb(107,62,31)]'
              render={<Link to='/dashboard' />}
            >
              {t('Go to Dashboard')}
              <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
            </Button>
          ) : (
            <>
              <Button
                className='group rounded-full bg-[rgb(124,73,38)] px-5 text-white shadow-[0_18px_48px_-24px_rgba(124,73,38,0.9)] hover:bg-[rgb(107,62,31)]'
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight className='ml-1 size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              <Button
                variant='outline'
                className='rounded-full border-[rgba(118,75,40,0.22)] bg-white/70 px-5 text-[rgb(78,53,35)] hover:bg-[rgba(255,250,245,0.95)]'
                render={<Link to='/pricing' />}
              >
                {t('View Pricing')}
              </Button>
            </>
          )}
        </div>
      </div>

    </section>
  )
}
