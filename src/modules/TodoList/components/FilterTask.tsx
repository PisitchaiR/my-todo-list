import { Radio } from 'antd';
import { useAtom } from 'jotai';
import { filterTypeAtom } from '../store/Todos';

const FilterTask = () => {
  const [filter, set] = useAtom(filterTypeAtom);

  return (
    <Radio.Group onChange={(e) => set(e.target.value)} value={filter}>
      <Radio value="all">All</Radio>
      <Radio value="completed">Completed</Radio>
      <Radio value="incompleted">Incompleted</Radio>
    </Radio.Group>
  );
};

export default FilterTask;
