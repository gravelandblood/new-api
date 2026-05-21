import {
  Zap,
  Shield,
  Globe,
  Code,
  Gauge,
  DollarSign,
  Users,
  HeartHandshake,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: 'routing',
      num: '01',
      title: t('Channel routing'),
      desc: t(
        'Prioritize monthly cards, reserve fallback channels, and keep upstream usage strategy explicit.'
      ),
      span: 'md:col-span-2',
      icon: <Zap className='size-4 text-amber-500' />,
      visual: (
        <div className='mt-4 grid grid-cols-3 gap-2'>
          {['OpenAI', 'Claude', 'Gemini', 'GLM', 'DeepSeek', 'Codex'].map(
            (name) => (
              <div
                key={name}
                className='flex items-center justify-center rounded-lg border border-[rgba(113,74,44,0.12)] bg-[rgba(250,243,235,0.95)] px-3 py-2 text-xs text-[rgba(84,62,44,0.82)] transition-colors duration-300 hover:border-[rgba(170,112,63,0.35)] hover:bg-[rgba(255,248,240,1)]'
              >
                {name}
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'billing',
      num: '02',
      title: t('Operator billing'),
      desc: t(
        'Quota, pricing and recharge workflows are visible to the operator instead of hidden in shell scripts.'
      ),
      span: 'md:col-span-1',
      icon: <DollarSign className='size-4 text-[rgb(175,106,55)]' />,
      visual: (
        <div className='mt-4 flex items-center justify-center'>
          <div className='relative'>
            <div className='flex size-16 items-center justify-center rounded-2xl border border-[rgba(172,104,52,0.22)] bg-[rgba(250,243,235,0.95)]'>
              <DollarSign
                className='size-7 text-[rgb(170,104,55)]'
                strokeWidth={1.5}
              />
            </div>
            <div className='absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-[rgb(170,104,55)]'>
              <svg
                className='size-2.5 text-white'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 12.75 6 6 9-13.5'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'stability',
      num: '03',
      title: t('Stable operations'),
      desc: t('Keep logs, limits, and replayable diagnostics close to the traffic path.'),
      span: 'md:col-span-1',
      icon: <Shield className='size-4 text-[rgb(125,87,54)]' />,
      visual: (
        <div className='mt-4 space-y-2'>
          {[t('Failover'), t('Rate Limiting'), t('Cost Tracking')].map(
            (step, i) => (
              <div key={step} className='flex items-center gap-2'>
                <div
                  className={`flex size-6 items-center justify-center rounded-full text-[10px] font-bold ${
                    i === 1
                      ? 'border border-[rgba(170,104,55,0.28)] bg-[rgba(170,104,55,0.14)] text-[rgb(146,86,42)]'
                      : 'border border-[rgba(113,74,44,0.12)] bg-[rgba(250,243,235,0.95)] text-[rgba(84,62,44,0.82)]'
                  }`}
                >
                  {i + 1}
                </div>
                <div className='bg-border/40 h-px flex-1' />
                <span className='text-muted-foreground text-xs'>{step}</span>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'interface',
      num: '04',
      title: t('Client compatibility'),
      desc: t('Responses, chat, Claude, Gemini and image routes stay available behind one branded surface.'),
      span: 'md:col-span-2',
      icon: <Code className='size-4 text-[rgb(170,104,55)]' />,
      visual: (
        <div className='mt-4 flex items-center gap-3'>
          <div className='flex -space-x-2'>
            {['API', 'SDK', 'CLI', 'Docs'].map((n) => (
              <div
                key={n}
                className='flex size-8 items-center justify-center rounded-full border-2 border-[rgba(255,248,240,0.95)] bg-gradient-to-br from-[rgba(252,244,236,1)] to-[rgba(242,230,216,1)] text-[9px] font-bold text-[rgba(88,61,40,0.85)]'
              >
                {n}
              </div>
            ))}
          </div>
          <div className='flex items-center gap-1.5 text-xs text-[rgba(84,62,44,0.82)]'>
            <Code className='size-3.5 text-[rgb(170,104,55)]' />
            {t('Multi-protocol Compatible')}
          </div>
        </div>
      ),
    },
  ]

  const additionalFeatures = [
    {
      icon: <Gauge className='size-5' strokeWidth={1.5} />,
      title: t('Fast traceability'),
      desc: t('Inspect upstream behavior without losing routing context.'),
    },
    {
      icon: <DollarSign className='size-5' strokeWidth={1.5} />,
      title: t('Recharge workflow'),
      desc: t('Manual balance top-up and operator-assisted support stay visible.'),
    },
    {
      icon: <Users className='size-5' strokeWidth={1.5} />,
      title: t('Tenant control'),
      desc: t('Separate users, quotas and access modes without a second control plane.'),
    },
    {
      icon: <HeartHandshake className='size-5' strokeWidth={1.5} />,
      title: t('Custom operated'),
      desc: t('Built for self-hosted operators who need leverage, not a demo shell.'),
    },
  ]

  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-16 max-w-lg'>
          <p className='mb-3 text-xs font-medium tracking-widest text-[rgba(118,75,40,0.74)] uppercase'>
            {t('Core Features')}
          </p>
          <h2 className='text-2xl leading-tight font-semibold tracking-[-0.03em] text-[rgb(42,28,20)] md:text-3xl'>
            {t('Built for operators,')}
            <br />
            {t('designed for control')}
          </h2>
        </AnimateInView>

        <div className='grid gap-px overflow-hidden rounded-[28px] border border-[rgba(113,74,44,0.16)] bg-[rgba(204,173,141,0.18)] shadow-[0_24px_80px_-54px_rgba(53,33,18,0.55)] md:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation='scale-in'
              className={`group bg-[rgba(255,251,246,0.94)] p-7 transition-colors duration-300 hover:bg-[rgba(255,247,239,0.98)] md:p-8 ${f.span}`}
            >
              <div className='mb-3 flex items-center gap-3'>
                <span className='flex size-7 items-center justify-center rounded-md border border-[rgba(113,74,44,0.12)] bg-[rgba(250,243,235,0.95)] text-[10px] font-semibold tabular-nums text-[rgba(84,62,44,0.82)]'>
                  {f.num}
                </span>
                <h3 className='text-sm font-semibold text-[rgb(45,30,21)]'>
                  {f.title}
                </h3>
              </div>
              <p className='text-sm leading-relaxed text-[rgba(71,52,37,0.82)]'>
                {f.desc}
              </p>
              {f.visual}
            </AnimateInView>
          ))}
        </div>

        {/* Additional features row */}
        <div className='mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12'>
          {additionalFeatures.map((f, i) => (
            <AnimateInView
              key={f.title}
              delay={i * 100}
              animation='fade-up'
              className='flex flex-col items-center text-center'
            >
              <div className='mb-3 flex size-12 items-center justify-center rounded-xl border border-[rgba(113,74,44,0.12)] bg-[rgba(250,243,235,0.95)] text-[rgb(128,80,45)] transition-colors group-hover:text-[rgb(95,60,33)]'>
                {f.icon}
              </div>
              <h3 className='mb-1.5 text-sm font-semibold text-[rgb(45,30,21)]'>
                {f.title}
              </h3>
              <p className='max-w-[200px] text-xs leading-relaxed text-[rgba(71,52,37,0.78)]'>
                {f.desc}
              </p>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
