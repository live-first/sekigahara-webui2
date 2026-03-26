'use client'

import React, { useState } from 'react'
import { z } from 'zod'
import { Alert, Container } from '@mui/material'
import { init, send } from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { company, email, group_name, phoneNumber, name } from '@/domain/schema.ts'
import { Title } from '@/components/title/title.tsx'
import { Frame } from '@/components/Frame/index.tsx'
import { TextFieldForm } from '@/templates/form/TextFieldForm.tsx'
import keyvisual from '@/image/2026/yosen_keyvisual.jpg'
import { Img } from '@/components/Image'

export const Entry2026View = () => {
  const [emailStatusMessage, setEmailStatusMessage] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [isSubmit, setSubmit] = useState<boolean>(false)
  const EntrySchema = z.object({
    company: company,
    group_name: group_name,
    name: name,
    email: email,
    phone_number: phoneNumber, // 電話番号
  })

  type ContactType = z.infer<typeof EntrySchema>

  const sendEmail = async (data: ContactType) => {
    setEmailStatusMessage(false)
    setError(false)
    setSubmit(true)
    setTimeout(() => setSubmit(false), 5000)
    try {
      init('IdTWr2VgMdRiCW1AG')
      await send('service_lurdshc', 'sekigahara_pre_entry', data)

      setEmailStatusMessage(true)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError(true)
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: 'onChange',
    resolver: zodResolver(EntrySchema),
  })

  return (
    <Container maxWidth='sm'>
      <Title english='Pre ENTRY' japaniese='プレエントリー' />
      <div className='flex flex-col gap-6 py-6'>
        <Img src={keyvisual.src} alt='keyvisual' />
        <Frame>
          関ケ原唄姫合戦2026
          予戦会エントリーに関する情報は下記項目を記入の上、進めていただけますようお願い申し上げます。
          <br />
          <br />
          なお、本フォームの送信ではエントリーしたことにはなりません。ご注意ください。
          <br />
          ※送信されたメールは迷惑メールフォルダにある場合もありますので、ご確認お願いします。
          <Alert severity='warning' className='mt-4'>
            一般のお客様からのエントリーは受け付けておりません。アイドル活動をしている方およびその関係者様以外の送信はおやめください。
          </Alert>
        </Frame>
        <Frame>
          <form onSubmit={handleSubmit((e) => sendEmail(e))}>
            <div className='flex flex-col gap-4'>
              <TextFieldForm
                title='ユニット名'
                required
                placeholder='ユニット名、活動名'
                register={register('group_name')}
                error={errors.group_name?.message}
              />
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
                required
                placeholder='0x012345678'
                register={register('phone_number')}
                error={errors.phone_number?.message}
              />
              <button
                type='submit'
                disabled={!isValid || isSubmitting || isSubmit}
                className='bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white  disabled:bg-gray-300 md:self-center'
              >
                送信する
              </button>
              {emailStatusMessage && (
                <Alert severity='success'>
                  エントリーフローに関するご案内のメールを送信しました。ご確認お願いします。
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
  )
}
