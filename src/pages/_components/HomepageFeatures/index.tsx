import React from 'react'
import clsx from 'clsx'
import Translate, { translate } from '@docusaurus/Translate'

import styles from './styles.module.scss'

import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import SectionTitle from '../SectionTitle'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '算是程序员吧',
    }),
    Svg: WebDeveloperSvg,
    description: (
      <>
        平时工作包括：需求受理与分析、数据库表结构设计、参与后端代码编写、跟进团队项目进度等等，更喜欢些代码。
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '我有架构师证书哦',
    }),
    Svg: SpiderSvg,
    description: (
      <>
        哈哈，我考过了软考高级，系统架构设计师。别管自己有多少水平，考过了就很开心
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    Svg: OpenSourceSvg,
    description: (
      <>
        作为一名开源爱好者，积极参与开源社区，为开源项目贡献代码，希望有生之年能够构建出一个知名的开源项目。
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section
      className={clsx(styles.featureContainer, 'container padding-vert--sm')}
    >
      <SectionTitle icon={'ri:map-pin-user-line'}>
        <Translate id="homepage.feature.title">个人特点</Translate>
      </SectionTitle>
      <div className={clsx('row', styles.features)}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
