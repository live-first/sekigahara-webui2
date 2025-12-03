import { ArtistType } from '@/domain/artist.ts'
import { ArtistBox } from '../artistBox/index.tsx'
import { ArtistModal } from '../artistModal/artistModal.tsx'
import { Modal } from '@/components/Modal/index.tsx'

export const ArtistBoxModal = (props: ArtistType) => {
  return (
    <Modal button={<ArtistBox {...props} />}>
      <ArtistModal {...props} />
    </Modal>
  )
}
