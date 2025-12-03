import React, { useState } from 'react'
import { z } from 'zod'
import { Alert, Checkbox, Container, FormControlLabel, FormGroup } from '@mui/material'
import { BaseView2025 } from '../../layout/index.tsx'
import {
  company,
  email,
  group_name,
  live,
  member_num,
  mic_num,
  name,
  phoneNumber,
  url,
} from '@/domain/schema.ts'
import { init, send } from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import { PiArrowSquareOutLight } from 'react-icons/pi'
import { edoLive, osakaLive, owariLive } from '../../../../resource/2025/yosen.ts'
import { Title } from '@/components/title/title.tsx'
import { Frame } from '@/components/Frame/index.tsx'
import Link from 'next/link'
import { TextFieldForm } from '@/templates/form/TextFieldForm.tsx'
import { FormField } from '@/templates/form/index.tsx'
import { Img } from '@/components/Image/index.tsx'

export const Entry2025DetailView = () => {
  const [emailStatusMessage, setEmailStatusMessage] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [checked, setChecked] = useState<string[]>([])
  const [withChecked, setWith] = useState<boolean>(false)
  const [privacyChecked, setPrivacyChecked] = useState<boolean>(false)
  const [ruleChecked, setRuleChecked] = useState<boolean>(false)
  const [isSubmit, setSubmit] = useState<boolean>(false)

  const EntrySchema = z.object({
    company: company, // 事務所名
    group_name: group_name, // グループ名
    name: name, // 担当者名
    email: email, // メールアドレス
    phone_number: phoneNumber, // 電話番号
    member_num: member_num, // メンバー数
    mic_num: mic_num, // マイク本数
    artist_pic: url, // アーティスト写真URL
    live: live, // 出演日程
  })

  type EntryType = z.infer<typeof EntrySchema>

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const current = checked
    const id = event.target.id
    const nextChecked = event.target.checked
      ? current.concat(id)
      : current.filter((val) => val !== id)
    setChecked(nextChecked)
    setValue('live', nextChecked, { shouldValidate: true })
  }

  const sendEmail = async (data: EntryType) => {
    setEmailStatusMessage(false)
    setError(false)
    setSubmit(true)
    setTimeout(() => setSubmit(false), 5000)
    try {
      const liveLabel = data.live.map((val) => {
        const edo = edoLive.find((edo) => edo.id === val)?.label
        const owari = owariLive.find((owari) => owari.id === val)?.label
        const osaka = osakaLive.find((osaka) => osaka.id === val)?.label
        return edo ?? owari ?? osaka ?? ''
      })
      data.live = liveLabel
      init('IdTWr2VgMdRiCW1AG')
      await send('service_lurdshc', 'sekigahara_entry', data)
      await send('service_livefirst', 'sekigahara_notification', data)

      setEmailStatusMessage(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(true)
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = useForm<EntryType>({
    mode: 'onChange',
    resolver: zodResolver(EntrySchema),
  })

  return (
    <BaseView2025>
      <Container maxWidth='md'>
        <Title english='予戦会概要' japaniese='エントリー' />
        <div className='flex flex-col gap-6 py-6'>
          <Frame>
            <Header title='予戦会概要' />
            <div className='flex flex-col gap-1 pl-3'>
              <p>
                本イベントは「関ケ原唄姫合戦2025（本戦）」への出演をかけたイベントです。
                <br />
                期間は5/1〜5/25（ライブは5/9〜5/25）で行います。
                <br />
                参戦者の上位20組が本戦出演が決定します。
              </p>
              <br />
              <br />
              <div className='text-sekigahara font-bold text-xl'>開催地域</div>
              <p className='pl-2'>
                東京（江戸の乱）、名古屋（尾張・美濃の乱）、大阪（大阪の乱）の地域で開催されます。
              </p>
              <div className='text-sekigahara font-bold text-xl'>ルール</div>
              <p className='pl-2'>
                有観客ライブでの投票（投俵）ポイント＋METALIVE配信ポイントの合算によって順位を決定します。
              </p>
            </div>
          </Frame>
          <Frame>
            <Header title='予戦会参戦資格・条件' />
            <div className='flex flex-col gap-1 pl-3'>
              <p>
                予戦会への参戦には下記の資格・条件
                <span className='text-red-600 font-bold'>全てに</span>満たす必要があります。
              </p>
              <p>
                いずれか一つでも満たない場合は資格を喪失します。上位20位に入っていた場合も出演ができなくなりますのでご注意ください。
              </p>
              <br />
              <div className='text-sekigahara font-bold text-xl'>参戦資格・条件</div>
              <ul className='flex flex-col gap-2'>
                <li>
                  ・国内でアイドル活動をしているユニットおよびソロの方（事務所所属の有無は問わず）
                </li>
                <li>・予戦会有観客ライブに3回以上の出演ができること（出演は最大10回まで）</li>
                <li>
                  ・関ケ原唄姫合戦2025本戦の出演日程（7/19,20,21）の3日間スケジュールを空けておけること
                </li>
                <li>・METALIVEを期間中（5/10〜5/25）で25時間以上の配信ができること</li>
                <li>
                  ・Withコレを期間中（5/1〜5/25）で20万ポイント以上のデジタルコンテンツ販売ができること
                </li>
              </ul>
            </div>
          </Frame>
          <Frame>
            <Header title='予戦会に参加するメリット' />
            <div className='flex flex-col gap-4 p-3'>
              予戦会に出場することで、本戦に出演できる機会を得られることだけじゃないメリットを紹介します。
              <div className='flex flex-col gap-2 border border-sekigahara'>
                <div className='bg-sekigahara p-2 text-white text-xl font-bold'>
                  新たなファンを獲得できる可能性がある
                </div>
                <div className='p-2'>
                  出場することで頑張ってる姿に応援してくれるファンが増える可能性があります。
                </div>
              </div>
              <div className='flex flex-col gap-2 border border-sekigahara'>
                <div className='bg-sekigahara p-2 text-white text-xl font-bold'>
                  知名度の向上が期待できる
                </div>
                <div className='p-2'>
                  参戦することで、グループのことや名前を知ってもらえるきっかけになります。
                  <br />
                  本年は予戦会のHPを制作し、出場者の一覧ページなどを設け、掲載することで
                  <br />
                  出場するユニット様のことを知っていただけるきっかけづくりに取り組んでまいります。
                </div>
              </div>
              <div className='flex flex-col gap-2 border border-sekigahara'>
                <div className='bg-sekigahara p-2 text-white text-xl font-bold'>
                  関ケ原本戦出場以外に豪華な権利を得られる可能性がある
                </div>
                <div className='p-2'>
                  本年の特典は未定ですが、参考までに昨年の特典は昨年の予戦会ページをご確認ください。
                  <br />
                  <Link
                    href='https://sekigahara-idolwars.net/2024/yosen'
                    className='text-blue-600 flex gap-1 my-4 items-center'
                    target='_blank'
                  >
                    関ケ原唄姫合戦2024 予戦会
                    <PiArrowSquareOutLight />
                  </Link>
                </div>
              </div>
            </div>
          </Frame>
          {/* <Frame>
            <Header title='METALIVE配信について' />
            <div className='flex flex-col gap-1'></div>
          </Frame> */}
          <Frame>
            <Header title='Withコレについて' />
            <div className='flex flex-col gap-1 pl-3'>
              WithLIVEコレクションについては、下記リンクからご確認お願いします。
              <Link
                className='text-blue-600 flex gap-1 items-center justify-center my-4'
                href='https://www.withlive.jp/lp/withlive_collection_cast_sakigahara2025.html'
                target='_blank'
              >
                WithLIVEコレクション
                <PiArrowSquareOutLight />
              </Link>
            </div>
          </Frame>
          <Frame>
            <Header title='エントリーフロー' />
            <div className='flex flex-col gap-4'>
              <p>エントリー受付開始は2025年4月5日（土）からとなります。</p>
              <div className='flex flex-col gap-4 text-center items-center'>
                <TodoContent
                  src='https://www.shoshinsha-design.com/wp-content/uploads/2022/01/%E6%9B%B8%E9%A1%9E%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3-760x460.png'
                  alt='form'
                  message='エントリーフォームより必要事項を入力する'
                />
                <HiOutlineChevronDoubleDown className='w-[100px] h-[50px]' />
                <TodoContent
                  src='https://user.meta-live.jp/static/media/metalive.968fd73208a6f0ae6043dd3a1b43b3c2.svg'
                  alt='METALIVE'
                  message='METALIVEのアカウントの作成'
                />
                <HiOutlineChevronDoubleDown className='w-[100px] h-[50px]' />
                <TodoContent
                  src='https://www.withlive.jp/img/withlive-logo.png'
                  alt='WithLIVEコレクション'
                  message='WithLIVEコレクションのアカウントの作成'
                />
              </div>
            </div>
          </Frame>
          <Frame>
            <Header title='エントリーフォーム' />
            <p className='my-5 text-red-500'>エントリーはユニットごとに送信お願いします。</p>
            <form onSubmit={handleSubmit((e) => sendEmail(e))}>
              <div className='flex flex-col gap-4'>
                <div className='text-sekigahara font-bold text-xl'>ユニット情報入力</div>
                <div className='flex flex-col gap-4 pl-4'>
                  <TextFieldForm
                    title='ユニット名'
                    description='こちらにご記載いただいたユニット名を告知などに使用させていただきます。'
                    required
                    placeholder='ユニット名、活動名'
                    register={register('group_name')}
                    error={errors.group_name?.message}
                  />
                  <TextFieldForm
                    title='メンバー数'
                    description='予戦会に参加するメンバー数をご記入ください。'
                    required
                    placeholder='0'
                    register={register('member_num')}
                    error={errors.member_num?.message}
                  />
                  <TextFieldForm
                    title='マイク使用本数'
                    description='ライブに使用するマイクの本数をご記入ください。'
                    required
                    placeholder='0'
                    register={register('mic_num')}
                    error={errors.mic_num?.message}
                  />
                  <TextFieldForm
                    title='アーティスト写真'
                    description='ギガファイル便にアーティスト写真をアップロードの上、共有URLをご記載ください。'
                    required
                    placeholder='https://gigafile.nu/'
                    register={register('artist_pic')}
                    error={errors.artist_pic?.message}
                  />
                  <p>
                    <Link
                      className='text-blue-600 flex gap-1 items-center'
                      href='https://gigafile.nu/'
                      target='_blank'
                    >
                      ギガファイル便
                      <PiArrowSquareOutLight />
                    </Link>
                  </p>
                </div>

                <div className='text-sekigahara font-bold text-xl'>ご担当者情報入力</div>
                <div className='flex flex-col gap-4 pl-4'>
                  <TextFieldForm
                    title='所属事務所名'
                    register={register('company')}
                    error={errors.company?.message}
                  />
                  <TextFieldForm
                    title='ご担当者名'
                    required
                    placeholder='山田　太郎'
                    register={register('name')}
                    error={errors.name?.message}
                  />
                  <TextFieldForm
                    title='メールアドレス'
                    required
                    placeholder='mail@example.com'
                    register={register('email')}
                    error={errors.email?.message}
                    type='email'
                  />
                  <TextFieldForm
                    title='電話番号'
                    description='ご担当者様の電話番号をご記入ください。'
                    required
                    placeholder='0x012345678'
                    register={register('phone_number')}
                    error={errors.phone_number?.message}
                  />
                </div>

                <div className='text-sekigahara font-bold text-xl'>予戦会ライブ出演日程選択</div>
                <div className='flex flex-col pl-4'>
                  <FormField error={errors.live?.message}>
                    <FormGroup>
                      <div className='bg-edo px-2 py-1 w-full font-bold'>江戸の陣</div>
                      <div className='flex flex-col bg-edo_bg gap-2 sm:pl-0'>
                        {edoLive.map((live, index) => (
                          <FormControlLabel
                            control={<Checkbox onChange={(e) => handleCheck(e)} id={live.id} />}
                            key={`edo-${index}`}
                            id={live.id}
                            label={live.label}
                            value={live.id}
                          />
                        ))}
                      </div>
                      <div className='bg-owari px-2 py-1 w-full font-bold'>尾張・美濃の陣</div>
                      <div className='flex flex-col bg-owari_bg gap-2'>
                        {owariLive.map((live, index) => (
                          <FormControlLabel
                            control={<Checkbox onChange={(e) => handleCheck(e)} id={live.id} />}
                            key={`owari-${index}`}
                            id={live.id}
                            label={live.label}
                            value={live.id}
                          />
                        ))}
                      </div>
                      <div className='bg-osaka px-2 py-1 w-full font-bold'>大阪の陣</div>
                      <div className='flex flex-col bg-osaka_bg gap-2'>
                        {osakaLive.map((live, index) => (
                          <FormControlLabel
                            control={<Checkbox onChange={(e) => handleCheck(e)} id={live.id} />}
                            key={`osaka-${index}`}
                            id={live.id}
                            label={live.label}
                            value={live.id}
                          />
                        ))}
                      </div>
                    </FormGroup>
                  </FormField>
                </div>

                <div className='text-sekigahara font-bold text-xl'>各種同意</div>
                <div className='flex flex-col gap-3 pl-4'>
                  <p className='flex flex-col sm:flex-row sm:flex-wrap'>
                    <Link
                      className='text-blue-600 flex gap-1 items-center whitespace-nowrap'
                      href='https://www.withlive.jp/lp/withlive_collection_cast_sakigahara2025.html'
                      target='_blank'
                      onClick={() => setWith(true)}
                    >
                      WithLIVEコレクション
                      <PiArrowSquareOutLight />
                    </Link>
                    <span className='ml-0 sm:ml-1'>の内容・条件に同意します。</span>
                  </p>
                  <p className='flex flex-col sm:flex-row sm:flex-wrap'>
                    <Link
                      className='text-blue-600 flex gap-1 items-center whitespace-nowrap'
                      href='https://sekigahara-idolwars.net/doc/プライバシーポリシー.pdf'
                      target='_blank'
                      onClick={() => setPrivacyChecked(true)}
                    >
                      プライバシーポリシー
                      <PiArrowSquareOutLight />
                    </Link>
                    <span className='ml-0 sm:ml-1'>の内容に同意します。</span>
                  </p>
                  <p className='flex items-center'>
                    <Checkbox onChange={() => setRuleChecked(true)} />
                    関ケ原歌姫合戦2025予戦会の内容や条件に同意します。
                  </p>
                </div>

                <button
                  type='submit'
                  disabled={
                    !withChecked ||
                    !privacyChecked ||
                    !ruleChecked ||
                    !isValid ||
                    isSubmitting ||
                    isSubmit
                  }
                  className='bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white  disabled:bg-gray-300 md:self-center'
                >
                  ENTRY
                </button>
                {emailStatusMessage && (
                  <Alert severity='success'>
                    関ケ原唄姫合戦2025 予戦会へのエントリーありがとうございます。
                  </Alert>
                )}
                {error && (
                  <Alert severity='error'>
                    エントリーの受付に失敗しました。時間をおいて再度送信お願いします。
                  </Alert>
                )}
              </div>
            </form>
          </Frame>
        </div>
      </Container>
    </BaseView2025>
  )
}

const Header = ({ title }: { title: string }) => {
  return (
    <h3 className='flex text-center text-2xl font-bold border-b-[#e14040] border-b-2 mb-6 py-2 text-[#e14040]'>
      {title}
    </h3>
  )
}

const TodoContent = ({ src, alt, message }: { src: string; alt: string; message: string }) => {
  return (
    <div className='flex flex-col w-full text-center border border-sekigahara rounded-md bg-slate-200 gap-4 py-3 px-2'>
      <Img src={src} alt={alt} cName='w-1/2 self-center' />
      <p className='font-bold'>{message}</p>
    </div>
  )
}
