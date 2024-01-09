import uuid from 'uuid'

export default function getUuid (): string {
  return uuid.v4()
}
