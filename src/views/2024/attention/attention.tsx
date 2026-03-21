'use client'

import { Container } from '@mui/material'
import { Title } from '@/components/title/title'
import { Frame } from '@/components/Frame'
import { BaseViewLayout } from '@/layouts/BaseViewLayout'
import Header from '../header/header'
import Footer from '../footer/footer'

const MainView = () => {
  return (
    <div className='attention'>
      <Container maxWidth='md'>
        <Title english='NOTICE' japaniese='注意事項' />
        <div className='attention-head flex'>
          <div className='spade-shape'></div>
          ステージ観覧上のご注意
        </div>
        <Frame>
          <ul>
            <li>LIVEの撮影・録画は禁止になります。</li>
            <li>
              リフトは禁止です。(徳川ステージに関しましては、一部後方エリアは可能となります。)
            </li>
            <li>過度なモッシュは禁止となります。</li>
            <li>前方への圧縮がかかるモッシュは禁止です。</li>
            <li>ダイブは、禁止となります。</li>
            <li>サークルは危険の無いようにお願い致します。(下剋上ステージは禁止です。)</li>
            <li>各ステージの柵に乗る行為は禁止です。</li>
            <li>戦国ステージの公園内の遊具は使用できません。登る事も禁止です。</li>
            <li>サイリウムを投げる行為は一切禁止です。投げた場合、即時退場となります。</li>
            <li>演出上、客席に物を投げる場合がございます。ステージに投げ返す行為は禁止です。</li>
            <li>他人に迷惑をかける行為や危険な行為は一切禁止です。</li>
            <li>パフォーマンスに支障をきたす行為は一切禁止です。</li>
            <li>
              徳川ステージ、豊臣ステージにはプレミアチケット専用エリアがございます。リストバンドにて確認致します。
            </li>
            <li>ステージは皆さんにお楽しみいただきたいです譲り合ってお楽しみください。</li>
            <li>熱中症には十分注意して観覧をお願い致します。</li>
            <li>体調が、すぐれない方は近くのイベントスタッフまでお声がけください。</li>
          </ul>
        </Frame>

        <div className='attention-head flex'>
          <div className='spade-shape'></div>
          会場全体のご注意とご案内
        </div>
        <Frame>
          <ul>
            <li>
              リストバンドはそれぞれの有効期間中は絶対に外さないようお願いいたします。切ったり、外したりした場合、再入場はできません。また、リストバンドの再発行はいたしませんのでご注意ください。
            </li>
            <li>リストバンドは他人に譲る事は出来ません。</li>
            <li>
              偽装のリストバンドでの入場を発見した場合は即時退場、及び悪質とみなされる場合は、警察に通報します。
            </li>
            <li>
              スタッフが、酩酊状態と判断した場合は、入場・再入場・ライブ観覧をお断りさせて頂きますので予めご了承ください。
            </li>
            <li>会場にF O O Dエリア、ドリンク販売コーナーがございますのでご利用ください。</li>
            <li>プレミアエリアは、プレミアチケットでのご入場の方のみ使用可能です。</li>
            <li>物販・特典会は各運営さまのルールに従いご参加ください。</li>
          </ul>
        </Frame>

        <div className='attention-head flex'>
          <div className='spade-shape'></div>
          チケット購入に関する注意事項
        </div>
        <Frame>
          <ul>
            <li>
              チケットの紛失・破損の際の再発行はできませんので、公演日まで大切に保管してください。
            </li>
            <li>
              2DAYS以上の公演日のチケットを購入された方は、関ケ原唄姫合戦2024終了まで大切に保管してください。
            </li>
            <li>理由を問わずお客様都合でのチケットの払い戻しは致しません。</li>
            <li>
              岐阜県限定チケットは、岐阜県に在住の方のみ、チケットの購入が可能になります。(入場時に顔付き身分証の確認がございますので予めご了承ください。)
            </li>
            <li>
              出演者変更・キャンセル、またタイムテーブル変更に伴うチケットの払い戻しはございません。払い戻しは公演中止の場合のみ行います。
            </li>
            <li>
              公演日／券種の買い間違いにはご注意ください。誤って購入してしまった場合にも払戻は行いません。
            </li>
          </ul>
        </Frame>
      </Container>
    </div>
  )
}

export const Attention2024View = () => {
  return <BaseViewLayout header={<Header />} footer={<Footer />} main={<MainView />} />
}
