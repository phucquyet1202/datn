import React, { useState } from 'react'
import type { FormProps, GetProps } from 'antd';
import { Button, Checkbox, Form, Input, DatePicker, Space, Modal, Select, message, InputNumber } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useCreateVoucherMutation } from '../../../api/voucher'
import { useGetAllRoomTypeQuery } from '../../../api/roomType'

type CreateVoucherModalProps = {
    isOpenCreate: boolean;
    onCancel: () => void;
};

const CreateVoucherModel = ({ isOpenCreate, onCancel }: CreateVoucherModalProps) => {
    const [createVoucher, resultCreate] = useCreateVoucherMutation();
    const { data: roomType } = useGetAllRoomTypeQuery('')
    const [selectedDates, setSelectedDates] = useState<[string | null, string | null]>([null, null]);
    const { RangePicker } = DatePicker;
    const [form] = Form.useForm();
    type FieldType = {
        voucherCode?: string;
        issueDate?: string;
        expiryDate?: string;
        discountValue: number;
        description: string;
        roomType: string;
    };
    type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

    dayjs.extend(customParseFormat);

    const disabledDate: RangePickerProps['disabledDate'] = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        const [startDate, endDate] = selectedDates;
        const formattedValues = {
            ...values,
            issueDate: startDate ? dayjs(startDate).format('YYYY-MM-DD') : undefined,
            expiryDate: endDate ? dayjs(endDate).format('YYYY-MM-DD') : undefined,
        };
        createVoucher(formattedValues)
            .unwrap()
            .then((response) => {
                message.success(response.message);
                form.resetFields();
                onCancel();
            })
            .catch((error) => {
                message.error(error.data.message);
            });
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Modal
                title="Thêm mới voucher"
                open={isOpenCreate}
                onCancel={onCancel}
                footer={null}
                width={1000}
                style={{ top: 20 }}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Code"
                        name="voucherCode"
                        rules={[{ required: true, message: 'Vui lòng nhập code!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Thời gian voucher"
                        // name="issueDate"
                        rules={[{ required: true, message: 'Vui lòng nhập thời gian áp dụng voucher!' }]}
                    >
                        <RangePicker
                            disabledDate={disabledDate}
                            onChange={(dates: any) => setSelectedDates(dates)}
                        />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Giảm giá"
                        name="discountValue"
                        rules={[{ required: true, message: 'Vui lòng nhập số tiền giảm giá!' }]}
                    >
                        <InputNumber min={0} />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Mô tả"
                        name="description"
                        rules={[{ required: true, message: 'Vui lòng nhập mô tả!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Loại phòng"
                        name="roomType"
                        rules={[{ required: true, message: 'Vui chọn loại phòng!' }]}
                    >
                        <Select>
                            {roomType?.data?.map((item: any) => (
                                <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button htmlType="submit" loading={resultCreate.isLoading}>
                                Thêm
                            </Button>

                            <Button
                                htmlType="reset"
                                onClick={onCancel}
                                disabled={resultCreate.isLoading}
                            >
                                Hủy
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>

        </div>
    )
}

export default CreateVoucherModel