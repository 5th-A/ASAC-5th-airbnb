import HostIntroduction from '@/components/HostIntroduction/HostIntroduction'

export default async function GetHostInfo({ id }) {
  const res = await fetch(`http://localhost:3000/HostInfo.json`)
  const hostData = await res.json()

  return <HostIntroduction hostData={hostData} />
}
