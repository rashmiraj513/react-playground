import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

const UpdateOrder = () => {
  const fetcher = useFetcher();
  const isIdle = fetcher.state === 'idle';

  return (
    <fetcher.Form method='PATCH' className='text-right'>
      <Button type='primary'>
        {isIdle ? 'Make Priority' : 'Processing...'}
      </Button>
    </fetcher.Form>
  );
};

export const action = async ({ params }) => {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
};

export default UpdateOrder;
