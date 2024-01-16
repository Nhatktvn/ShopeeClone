import RegisterHeader from 'src/components/RegisterHeader/RegisterHeader'

interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
    </div>
  )
}
