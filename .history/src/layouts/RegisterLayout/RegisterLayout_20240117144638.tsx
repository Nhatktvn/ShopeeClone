import Footer from '../../components/Footer'
import RegisterHeader from '../../components/RegisterHeader'

interface Props {
  children?: React.ReactNode
  <title></title>
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
