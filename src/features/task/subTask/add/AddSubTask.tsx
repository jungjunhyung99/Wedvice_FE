'use client';

import { useState } from 'react';
import TextArea from '@/components/atoms/textArea/TextArea';
import TextInput from '@/components/atoms/textInput/TextInput';
import { Button } from '@/components/atoms/button';
import { ManagerSelect } from '@/components/molecules/managerSelect';
import { FoldableSelector } from '@/components/molecules/foldableSelector';
import { TopBar } from '@/components/molecules/topBar';

interface SubTaskForm {
  title: string;
  manager: string;
  description: string;
  dueDate: string | null;
}

export const AddSubTask = () => {
  const [form, setForm] = useState<SubTaskForm>({
    title: '',
    manager: '',
    description: '',
    dueDate: null,
  });

  const [isValid, setIsValid] = useState<boolean>(false);

  const handleFormChange = (key: keyof SubTaskForm, value: string | null) => {
    const newForm = { ...form, [key]: value };
    setForm(newForm);

    const isFormValid = Boolean(
      newForm.title &&
        newForm.manager &&
        newForm.description &&
        newForm.dueDate,
    );
    setIsValid(isFormValid);
  };

  const handleSubmit = () => {
    if (!isValid) return;
    // TODO: API 호출 로직 추가
    console.log('Form submitted:', form);
  };

  return (
    <div className='flex h-full w-full flex-col items-center bg-gray-50'>
      <TopBar title='스튜디오 촬영하기' className='w-full' />

      <section className='relative mt-4 flex h-full w-full flex-col items-center gap-5 overflow-y-scroll px-5 scrollbar-hide'>
        <TextInput
          value={form.title}
          onChange={(value) => handleFormChange('title', value)}
          placeholder='어떤 할 일인가요?'
          maxLength={18}
        />

        <ManagerSelect
          selectedValue={form.manager}
          setSelectedValue={(value) => handleFormChange('manager', value)}
        />

        <div className='my-2 w-full border-b bg-gray-200' />

        <TextArea
          value={form.description}
          onChange={(value) => handleFormChange('description', value)}
          placeholder='상세 설명'
          maxLength={50}
        />

        <FoldableSelector
          selectedValue={form.dueDate}
          setSelectedValue={(value) => handleFormChange('dueDate', value)}
        />

        <Button
          onClick={handleSubmit}
          size='lg'
          variant={isValid ? 'primary_fill' : 'gray_fill'}
          width='register'
          className={`${!isValid && 'pointer-events-none'} mb-[34px] mt-auto`}
        >
          리스트 등록하기
        </Button>
      </section>
    </div>
  );
};

export default AddSubTask;
