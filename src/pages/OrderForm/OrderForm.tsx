import { useEffect } from 'react';
import { Path, SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import NameInput from './components/NameInput/NameInput';
import DateInput from './components/DateInput/DateInput';
import PlaceSelect from './components/PlaceSelect/PlaceSelect';
import Reminder from './components/Reminder/Reminder';
import Toggle from './components/Toggle/Toggle';
import FileSelect from './components/FileSelect/FileSelect';
import OrderList from '../../components/OrderList/OrderList';

import { AppDispatch, RootState } from '../../redux/store';
import { onInput } from '../../redux/ordersSlice';

import './OrderForm.css';

export type TOrderForm = {
  nameInput?: string;
  placeSelect?: string;
  reminder?: boolean;
  isToggled?: boolean;
  dateInput?: string;
  selectedFile?: File;
};

export type TFormInput = {
  nameInput?: string;
  placeSelect?: string;
  reminder?: boolean;
  isToggled?: boolean;
  dateInput?: string;
  selectedFile?: File[];
};

export type InputProps = {
  label: Path<TFormInput>;
  register: UseFormRegister<TFormInput>;
  required?: boolean;
};

const OrderForm = () => {
  const { ...order } = useSelector<RootState>((state) => state.orders.order) as TFormInput;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<TFormInput>({
    defaultValues: { ...order },
  });

  const dispatch = useDispatch<AppDispatch>();
  const orders = useSelector<RootState>((state) => state.orders.orders) as TOrderForm[];

  const onSubmit: SubmitHandler<TFormInput> = (data: TFormInput): void => {
    const order = {
      nameInput: data.nameInput,
      placeSelect: data.placeSelect,
      reminder: data.reminder,
      isToggled: data.isToggled,
      dateInput: data.dateInput,
      selectedFile: data.selectedFile?.[0],
    };

    dispatch(onInput(order));
    alert('Your order is saved successfully');
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        nameInput: '',
        placeSelect: '',
        reminder: false,
        isToggled: false,
        dateInput: '',
        selectedFile: [],
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Order form</h3>
        <NameInput label={'nameInput'} register={register} required />
        {errors['nameInput'] && <p className="errors name-info">{errors['nameInput']?.message}</p>}
        <DateInput label={'dateInput'} register={register} required />
        {errors['dateInput'] && <p className="errors date-info">{errors['dateInput']?.message}</p>}
        <PlaceSelect label={'placeSelect'} register={register} required />
        {errors['placeSelect'] && (
          <p className="errors place-info">{errors['placeSelect']?.message}</p>
        )}
        <Reminder label={'reminder'} register={register} />
        <Toggle label={'isToggled'} register={register} />
        <FileSelect label={'selectedFile'} register={register} required />
        {errors['selectedFile'] && <p className="errors file-info">{'File can not be empty!'}</p>}
        <input type="submit" value="Submit" disabled={!isDirty} />
      </form>
      <OrderList orders={orders} />
    </>
  );
};
export default OrderForm;
