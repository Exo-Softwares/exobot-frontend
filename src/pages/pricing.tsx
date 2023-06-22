import { AuthOption, withAuth } from '@/utils/withAuth'
import PricingTemplate from '../components/templates/PricingTemplate/PricingTemplate'

const Pricing = () => {
  return (
    <main>
      <PricingTemplate />
    </main>
  )
}

export default withAuth(AuthOption.ANY, Pricing)
